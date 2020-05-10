# Tfvars

Tfvar files are in a separate directory to allow modules and stacks to be **reusable**.  Remember modules and stacks are like "functions" and tfvars are like "parameters" passed to them. Putting the tfvars files within the same module directory would be similiar to hard coding parameters. So tfvars are in their own separate mirrored directory structure.

## Structure

Tfvar should be place in a `seed/tfvars` folder that mirror the modules and stack structure.

    seed
    └── tfvars
        ├── modules
        │   ├── instance
        │   │   ├── base.tfvars
        │   │   ├── development.tfvars
        │   │   └── production.tfvars
        │   └── vpc
        │       ├── base.tfvars
        │       ├── development.tfvars
        │       └── production.tfvars
        └── stacks
            └── core
                ├── base.tfvars
                ├── development.tfvars
                └── production.tfvars

## Tfvar Layering

The the tfvar files are processed and "layered".  Example:

    TS_ENV=development terraspace up core -y # merges base and development
    TS_ENV=production  terraspace up core -y # merges base and production

The base file takes the lowest precedence.

## Example

For example, given `base.rb` and `development.rb`:

seed/tfvars/stacks/core/base.rb

```ruby
@vpc_id = "vpc-b12c67c8"
```

seed/tfvars/stacks/core/development.rb

```ruby
@cidr_block = "10.84.0.0/16"
```

It produces


.terraspace-cache/development/stacks/cor/terraform.tfvars.json

```json
{
  "vpc_id": "vpc-b12c67c8",
  "cidr_block": "10.84.0.0/16"
}
```
