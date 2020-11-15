---
title: Project-Level Helpers
nav_text: Project
categories: helpers-custom
order: 1
---

Project-Level helpers are globally available to all modules.

## Example

To create custom helpers, you define a Ruby module in the `config/helpers` folder at the root of the Terraspace project with the `Terraspace::Project` namespace. By convention, the file name should be in underscore casing and the module name is camelized.

config/helpers/custom_helpers.rb

```ruby
module Terraspace::Project::CustomHelpers
  def app_name
    "#{@mod.name}-#{Terraspace.env}"
  end
end
```

Tip: You can also use [terraspace new helper]({% link _reference/terraspace-new-helper.md %}) to generate a starter helper file.

The custom helper methods will be available to use in the `.tf` files. Example:

app/stacks/demo/bucket.tf

```hcl
resource "random_pet" "this" {
  length = 2
}

resource "aws_s3_bucket" "this" {
  bucket = "bucket-${random_pet.this.id}"

  tags = {
    Name = "<%= app_name %>"
    Env  = "<%= Terraspace.env %>"
  }
}
```

So running:

    $ terraspace build bucket
    Building .terraspace-cache/us-west-2/dev/stacks/bucket
    Built in .terraspace-cache/us-west-2/dev/stacks/bucket
    $ terraspace info bucket --path
    .terraspace-cache/us-west-2/dev/stacks/bucket
    $ ls .terraspace-cache/us-west-2/dev/stacks/bucket/main.tf
    .terraspace-cache/us-west-2/dev/stacks/bucket/main.tf

Produces:

.terraspace-cache/us-west-2/dev/stacks/bucket/main.tf

```hcl
resource "random_pet" "this" {
  length = 2
}

resource "aws_s3_bucket" "this" {
  bucket = "bucket-${random_pet.this.id}"

  tags = {
    Name = "bucket-dev"
    Env  = "dev"
  }
}
```

## Considerations

While defining globally helpers is convenient and powerful, you should consider that it makes the modules no longer independent and self-contained. Instead, the modules or stacks depend on the Terraspace project custom helpers being available. There are good use cases for custom helpers, though, so use them if you need to.

{% include helpers/generator.md %}
