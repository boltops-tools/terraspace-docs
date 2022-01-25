---
title: Restricting Regions
nav_text: Regions
categories: restricting
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-restricting-deployment-to-allowed-aws-regions"
     img="https://uploads-learn.boltops.com/w0gh4hfn2pu3p07j71y8wc6jhgkm" %}

If you want to restrict which regions can be deployed, you can use:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.regions = ["us-west-2"]
  # config.deny.regions = ["us-east-1"]
end
```

{% include config/restricting/deny-wins.md %}

## Example 1: Simple Allow

Let's say we have a stack:

    $ terraspace list
    app/stacks/stack1

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.regions = ["us-west-2"]
end
```

You will only be able to deploy to region `us-west-2`. If you try to deploy to `us-east-1`, you'll get an error message:

    $ AWS_REGION=us-east-1 terraspace up stack1
    ERROR: The configs do not allow this.
    This region is not allowed to be used: Detected current region=us-east-1
    Allow regions: us-west-2

You're only allowed to deploy to `AWS_REGION=us-west-2`.

    $ AWS_REGION=us-west-2 terraspace up stack1
    ...
    => terraform apply -input=false
    ...
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:
    ...

## Example 2: Simple Deny

Let's say we have a stack:

    $ terraspace list
    app/stacks/stack1

config/app.rb

```ruby
Terraspace.configure do |config|
  config.deny.regions = ["us-east-1"]
end
```

With this rule, you'll be able to deploy to all regions except `AWS_REGION=us-east-1`. Example:

    $ AWS_REGION=us-east-1 terraspace up stack1
    ERROR: The configs do not allow this.
    This region is not allowed to be used: Detected current region=us-east-1
    Deny regions: us-east-1

You'll be able to deploy to `AWS_REGION=us-west-2` as well as other regions:

    $ AWS_REGION=us-west-2 terraspace up stack1
    ...
    => terraform apply -input=false
    ...
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:
    ...

## Example 3: Complete Customization

For even more control over which regions are allowed, you can assign an object that implements `call` and returns an Array. This is an advanced technique. Example:

config/app.rb

```ruby
class AllowRegions
  def call(stack)
    ["us-west-2"]
  end
end
class DenyRegions
  def call(stack)
    # returns nil when nothing provided
  end
end

Terraspace.configure do |config|
  config.allow.regions = AllowRegions
  config.deny.regions = DenyRegions
end
```

The `AllowRegions` class defines the `call` method and takes the `stack` argument. Its value is the name of the current stack being deployed. The `AllowRegions` and `DenyRegions` classes should return an Array or nil. Returning `nil` is the same as not setting the option.

For Azure Cloud users, you can also use `allow.locations` and `deny.locations` instead of `allow.regions` and `deny.regions`.
