---
title: Azure Review
nav_text: Review
category: ci-azure
order: 7
---

{% include videos/learn/cloud/azure.md %}

We use Azure Pipelines with Terraspace. The pipelines we used was:

1. **Branch Push Pipeline**: Shows previews of changes using `terraspace plan` on `TS_ENV=dev`.
2. **Main Branch Pipeline**: Automatically updates the infrastructure using `terraspace up` on `TS_ENV=dev`
3. **Manual Pipeline**: We used a generalized pipeline that can be run manually with any command and `TS_ENV`. It defaults to a `terraspace plan demo` on the `TS_ENV=prod` environment.

These Azure pipelines are only some of many possibilities. You have full control over the pipeline and can adjust it to your needs. You can run `terraspace up` multiple times or use `terraspace all`.
