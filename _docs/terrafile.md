---
title: Terrafile
---

{% include videos/learn/terrafile-intro.md %}

## Best of Both Worlds

The Terrafile approach simplifies managing modules. The advantage of using a `Terrafile` is centralization. You can centrally define, manage, and update modules. To define modules, add them to `Terrafile`:

Terrafile

```ruby
org "boltops-tools" # set default org
mod "s3", source: "git@github.com:boltops-tools/terraform-aws-s3"
mod "sg", source: "terraform-aws-modules/security-group/aws", version: "3.10.0"
```

To install the modules, run:

    terraspace bundle

Modules are downloaded to your `vendor/modules` folder. You can easily look at the module source code when you need to debug.

{% include terrafile/usage.md %}

## Pure Terraform Approach

Of course, you can still use the typical approach of declaring the source directly in the module source code. Here are some [examples from the docs](https://www.terraform.io/docs/modules/sources.html):

```terraform
module "consul" {
  source = "hashicorp/consul/aws"
  version = "0.1.0"
}

module "example" {
  source = "github.com/hashicorp/example"
}
```

Terraspace provides flexibility. You can use either or both approaches. You get the best of both worlds.
