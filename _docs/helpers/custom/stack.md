---
title: Stack-Level Helpers
nav_text: Stack
categories: helpers-custom
order: 2
---

{% include videos/learn/custom-helpers.md %}

Stack-Level helpers are only locally available to the specific stack they are defined in.

## Example

To define custom helpers, you create a Ruby module the `config/helpers` folder within the stack definition folder. For example, `app/stacks/demo/config/helpers`. The helper should be within the `Terraspace::Stack` namespace. By convention, the file name should be in underscore casing and the module name is camelized. Example:

app/stacks/demo/config/helpers/custom_helpers.rb

```ruby
module Terraspace::Stack::Demo::CustomHelpers
  def env_name
    case Terraspace.env
    when "dev"
      "development"
    when "prod"
      "production"
    else
      Terraspace.env
    end
  end
end
```

Notice that app/stacks/**demo** is in the module namespace Terraspace::Stack::**Demo**::CustomHelpers. The custom helper methods will be available to use in the `.tf` files. Example:

Tip: You can also use [terraspace new helper]({% link _reference/terraspace-new-helper.md %}) to generate a starter helper file.

app/stacks/demo/main.tf

```hcl
resource "random_pet" "this" {
  length = 2
}

resource "aws_s3_bucket" "this" {
  bucket = "bucket-${random_pet.this.id}"

  tags = {
    Name = "bucket-<%= Terraspace.env %>"
    Env  = "<%= env_name %>" # use of custom helper
  }
}
```

Running:

    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Built in .terraspace-cache/us-west-2/dev/stacks/demo
    $ terraspace info demo --path
    .terraspace-cache/us-west-2/dev/stacks/demo
    $ ls .terraspace-cache/us-west-2/dev/stacks/demo/main.tf
    .terraspace-cache/us-west-2/dev/stacks/demo/main.tf

Produces:

.terraspace-cache/us-west-2/dev/stacks/demo/main.tf

```hcl
resource "random_pet" "this" {
  length = 2
}

resource "aws_s3_bucket" "this" {
  bucket = "bucket-${random_pet.this.id}"

  tags = {
    Name = "bucket-dev"
    Env  = "development" # use of custom helper
  }
}
```

## Considerations

Helper methods are a Terraspace concept. Generally, you should strive to use pure Terraform, so the the code can be used outside of Terraspace. Sometimes though, using helper methods can make your code simpler and more managable. So try to use helper methods wisely.

{% include helpers/generator.md %}
