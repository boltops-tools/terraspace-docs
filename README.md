# Terraspace

[![Gem Version](https://badge.fury.io/rb/terraspace.png)](http://badge.fury.io/rb/terraspace)

The Terraform Framework Docs.

## Usage

Create infrastructure stacks:

    $ terraspace up core -y
    Materializing .terraspace-cache/dev/stacks/core
    Within dir: .terraspace-cache/dev/stacks/core
    => terraform apply -auto-approve
    module.network.google_compute_network.network: Refreshing state... [id=projects/tung-275700/global/networks/dev]
    ...
    module.network.google_compute_router_nat.nat: Refreshing state... [id=tung-275700/us-central1/dev-router/dev-nat]

    Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
    $

Destroy infrastructure stack:

    $ terraspace down core -y
    Materializing .terraspace-cache/dev/stacks/core
    Within dir: .terraspace-cache/dev/stacks/core
    => terraform destroy -auto-approve
    module.network.google_compute_subnetwork.subnetwork: Destruction complete after 12s
    ...
    module.network.google_compute_network.network: Destruction complete after 12s

    Destroy complete! Resources: 5 destroyed.
    $

## Build Only

    $ terraspace build core
    Materializing .terraspace-cache/dev/stacks/core
    $

## Generators

    terraspace new project NAME
    terraspace new module NAME
    terraspace new stack NAME

[Generator Docs](generators.md)

## Structure: Stacks vs Modules

Within the app folder there are modules and stacks folders.

    .
    ├── app
    │   ├── modules
    │   │   ├── instance
    │   │   ├── rds
    │   │   ├── security_group
    │   │   ├── wordpress
    │   │   └── vpc
    │   └── stacks
    │       ├── core
    │       └── wordpress
    └── config
        ├── backend.rb
        └── provider.rb

Both modules and stacks are terraform modules. The difference is how you use them.

* Stacks are meant to be used to group together modules. It makes sense to include business-specific logic here.
* Whereas modules are smaller pieces that are meant to be reused. It does not make sense to include business-specific logic in here.

For example, the "core" stack could be designed to create using the "vpc" module. Also, the "wordpress" stack uses the "wordpress" modules, which in turn can include other modules like an "instance" and "rds" module.

## Tfvars

Tfvar should be place within the `app/stacks/MOD` folder. Example:

    app/stacks/core
    ├── main.tf
    ├── tfvars
    │   ├── base.tfvars
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── variables.tf

You don't have to specify the `-var-file` option, the tfvars files are automatically processed.

The the tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up core -y # merges base and dev
    TS_ENV=prod terraspace up core -y # merges base and prod

The tfvars files should genreally be within the `app/stacks` folder, as stacks can include business-specific logic.  For overriding and one-off purposes, terraspace also supports tfvars files else where.

For more details: [Tfvars Docs](tfvars.md)

## Config Folder

The config folder contains the `provider.rb` and `backend.rb` files that get materialized to the root-level module that you launch. This keeps things DRY.  Example:

    $ terraspace build core
    $ ls .terraspace-cache/dev/stacks/core/
    backend.tf.json  provider.tf.json
    $

## State Files

The state file location can be finely controlled. Example:

config/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            ":region/:env/:build_dir/terraform.tfstate", # variable notation gets expanded out by terraspace
  region:         ":region",
  encrypt:        true,
  dynamodb_table: "terraform_locks"
)
```

Let's say you launch the core stack.

    terraspace up core # provided app/stacks/core exists

It will use something like `us-west-2/development/stacks/core/terraform.tfstate` as the key for the state file.

If you want to just test a module

    terraspace up vpc # provided app/modules/vpc exists and app/stacks/vpc does not

It will use something like `us-west-2/development/modules/vpc/terraform.tfstate` as the key for the state file.

Of course, you can change the state file key path with whatever works for your setup.

## Testing

Terraspace supports testing with real-resources. The usual testing process is:

1. Build a test harness. The test harness is a generated terraspace project with the specified modules and stacks.
2. Runs a `terraspace up` (`terraform apply`) to create real resources.
3. Check the resources. In this case, it simply checks for the terraform output.
4. Runs a `terraspace down` (`terraform destroy`) to clean up the real resources.


More docs: [Testing](testing.md)

## More Docs

* [Backend Config](backend-config.md)
* [CLI Args](cli-args.md)
* [CLI Hooks](cli-hooks.md)
* [DSL Docs](dsl.md)

## Installation

Install with:

    gem install terraspace
