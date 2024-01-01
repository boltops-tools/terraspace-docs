---
title: Terraspace Cloud
nav_text: Cloud
category: top-level
subcategory: cloud
order: 4
---

[Terraspace Cloud](https://app.terraspace.cloud) adds additional features and conveniences to the [Terraspace Framework](https://terraspace.cloud). It's specifically designed for Terraspace.

## Features

* **[Dashboard and History]({% link _docs/cloud/dashboard.md %})**: When working with multiple stacks, it can become hard to remember all the stacks you or others on your team have deployed.  Terraspace Cloud helps you visualize the stacks by saving them and providing a web dashboard with deployed stacks, history, logging, and resources. Know who deployed what and when.
* **[CI/CD Integration]({% link _docs/ci.md %})**: Integration with popular CI/CD systems like [GitHub Actions]({% link _docs/ci/github.md %}), [GitLab Pipelines]({% link _docs/ci/gitlab.md %}), [Bitbucket]({% link _docs/ci/bitbucket.md %}), etc. GitHub Pull Request and GitLab Merge Request integration provide a comment with a link to the visual dashboard.
* **[Cost Estimates]({% link _docs/cloud/cost-estimation.md %})**: Terraspace Cloud provides cost estimates for your Terraform resources. Terraspace integrates the [infracost](https://www.infracost.io/) estimation reports with the Terraspace Cloud dashboard and Pull Request comments.
* **[Real-Time Logging]({% link _docs/cloud/realtime-logging.md %})**: Terraspace captures logs that you see in your terminal and streams them live to the Dashboard. You can share this url to teammates who have access to the project.
* **[Team and Permissions Management]({% link _docs/cloud/permissions.md %})**: Fine-grain permission control over access. You can create teams and define permission that target dev vs prod environments.

Terraspace Cloud provides these additional conveniences as an optional paid managed service. The Terraform Framework itself is open source and free to use.

* [Terraspace Cloud Pricing](https://app.terraspace.cloud/pricing)
* [Terraspace Cloud Blog Post](https://blog.boltops.com/2022/06/10/terraspace-cloud/)
