---
title: Module-Level Helpers
nav_text: Module
categories: helpers-custom
order: 3
---

{% include videos/learn/custom-helpers.md %}

Module-Level helpers are only locally available to the specific module they are defined in.

## Example

To define custom helpers, you create a Ruby module the `config/helpers` folder within the module definition folder. For example, `app/modules/example/config/helpers`. The helper should be within the `Terraspace::Module` namespace. By convention, the file name should be in underscore casing and the module name is camelized. Example:

app/modules/example/config/helpers/custom_helpers.rb

```ruby
module Terraspace::Module::Example::CustomHelpers
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

Notice that app/modules/**example** is in the module namespace Terraspace::Module::**Example**::CustomHelpers. The custom helper methods will be available to use in the `.tf` files. Example:

Tip: You can also use [terraspace new helper]({% link _reference/terraspace-new-helper.md %}) to generate a starter helper file.

app/modules/example/main.tf

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

    $ terraspace build example
    Building .terraspace-cache/us-west-2/dev/modules/example
    Built in .terraspace-cache/us-west-2/dev/modules/example
    $ terraspace info example --path
    .terraspace-cache/us-west-2/dev/modules/example
    $ ls .terraspace-cache/us-west-2/dev/modules/example/main.tf
    .terraspace-cache/us-west-2/dev/modules/example/main.tf

Produces:

.terraspace-cache/us-west-2/dev/modules/example/main.tf

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
