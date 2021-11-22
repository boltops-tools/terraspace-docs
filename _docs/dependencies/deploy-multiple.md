---
title: "Deploy Multiple Stacks"
nav_text: Deploy Multiple
categories: dependencies
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-all-walkthrough"
     img="https://uploads-learn.boltops.com/pc2ag09b2ewsbps4808nlu1ja2kx" %}

Terraspace allows you to deploy multiple stacks with a single command:

    terraspace all up

## How to Configure Dependencies

To configure dependencies, you simply wire stack outputs to inputs variables of another stack. Here is an example of an instance stack that depends on a vpc stack.

app/stacks/vpc/outputs.tf

    output "vpc_id" {
      description = "VPC ID"
      value       = aws_vpc.this.id
    }

app/stacks/instance/variables.tf

    variable "vpc_id" {
      description = "VPC to launch instance in"
      type        = string
      default     = null
    }

Wire them together with the `output` helper in the instance tfvars file.

app/stacks/instance/tfvars/base.tfvars

    vpc_id = <%= output('vpc.vpc_id') %>

Terraspace infers the dependency from this wiring and will deploy the vpc before the instance. It's that simple.

## Deploying

When you run the `terraspace all up` command, Terraspace will deploy the resources in batches:

    $ terraspace all up
    Will run:
        terraspace up vpc # batch 1
        terraspace up instance # batch 2
    Are you sure? (y/N) y
    Batch Run 1:
    Running: terraspace up vpc Logs: log/up/vpc.log
    terraspace up vpc:  Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
    Batch Run 2:
    Running: terraspace up instance Logs: log/up/instance.log
    terraspace up instance:  Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
    Time took: 7s
    $

Terraspace provides a reduced-noise summary of the runs. The full logs are also written for further inspection and debugging. The [terraspace logs]({% link _reference/terraspace-logs.md %}) command is useful for viewing the logs.

## Dependency Graph & Parallelism

Terraspace builds the dependency graph and runs the commands in parallel as much as possible.  Let's say you have this dependency graph:

![](https://img.boltops.com/boltops/tools/terraspace/graphs/instance-redis-mysql-vpc.png)

Terraspace will deploy resources in this order:

1. vpc - deployed first
2. redis and mysql - deployed together
3. instance - deployed last

## Configuring Concurrency

By default, terraspace runs up to 5 concurrency processes. If you hit cloud provider rate limits, you may want to configure the rate of concurrency. To configure concurrency:

config/app.rb:

```ruby
Terraspace.configure do |config|
  config.all.concurrency = 2
  # ...
end
```

More docs: [Config Reference]({% link _docs/config/reference.md %})

## Filtering Subgraphs

You can filter for subtrees or subgraphs to deploy:

    terraspace all up mysql # will deploy vpc and then mysql

More info: [Subgraphs Docs]({% link _docs/dependencies/subgraphs.md %})

You can also configure Terraspace to completely ignore stacks with the [all.ignore_stacks]({% link _docs/config/reference.md %}) option. This can be useful if you have test stacks that you don't want to be considered as part of the graph yet.

config/app.rb

```ruby
Terraspace.configure do |config|
  # ...
  config.all.ignore_stacks = ["stack1"]
end
```

## Best of Both Worlds

Terraspace allows you to deploy all stacks with a single command. Instead of having to run `terraspace up` on each individual stack. You can run:

    terraspace all up

Additionally, you can target [subtrees or subgraphs]({% link _docs/dependencies/subgraphs.md %}) to deploy:

    terraspace all up mysql # will deploy vpc and then mysql

Lastly, you can always drop down and run the individual stack to debug. Example:

    terraspace up vpc
    terraspace up redis
    terraspace up mysql
    terraspace up instance

Terraspace gives you the best of both worlds.
