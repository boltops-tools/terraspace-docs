---
title: Terraspace Summary Command
---

The `terraspace summary` command shows a summary of all the resources grouped by statefile. This can be quite useful to help keep track of resources created by the different statefiles.

## Example

    $ terraspace summary
    Summary of resources based on backend storage statefiles
    Downloading statefiles to /tmp/terraspace/statefiles/terraform-state-111111111111-us-west-2-dev/us-west-2/dev/
    modules/instance/terraform.tfstate
        aws_ami ubuntu: ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-20191107
        aws_instance web: i-074dcbc68f1cadc30
    modules/security-group/terraform.tfstate
        aws_security_group allow_tls: first-buck
        random_pet this: first-buck
    $

To learn more about the Terraspace statefile approach see: [Terraform Statefile Approaches and Thoughts]({% link _docs/state/approaches.md %}).

{% include intro/modules-vs-stacks.md %}
