---
title: "Dependencies Tfvars Considerations"
nav_text: "Considerations"
categories: dependencies-tfvars
---

Below are some things you should consider when using dependencies and tfvars.  They may also help you understand how Terraspace dependencies and tfvars work.

## Compile Time

Terraspace always evaluates all layered tfvars files at terraspace compile time. This means helpers like `output` and `depends_on` will always register the dependencies with Terraspace if they are called. Let's say you comment out the HCL tfvar line like so:

    # vpc_id = <%= output('vpc.vpc_id') %> # notice comment at the start of the line

Even though the HCL is commented out, the ERB with the output method is still being called. So the dependencies still register with Terraspace. You must delete the line or comment out the ERB call with `<%#` instead of `<%=` to instead to remove the dependency.  Example:

    # vpc_id = <%# output('vpc.vpc_id') %> # notice <%# vs <%=

## Default Output Format

By default, the output value is formatted as JSON. The reason json is use is discussed in [Complex Types]({% link _docs/dependencies/tfvars/complex.md %}).

## Dependency Resolution Internals

Here's a boiled down explanation of how Terraspace dependency resolution works.

* **Pass 1**: Terraspace reads the tfvars in an initial pass. In this pass, Terraspace builds the dependency graph and stores it.
* **Pass 2**: By the time the second pass occurs, dependencies have been resolved. Terraspace then replaces the `output` helper with the actual resolved values.

Knowing a little bit about how Terraspace internals will you help understand the rest of the considerations on this page.

## Dependency Words

Since Terraspace makes two passes of tfvars files to calculate the dependency graph, it does 2 ERB evaluations of the tfvars. Usually, this would mean helper methods like `aws_secret` would be called twice. It would make 2 API calls and take twice as long. If you use a lot of helper methods, it can add up.

So Terraspace optimizes the tfvars processing by only evaluating `depends_on` and `output` helper methods in the 1st pass. In the 2nd pass, all of the ERB method calls are evaluated. This was introduced in Terraspace 2.2+.

If you have more complicated logic in your tfvars files that also need to be evaluated in the 1st pass, you can tell Terraspace to evaluate all ERB calls with `config.build.dependency_words`.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.build.dependency_words = "*"
end
```

You can also include only specific words to be evaluated in the first pass with `config.build.dependency_words`

config/app.rb

```ruby
Terraspace.configure do |config|
  config.build.dependency_words = ["list", "end"]
end
```

This results in the 1st pass to also evaluate the `list` and `end` ERB calls, and `item['name']` works.

app/stacks/demo/tfvars/dev.tfvars

    <% list.each do |item| %>
    length<%= item['name'] %> = <%= output("demo.length") %>
    <% end %>

## Dependency Must Be Defined in tfvars

Only tfvars files respect the use of the `output` and `depends_on` helpers. When `terraspace all` runs, it double processes tfvars files with ERB/ruby. The 1st pass figures out the dependency graph. The 2nd pass fetches the output values from the resolved graph. By design, Terraspace avoids the double processing of other files like `main.tf`. So you must declare dependencies in tfvars. Related issue [#115](https://github.com/boltops-tools/terraspace/issues/115)

## OutputProxy Object

The `output` helper returns an `OutputProxy` object, not an actual JSON string. This is because the result can ultimately be any type of data, not just a string, so a proxy object is used. The proxy object also allows Terraspace to process things whether or not the statefile is available.

Since the return value from the `output` helper is a proxy object, this code will not work:

    <%= JSON.load(output("stack.list_output")) %>

Instead, you can:

1. Use HCL and locals to access elements in the data structure.
2. Use Ruby to access elements before passing to the Input Variables.

Both methods are covered in the [Complex Types Docs]({% link _docs/dependencies/tfvars/complex.md %}).

