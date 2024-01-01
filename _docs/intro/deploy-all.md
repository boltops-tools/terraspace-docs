---
title: Deploy All
category: intro
order: 4
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-all-background-info"
     img="https://learn-uploads.boltops.com/awqvc0tfgo7hs2x0qsstr8nvxi8s" %}

Also, check out the blog post: [Terraspace All: Deploy Multiple Stacks or Terraform Modules At Once](https://blog.boltops.com/2020/09/19/terraspace-all-deploy-multiple-stacks-at-once)

Terraspace also allows you to deploy all stacks with a single command:

    terraspace all up

Terraspace calculates the dependency graph and ensures they are deployed in the correct order. Here's a dependency graph example:

![](https://img.boltops.com/boltops/tools/terraspace/dependencies/deploy-all-a1.png)

Terraspace will parallelize the batches as much as possible:

    $ terraspace all up
    Building one stack to build all stacks
    Building .terraspace-cache/us-west-2/dev/stacks/c2
    Downloading tfstate files for dependencies defined in tfvars...
    Built in .terraspace-cache/us-west-2/dev/stacks/c2
    Will run:
       terraspace up b2 # batch 1
       terraspace up c1 # batch 1
       terraspace up c3 # batch 1
       terraspace up d1 # batch 1
       terraspace up b1 # batch 2
       terraspace up c2 # batch 2
       terraspace up b3 # batch 3
       terraspace up a1 # batch 4
    Are you sure? (y/N)

Once you confirm, Terraspace deploys the batches in parallel. Essentially, terraspace handles the orchestration.

    Are you sure? (y/N) y
    Batch Run 1:
    Running: terraspace up b2 Logs: log/up/b2.log
    Running: terraspace up c1 Logs: log/up/c1.log
    Running: terraspace up c3 Logs: log/up/c3.log
    Running: terraspace up d1 Logs: log/up/d1.log
    terraspace up b2:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    terraspace up c1:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    terraspace up c3:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    terraspace up d1:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    Batch Run 2:
    Running: terraspace up b1 Logs: log/up/b1.log
    Running: terraspace up c2 Logs: log/up/c2.log
    terraspace up b1:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    terraspace up c2:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    Batch Run 3:
    Running: terraspace up b3 Logs: log/up/b3.log
    terraspace up b3:  Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    Batch Run 4:
    Running: terraspace up a1 Logs: log/up/a1.log
    terraspace up a1:  Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
    Time took: 41s
    $

Terraspace also provides a reduced-noise summary of the runs. The full logs are also written for further inspection and debugging.

## Targetting Subgraphs

You can also deploy specific parts of your infrastructure by specifying the stack names. Example:

![](https://img.boltops.com/boltops/tools/terraspace/dependencies/deploy-all-a1-sub-b3.png)

Terraspace only deploys the subgraph:

    $ terraspace all up b3
    Will run:
       terraspace up c3 # batch 1
       terraspace up d1 # batch 1
       terraspace up c2 # batch 2
       terraspace up b3 # batch 3
    Are you sure? (y/N)

You can also specify multiple stacks and subgraphs:

![](https://img.boltops.com/boltops/tools/terraspace/dependencies/deploy-all-a1-sub-b1-b3.png)

Here's what that looks like:

    $ terraspace all up b1 b3
    Will run:
       terraspace up c1 # batch 1
       terraspace up c3 # batch 1
       terraspace up d1 # batch 1
       terraspace up b1 # batch 2
       terraspace up c2 # batch 2
       terraspace up b3 # batch 3
    Are you sure? (y/N)

{% include dependencies/demo-repo.md %}

## Best of Both Worlds

Terraspace allows you to deploy all stacks with a single command. Instead of having to run `terraspace up` on each individual stack. You can run:

    terraspace all up

Additionally, you can target [subtrees or subgraphs]({% link _docs/dependencies/subgraphs.md %}) to deploy:

    terraspace all b1 b3

Lastly, you can always drop down and run the individual stack to debug. Example:

    terraspace up c1
    terraspace up b1

Terraspace gives you the best of both worlds.

{% include dependencies/more-info.md %}