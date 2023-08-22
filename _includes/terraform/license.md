The new [Terraform BSL license announcement](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license) on August 10, 2023 restricts usage of future terraform versions from being used with offerings Hashicorp deems competitive to their own solutions. Here's the [Terraform license](https://github.com/hashicorp/terraform/blob/main/LICENSE). Terraform 1.5.5 and below are unaffected.

To address this, Terraspace errs on the side of [prudence](https://community.boltops.com/t/future-of-terraspace-with-the-terraform-bsl-license-change/1080).

1. We're telling users to use Terraform 1.5.5 and below with Terraspace.
2. The Terraspace framework CLI checks on the client side and only allows Terraform 1.5.5 and below usage by default. You can bypass the check if your usage is acceptable with the BSL license, but you must explicitly do so.
3. For [Terraspace Cloud](https://app.terraspace.cloud/), you cannot use newer Terraform versions. Whether or not you bypass the check, Terraspace Cloud does not allow the use of any Terraform versions greater than 1.5.5. The API will deny requests and prevent data from saving on the Cloud backend side entirely. Terraform forks with a more permissive license will be allowed.

You have **full** control over the Terraform installation since `terraspace` and `terraform` run entirely from your machine. It's just a matter of installing the Terraform version that Hashicorp considers acceptable for your use case.

There's an [opentf manifesto](https://opentf.org/) that will likely result in a Terraform fork. We recommend using that fork once it's available.

Generally, Terraspace will develop and test against Terraform 1.5.5 and below and future Terraform forks. Though, we would like to keep Terraspace and official Terraform working also for the folks on it and within the BSL license usage terms.

If you are within acceptable usage, you can bypass the check with `TS_VERSION_CHECK=0`.