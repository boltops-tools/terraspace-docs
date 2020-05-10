# Terraspace

[![Gem Version](https://badge.fury.io/rb/terraspace.png)](http://badge.fury.io/rb/terraspace)

Terraform Framework.

## Usage

Create infrastructure stacks:

    $ terraspace up core -y
    Created .terraspace-cache/stacks/core/provider.tf.json
    Created .terraspace-cache/stacks/core/backend.tf.json
    Created .terraspace-cache/stacks/core/variables.tf.json
    Created .terraspace-cache/stacks/core/main.tf.json
    Created .terraspace-cache/stacks/core/outputs.tf.json
    ...
    Within dir: .terraspace-cache/stacks/core
    => terraform apply -auto-approve
    module.sg_nested2.module.sg_child_test.aws_security_group.demo-sg-child: Refreshing state... [id=sg-0816d7ea938d031de]
    module.vpc2.aws_vpc.vpc: Refreshing state... [id=vpc-0006839843392f564]
    module.sg_nested2.aws_security_group.demo-sg-nested: Refreshing state... [id=sg-0f7bebaaaf7c1a194]

    Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
    $

Destroy infrastructure stacks:

    $ terraspace destroy core -y
    Created .terraspace-cache/stacks/core/provider.tf.json
    Created .terraspace-cache/stacks/core/backend.tf.json
    ...
    Within dir: .terraspace-cache/stacks/core
    => terraform destroy -auto-approve
    module.vpc2.aws_vpc.vpc: Refreshing state... [id=vpc-0006839843392f564]
    ...
    module.sg_nested2.module.sg_child_test.aws_security_group.demo-sg-child: Destruction complete after 0s

    Destroy complete! Resources: 3 destroyed.
    $

## Generation Only

    $ terraspace generate vpc
    Created .terraspace-cache/vpc/application.tf.json
    Created .terraspace-cache/vpc/variables.tf.json
    Created .terraspace-cache/vpc/main.tf.json
    Created .terraspace-cache/vpc/outputs.tf.json
    $

## Generators

    terraspace new project NAME
    terraspace new module NAME
    terraspace new stack NAME

More docs: [Terraspace Docs](https://github.com/boltops-tools/terraspace-docs)

## Structure: Stacks vs Modules

Within the app folder there are modules and stacks folders.

    app
    ├── modules
    │   ├── instance
    │   ├── rds
    │   ├── security_group
    │   └── vpc
    └── stacks
        ├── wordpress
        └── core

Both modules and stacks are terraform modules. The difference is how you use them.

* Stacks are meant to be used to group together modules.
* Whereas modules are smaller pieces that are meant to be reused.

For example, the "core" stack could be designed to create using the "vpc" module. Also, the "wordpress" stack to launch and "rds" and "instance" modules.

## Tfvar Files

Tfvar files can be placed in a `tfvars` folder within the stack or module.

    app/stacks/core/
    ├── main.rb
    ├── outputs.rb
    ├── tfvars
    │   ├── base.rb
    │   ├── development.rb
    │   └── production.rb
    └── variables.rb

These files are processed and "layered".  Example:

    TS_ENV=development terraspace up core -y # merges base and development
    TS_ENV=production  terraspace up core -y # merges base and production

The base file takes the lowest precedence.

## Config Folder

The config folder contains the `provider.rb` and `backend.rb` files that get materialized to the root-level module that you launch. This keeps things DRY.

## State Files

The `default_state_path` method creates a key that is scoped to the environment, type, and module name.  An example explains:

config/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            default_state_path, # IE: development/stacks/core/terraform.tfstate
  region:         "us-west-2",
  encrypt:        true,
  dynamodb_table: default_lock_table, # terraspace_locks
)
```

Let's say you launch the core stack.

    terraspace up core # provided app/stacks/core exists

Will use the `development/stacks/core/terraform.tfstate` as the key for the state file.

If you want to just test a module

    terraspace up vpc # provided app/modules/vpc exists and app/stacks/vpc does not

Will use the `development/modules/vpc/terraform.tfstate` as the key for the state file.

Of course, you can change the state file key path with whatever works for your setup.

## DSL Examples

Terraspace supports an optional Ruby DSL.  It gives you access to the full power of Ruby, when HCL is not enough for your purposes.

app/modules/instance/main.rb

```ruby
resource("aws_instance", "this",
  ami: "ami-0ded0751341bcc45b", # amazonlinux2
  instance_type: "t2.micro",
)
```

app/modules/vpc/variables.rb

```ruby
variable("cidr_block",
  default: "10.10.0.0/16",
  description: "cidr block",
)
```

app/modules/vpc/main.rb

```ruby
resource("aws_vpc", "vpc",
  cidr_block: "var.cidr_block",
)
```

app/modules/vpc/outputs.rb

```ruby
output("vpc_arn",
  description: "VPC arn",
  value: "${aws_vpc.vpc.arn}"
)
```

## Installation

Install with:

    gem install terraspace
