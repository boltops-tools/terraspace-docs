The [Terraform BSL license announcement](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license) on August 10, 2023 restricts usage of future terraform versions from being used with offerings Hashicorp deems competitive to their own solutions. Here's the [Terraform license](https://github.com/hashicorp/terraform/blob/main/LICENSE). Terraform 1.5.5 and below are unaffected.

To address this, Terraspace errs on the side of [prudence](https://community.boltops.com/t/future-of-terraspace-with-the-terraform-bsl-license-change/1080).

1. We're telling users to use [OpenTofu](https://opentofu.org/) fork of Terraform.
2. If you're using Terraform, we recommend using Terraform 1.5.5 and below with Terraspace.
3. The Terraspace framework CLI checks on the client side and only allows Terraform 1.5.5 and below usage by default. You can bypass the check if your usage is acceptable with the BSL license, but you must explicitly do so.

You have **full** control over the Terraform installation since `terraspace` and `terraform` run entirely from your machine. It's just a matter of installing the Terraform version that Hashicorp considers acceptable for your use case.

We recomend using the [OpenTofu](https://opentofu.org/) fork.

Generally, Terraspace will develop and test with OpenTofu. Though, we would like to keep Terraspace and HashiCorp's Terraform working also for the folks on it and within the BSL license usage terms.

If you are within acceptable usage, you can bypass the check with `TS_VERSION_CHECK=0`.