# Tfvars

Tfvar files are in a separate directory to allow modules and stacks to be **reusable**.  Remember modules and stacks are like "functions" and tfvars are like "parameters" passed to them. Putting the tfvars files within the same module directory would be similiar to hard coding parameters. So tfvars are in their own separate mirrored directory structure.

## Structure

Here's an example app modules and stacks folder structure.

    app
    ├── modules
    │   ├── instance
    │   └── vpc
    └── stacks
        ├── core
        └── wordpress

Tfvar should be place in a `seed/tfvars` folder that mirror the modules and stack structure.

    seed
    └── tfvars
        ├── modules
        │   ├── instance
        │   │   ├── base.rb
        │   │   ├── development.rb
        │   │   └── production.rb
        │   └── vpc
        │       ├── base.rb
        │       ├── development.rb
        │       └── production.rb
        └── stacks
            └── core
                ├── base.rb
                ├── development.rb
                └── production.rb

You don't have to specify the `-var-file` option, the tfvars files are automatically processed.

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


.terraspace-cache/development/stacks/core/terraform.tfvars.json

```json
{
  "vpc_id": "vpc-b12c67c8",
  "cidr_block": "10.84.0.0/16"
}
```
