{% if include.provider == "none" %}
You've seen how to get started with Terraspace without a cloud provider at all. Next, you might be interested in a provider with on-prem capabilities.

* [OpenStack](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs)
* [VMWare vSphere](https://registry.terraform.io/providers/hashicorp/vsphere/latest/docs)

From here, you can check out the Docs to learn more:
{% else %}
You've seen how to get started with Terraspace and {{ include.provider }}. You can also check out the Docs to learn more:
{% endif %}

* [Intro]({% link _docs/intro.md %}): Review Terraform intro features.
* [Backend Config]({% link _docs/config/backend.md %}): Configure the backend, where to store the state file:
* [Terraspace Cloud]({% link _docs/cloud.md %}): Upgrade to Terraspace Cloud for extra features like Team Management, Permissions, History, a Web Dashboard, and CI/CD Integration.
* [Deploy Multiple Stacks]({% link _docs/intro/deploy-all.md %}): Deploy all or segments of your infrastructure.
* [Terrafile]({% link _docs/terrafile.md %}): Use modules from anywhere you want.
* [State File Thoughts]({% link _docs/state/approaches.md %}): General state file thoughts.

## Learn Videos

Watch BoltOps Learn video series: