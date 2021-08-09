---
title: Terraform Registry
nav_text: Registry
categories: sources
order: 2
---

## Example: Public

Terrafile

```ruby
mod "sg", source: "terraform-aws-modules/security-group/aws" # terraform registry public example
```

Running:

    terraspace bundle

Will download module to:

    vendor/modules/sg

## Example: Private

Terrafile

```ruby
mod "webapp", source: "app.terraform.io/demo-qa/s3-webapp/aws" #, clone_with: "https"
```

Running:

    terraspace bundle

Will download module to:

    vendor/modules/webapp

## Authorization with Private Registry

For private repos, terraspace queries the Terraform API to discover the `git clone` address.

The `terraspace bundle` will use `git clone` with the `git` protocol by default to download the module. IE:

    git clone git@github.com:org/s3-webapp

You can adjust this behavior with the `clone_with` option. IE:

Terrafile

```ruby
mod "webapp", source: "app.terraform.io/demo-qa/s3-webapp/aws", clone_with: `https`
```

Results in `https` being used.

    git clone https://github.com/org/s3-webapp

You can also globally set the `clone_with`

```ruby
clone_with "https"
mod "webapp", source: "app.terraform.io/demo-qa/s3-webapp/aws" # clone_with is implied from the previous line
```

When using the `git` protocol, the machine will need an ssh key that has access to the discovered repo.

When using the `https` protocol, you can configure `~/.netrc` with the username and password.
