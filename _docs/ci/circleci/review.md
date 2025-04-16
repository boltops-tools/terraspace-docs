---
title: CircleCI Review
nav_text: Review
category: ci-circleci
order: 6
---

{% include videos/learn/cloud/circleci.md %}

We use CircleCI Workflows with Terraspace. The workflow we used was:

1. **Feature Branch Push**: Shows previews of changes using `terraspace plan` on `TS_ENV=dev`.
2. **Main Branch Push**: Automatically updates the infrastructure using `terraspace up` on `TS_ENV=dev`
3. **Manual Web**: We used a manually triggered pipeline with approval to review the changes again and apply to `TS_ENV=prod`

These CircleCI workflows are only some of many possibilities. You have full control over the pipeline and can adjust it to your needs. You can run `terraspace up` multiple times or use `terraspace all`.
