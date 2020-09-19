---
title: Deploy All
---

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