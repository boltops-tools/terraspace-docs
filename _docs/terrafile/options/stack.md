---
title: Terrafile Stack Options
---

Terraspace can copy starter examples within the downloaded module to the `app/stacks` folder.  Terraspace is also smart enough to rewrite the module `source` attribute to point to the correct location.  It practically writes code for you, saving you time. 😁

## Summary Table

The stack option can understand a String or Hash. In its String form, you're setting the stack src. With the Hash form, you have more fine-grain control over the options to set. Here's a table with the options:

Stack Option | Description | Default
--- | --- | ---
dest | The default destination folder is `app/stacks`. Though you can change it to locations like `vendor/stacks`, it's recommended to keep the default. | app/stacks
examples | Examples folder name. | examples
name | The stack name. IE: `app/stacks/NAME`. By default, the mod's name is used. | mod's name
purge | If set to `true`, then the existing `app/stacks/vpc` folder is removed.  The setting defaults to `false`, so Terraspace will not wipe changes you've made. Note, only the specific stack is removed. The rest of the stacks in the `app/stacks` folder are left untouched. You must manually remove other stacks by design. | false
src | Relative path to the specific example within the examples folder. The `examples/` prefix is optional. | nil

## String Example

Here's an example Terrafile to explain:

```ruby
mod "vpc", "terraform-aws-modules/vpc/aws", stack: "simple-vpc" # notice examples/ prefix is optional
```

By running:

    terraspace bundle

Terraspace copies `vendor/modules/vpc/examples/simple-vpc` to `app/stacks/vpc`.  By default, the stack name matches the module name. To then deploy the stack:

    terraspace up vpc

## Hash Example

You can also configure the stack options with a Hash if you need more control:

```ruby
mod "vpc", "terraform-aws-modules/vpc/aws",
              stack: {
                dest: "vendor/stacks",
                examples: "examples",
                name: "example-vpc",
                purge: true,
                src: "simple-vpc",
              }
```

Running:

    terraspace bundle

Will copy `vendor/modules/vpc/examples/simple-vpc` to `app/stacks/example-vpc` respecting the stack options for purge, dest, name, prefix, etc.

## Array Example

The stack option can also take an Array. This allows you to configure multiple stacks. Each item of the Array can be a String, Hash, or a mixture of both.

Also, `stacks` is an alias for the `stack` option. You can use either name.

Here's an example with an Array of stacks:


```ruby
mod "vpc", "terraform-aws-modules/vpc/aws", stacks: ["simple-vpc", "complete-vpc"]
```

Running:

    terraspace bundle

Will create:

    app/stacks/simple-vpc
    app/stacks/complete-vpc

From the downloaded module src:

    vendor/modules/vpc/examples/simple-vpc
    vendor/modules/vpc/examples/complete-vpc

## All Examples

You can also have Terraspace bundler copy over all examples to the `app/stacks` folder. You simply do that by specifying the `:all` symbol. Example:


```ruby
mod "vpc", "terraform-aws-modules/vpc/aws", stacks: :all
```

Running:

    terraspace bundle

Is like:

    cp -r vendor/modules/vpc/examples/* app/stacks/

With the post processing logic that Terraspace performs to adjust the module source location.
