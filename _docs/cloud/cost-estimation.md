---
title: Terraspace Cost Estimation
nav_text: Cost Estimation
category: cloud
order: 3
---

Terraspace Cloud can provide cost estimates for your Terraform resources. Terraspace integrates the [infracost](https://www.infracost.io/) estimation reports with the Terraspace Cloud dashboard and Pull Request comments.

Note: Cost estimation is a paid feature, available as part of the Cost upgraded plan. Learn more about [Terraspace Cloud pricing here](https://app.terraspace.cloud/pricing?type=cost).

## Setup

You can set up Cost Estimation with these steps:

1. Sign up for an account at [Terraspace Cloud](https://app.terraspace.cloud)
2. Configure Terraspace
3. Install Infracost
4. Deploy a Stack

{% include cloud/signup-account.md %}

## Configure Terraspace Cloud

Configure the `cloud.org` and `cloud.cost.enabled` settings.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.org = "REPLACE_ME"  # replace with your Terraspace Cloud org name
  config.cloud.cost.enabled = true
end
```

* **cloud.org**: The org is the organization you created when you signed up for a Terraspace Cloud account.
* **cloud.cost.enabled**: This enables the cost estimates integration.

More Docs: [Cloud Config]({% link _docs/cloud/config.md %})

## Install Infracost

You can install infracost with this curl command:

    curl -fsSL https://raw.githubusercontent.com/infracost/infracost/master/scripts/install.sh | sh

Register for an free infracost cost API key. Here are the [Infracost Get an API Key Docs](https://www.infracost.io/docs/#2-get-api-key). The key is written to  `~/.config/infracost/credentials.yml` and you should be set. If you want to  use the key on another machine, you can also create that file or export key to the `INFRACOST_API_KEY` environment variable.

## Deploy a Stack

After that's set up, Cost Estimation is enabled and looks like this:

    $ terraspace up aws_instance
    Live Stream: https://app.terraspace.cloud/demo/main/aws_instance-dev-us-west-2/streams/stream-A8TEToW2dFpZj66k
    => terraform apply -input=false
    # ...
      Enter a value: yes
    aws_instance.web: Creating...
    aws_instance.web: Creation complete after 12s [id=i-0f686bb06eaf97eb0]

    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
    Running cost estimate...

    Project: aws_instance-dev-us-west-2

     Name                                                 Monthly Qty  Unit   Monthly Cost

     aws_instance.web
     ├─ Instance usage (Linux/UNIX, on-demand, t3.micro)          730  hours         $7.59
     └─ root_block_device
        └─ Storage (general purpose SSD, gp2)                       8  GB            $0.80

     OVERALL TOTAL                                                                   $8.39
    ──────────────────────────────────
    1 cloud resource was detected:
    ∙ 1 was estimated, it includes usage-based costs, see https://infracost.io/usage-file
    Terraspace Cloud https://app.terraspace.cloud/demo/main/aws_instance-dev-us-west-2/updates/update-8SDaiDxbsObgkQIn
    $

Note: By default, updates are only saved to Terraspace Cloud when changes are detected to keep a high signal-to-noise ratio.  You can adjust this behavior with [config.cloud.record]({% link _docs/cloud/config.md %}#record-changes-only)

 The Cloud Estimation looks like this on the Dashboard:

![](https://img.boltops.com/images/terraspace/cloud/costs/cost-estimation-example-v2.png)

## CI/CD Integration

If you're interested in integrating Cost Estimates with CI/CD, take a look at the CI/CD guides:

* [GitHub]({% link _docs/ci/github.md %}): Pull Request Comments with the Cost Estimation is supported.
* [GitLab]({% link _docs/ci/gitlab.md %}): Merge Request Comments with the Cost Estimation is supported.
* [Bitbucket]({% link _docs/ci/bitbucket.md %}): Pull Request Comments with the Cost Estimation is not yet supported. Pull Requests are welcomed.
