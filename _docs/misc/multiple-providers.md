---
title: Multiple Cloud Provider Thoughts
nav_text: Multiple Providers
category: misc
order: 3
---

While Terraspace can support multiple Cloud Providers within one single project, the code can get complex.  So it is generally not recommended to mixed multiple Cloud Provider resources in a single Terraspace project, particularly if you're using the TFC VCS-Workflow and multiple regions.  First, we'll provide some context and then discuss some of the reasons.

## Where Terraspace Builds

When Terraspace builds a project, it will build it in the `terraspace-cache` folder. It looks something like this:

    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo

Notice that the region is included in the path.

## Terraform Cloud

One of the reason region is included in the path is for [Terraform Cloud]({% link _docs/tfc.md %}). With TFC, the Workspace "Terraform Working Directory" setting needs to be unique for the [VCS-Driven Workflow]({% link _docs/tfc/workflows/vcs.md %}). The code needs to be checked into version control under a unique path.

Essentially, it boils down to how TFC works. We must make sure that the "Terraform Working Directory" is designed for a different workspace. If we are not using TFC VCS-Driven workflow, these limits do not apply.  For example, the [TFC CLI-Driven]({% link _docs/tfc/workflows/cli.md %}) workflow works just fine.

## Other Backend Types

Let's say you're not using TFC and are using another [backend]({% link _docs/config/backend.md %}) like s3 instead. With other Backend types, it's not a VCS-Driven workflow. So Terraspace will build the folder and be able to apply just fine also.

## Multiple Cloud Providers Build Path

Now let's talk about Terraspace with multiple Cloud Providers in one project. Say, a single Terraspace project provisions both AWS and Google resources. Let's say the vm stack provisions a Google VM and the instance stack provisions an AWS Instance.  AWS and Google regions are unique. So their build paths would look something like this:

    .terraspace-cache/us-west-2/dev/stacks/instance
    .terraspace-cache/us-central1/dev/stacks/vm

So for the TFC VCS-Workflow, we're ok in terms of unique build paths. For other workflows like Terraform OSS and the TFC CLI-workflow it also works just fine.

## Multiple Cloud Providers Backends

The backend.tf uses an `expansion` helper that auto-detects the provider plugin installed.  When 2 providers are installed, the auto-detection returns only one provider's backend using this precedence: s3, azurerm, gcs.

Just using one s3 backend for both Cloud Provider resources is probably the most straightforward approach.  Though, it does feel a little dirty to mix up the state of multiple clouds.

If you wanted to use different backends from different cloud providers in a single Terraspace project, there's some extra setup. The `expansion` method needs to be passed a `backend` option. Additionally, we'll need to use some conditional logic to set the different backends on a per stack basis. Here's an example:

config/terraform/backend.tf

```hcl
<% if ENV["GCS_BACKEND"] %>
terraform {
  backend "gcs" {
    bucket = "<%= expansion('terraform-state-:PROJECT-:REGION-:ENV', backend: "gcs") %>"
    prefix = "<%= expansion(':PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION', backend: "gcs") %>" # variable notation expanded by terraspace IE: us-central1/dev/modules/vm
  }
}
<% else %>
terraform {
  backend "s3" {
    bucket         = "<%= expansion('terraform-state-:ACCOUNT-:REGION-:ENV', backend: "s3") %>"
    key            = "<%= expansion(':PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate', backend: "s3") %>"
    region         = "<%= expansion(':REGION', backend: "s3") %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
<% end %>
```

    terraspace up demo # aws
    GCS_BACKEND=1 terraspace up demo2 # google

You can probably use a [Config Hook]({% link _docs/config/hooks.md %}) to set the GCS_BACKEND env variable based on module name, so you don't have to remember it. It starts to get pretty complex though.

## Recommendation

While it is possible to use a single Terraspace project to provision resources from multiple cloud providers, it is cleaner to have multiple terraspace projects. For example, a terraspace project for AWS and one for Google. Terraform resource interfaces are not cloud-agnostic anyway. Terraform supports multiple cloud providers, but the Cloud provider interfaces are different.  So the current recommendation is to use separate Terraspace projects.
