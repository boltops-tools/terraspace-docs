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

* Pass 1: Terraspace reads the tfvars in an initial pass. In this pass, Terraspace builds the dependency graph and stores it.
* Pass 2: By the time the second pass occurs, dependencies have been resolved. Terraspace then replaces the `output` helper with the actual resolved values.

Knowing a little bit about how Terraspace internals will you help understand the rest of the considerations on this page.

## Dependency Must Be Defined in tfvars

Only tfvars files respect the use of the `output` and `depends_on` helpers. By desgin, Terraspace avoids the double processing of other files like `main.tf`. So you must declare dependencies in tfvars.

## OutputProxy Object

The `output` helper returns an `OutputProxy` object, not an actual JSON string. This is because the result can ultimately be any type of data, not just a string, so a proxy object is used. The proxy object also allows Terraspace to process things whether or not the statefile is available.

Since the return value from the `output` helper is a proxy object, this code will not work:

    <%= JSON.load(output("stack.list_output")) %>

Instead, you can:

1. Use HCL and locals to access elements in the data structure.
2. Use Ruby to access elements before passing to the Input Variables.

Both methods are covered in the [Complex Types Docs]({% link _docs/dependencies/tfvars/complex.md %}).
