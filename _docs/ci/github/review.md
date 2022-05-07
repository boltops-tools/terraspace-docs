---
title: GitHub CI Review
---

We use GitHub Actions to set up CI with Terraspace. The workflow we used was:

1. **Pull Request**: Shows previews of changes using `terraspace plan`
2. **Push**: Automatically updates the infrastructure using `terraspace up` on `TS_ENV=dev`
3. **Workflow Dispatch**: We use to review the changes again and apply to `TS_ENV=prod`

We also configured Terraspace Cloud for the additional features like PR comments that link to the Terraspace Cloud plans, updates, and logs.

{% include ci/terraspace-cloud-links.md %}

This workflow is only one of many possibilities. You have full control over the workflow and can adjust it to your needs. You can run `terraspace up` multiple times or use `terraspace all`.
