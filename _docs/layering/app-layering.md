---
title: "App and Role Layering"
nav_text: App Layering
category: layering
order: 4
---

## Concept

Terraspace also has the concept of `TS_APP` and `TS_ROLE` layering.  This is helpful when you want to reuse the same stack for multiple apps. You can deploy it with App and Role layering. Some possible examples are AWS CodeBuild and CodePipeline resources. When `TS_APP` is set, app-scoped layers are activated. And when `TS_ROLE` is set, role-scoped layers are also activated.

## Why the App and Role Layers?

Infrastructure can be sometimes **infra-centric** or **app-centric**. Some examples:

* **infra-centric**: Multiple apps typically share infra-centric infrastructure components. VPC networks, EKS, AKS, GKE Clusters.
* **app-centric**: App-centric infrastructure focuses on specific apps. For example, build jobs like AWS CodeBuild, Azure Container Service, Google CloudBuild, and pipelines.

With app-centric infrastructure, one option is to create separate stacks. Example:

    app/stacks/app1
    app/stacks/app2
    # and
    terraspace up app1
    terraspace up app2

Or you can create a "standard" app stack and then override configurations with the app-scoped layers. Example:

    app/stacks/app
    # and
    TS_APP=1 terraspace up app
    TS_APP=2 terraspace up app

The **same** stack is reuse for multiple apps. The differences can be handled with different tfvar layered files. The pro is that it's very DRY. The con is that, if an app strays too far away from the "standard" stack code, the code can get complex. In which case, it may make sense to create a new dedicated stack.

## App and Role Layers

First set `TS_APP` and `TS_ROLE`. Example:

    export TS_APP=app1
    export TS_ROLE=deploy

Now build a stack.

    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
        ...
        app/stacks/demo/tfvars/deploy.tfvars
        app/stacks/demo/tfvars/deploy/base.tfvars
        app/stacks/demo/tfvars/deploy/dev.tfvars
        app/stacks/demo/tfvars/deploy/us-west-2.tfvars
        app/stacks/demo/tfvars/deploy/us-west-2/base.tfvars
        app/stacks/demo/tfvars/deploy/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/app1.tfvars
        app/stacks/demo/tfvars/app1/base.tfvars
        app/stacks/demo/tfvars/app1/dev.tfvars
        app/stacks/demo/tfvars/app1/us-west-2.tfvars
        app/stacks/demo/tfvars/app1/us-west-2/base.tfvars
        app/stacks/demo/tfvars/app1/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/app1/deploy.tfvars
        app/stacks/demo/tfvars/app1/deploy/base.tfvars
        app/stacks/demo/tfvars/app1/deploy/dev.tfvars
        app/stacks/demo/tfvars/app1/deploy/us-west-2.tfvars
        app/stacks/demo/tfvars/app1/deploy/us-west-2/base.tfvars
        app/stacks/demo/tfvars/app1/deploy/us-west-2/dev.tfvars

{% include layering/tip.md %}

## Stick to a Few

Since layering is so powerful, you want to choose a few layers that make sense for your team and stick to them.

    $ export TS_APP=app1
    $ export TS_ROLE=deploy
    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
        app/stacks/demo/tfvars/base.tfvars
        app/stacks/demo/tfvars/dev.tfvars
        app/stacks/demo/tfvars/app1/base.tfvars
        app/stacks/demo/tfvars/app1/dev.tfvars
