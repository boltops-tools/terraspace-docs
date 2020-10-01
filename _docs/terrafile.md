---
title: Terrafile
---

{% include terrafile/intro.md %}

## Best of Both Worlds

The Terrafile approach simplifies managing modules. The advantage of using a `Terrafile` is centralization. You can centrally define, manage, and update modules. To install the modules, you add them to `Terrafile` and run:

    terraspace bundle

Modules are downloaded to your `vendor/modules` folder. You can easily look at the module source code when you need to debug.

A `Terrafile.lock` file is also generated. This file can be committed to version control to ensure that everyone on the team uses the exact same version.

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
