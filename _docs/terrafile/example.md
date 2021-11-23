---
title: Terraspace Bundle Example Command
---

{% include videos/learn.md
     url="terraspace-terrafile/lessons/terrafile-bundle-example-command"
     img="https://uploads-learn.boltops.com/gpbbmgad43urpz2h106sfe7hctrv" %}

Terraspace bundler has the ability to import example from a module's examples folder with:

    terraspace bundle example MOD EXAMPLE

## Examples

    $ terraspace bundle example eks managed_node_groups
    Example from vendor/modules/eks/examples/managed_node_groups imported to app/stacks/managed_node_groups

Specify the stack name:

    $ terraspace bundle example eks managed_node_groups --name eks
    Example from vendor/modules/eks/examples/managed_node_groups imported to app/stacks/eks

Terraspace copies starter examples within the downloaded module to the `app/stacks` folder. Terraspace also rewrites the module `source` attribute to point to the correct location. It practically writes code for you, saving you time. 😁

Also see: [Stack Option]({% link _docs/terrafile/options/stack.md %}).