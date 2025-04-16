---
title: GitLab CI Review
nav_text: Review
category: ci-gitlab
order: 6
---

{% include videos/learn/cloud/gitlab.md %}

We use GitLab Pipelines to set up CI with Terraspace. The workflow we used was:

1. **Merge Request**: Shows previews of changes using `terraspace plan`
2. **Push or Branch**: Automatically updates the infrastructure using `terraspace up` on `TS_ENV=dev`
3. **Manual Web**: We used a manually trigger web pipeline to review the changes again and apply to `TS_ENV=prod`

This pipeline is only one of many possibilities. You have complete control over the pipeline and can adjust it to your needs. You can run `terraspace up` multiple times or use `terraspace all`.
