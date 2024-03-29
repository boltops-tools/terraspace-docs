---
title: Change Infrastructure
search_title: Change Infrastructure Azure
category: learn-azure
order: 6
---

{% include videos/learn/getting-started/azure.md %}

Now that we have bucket created, let's modify it. Here's the `demo/main.tf` again.

app/stacks/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 1 # using 1, since default separator is '-', also account name can only be 24 characters, and lowercase letters
}

resource "azurerm_resource_group" "this" {
  name     = "demo-resources-${random_pet.this.id}"
  location = "eastus"
}

module "storage_account" {
  source                    = "../../modules/example"
  name                      =  "sa${random_pet.this.id}"
  resource_group_name       = azurerm_resource_group.this.name
  location                  = azurerm_resource_group.this.location
  enable_https_traffic_only = var.enable_https_traffic_only
}
```

As you can see there's a `var.enable_https_traffic_only` variable. One way to update the infrastructure is to change the variable in the `variables.tf` file directly.

app/stacks/demo/variables.tf

```terraform
variable "enable_https_traffic_only" {
  description = "forces HTTPS if enabled"
  type        = string
  default     = true
}
```

However, you can also use `tfvars` files. Terraspace will automatically use `config/stacks/demo/tfvars` files according the `TS_ENV` value. The default value is `TS_ENV=dev`. We'll use tfvars files so we can use the same code for different environments.

## Generate Starter Tfvars Files

Addtionally, Terraspace can generate starter tfvar files for us with the `terraspace seed` command.

    $ terraspace seed demo
    Reading: .terraspace-cache/useast/dev/stacks/demo/variables.tf
          create  config/stacks/demo/tfvars/dev.tfvars
    $

The produced file looks something like this:

config/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# enable_https_traffic_only = true
```

Terraspace parses the `demo/variables.tf` file to generate the `tfvars/dev.tfvars` file.  It detected that all the variables are optional.  We'll uncomment acl and change it to `enable_https_traffic_only = false`.

config/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
enable_https_traffic_only = true
```

Next, we'll update the infrastructure.