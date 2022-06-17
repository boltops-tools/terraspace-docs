---
title: Merge Request
---

{% include videos/learn/cloud/gitlab.md %}

Let's take a look at Merge Request workflow. Here's the YAML.

.gitlab-ci.yml

{% raw -%}
```yaml
image: ruby:latest

stages:
# ...
  - plan dev
# ...

# Runs on Merge Request Only
plan_dev:
  stage: plan dev
  only:
  - merge_requests
  script:
    - terraspace plan demo
# ...
```
{% endraw -%}

The difference here is that this will create a GitLab pipeline that only runs on `merge_request` events and will run a `terraspace plan`.

## Create Branch and MR

    git checkout feature1
    vim app/stacks/demo/main.tf
    git add .
    git commit -m "change code"
    git push -u origin feature1

To create a Merge Request, you can either go to the url printed out from `git push`

    https://gitlab.com/ORG/REPO/-/merge_requests/new?merge_request%5Bsource_branch%5D=feature1

Or go to the branch on GitLab and click "Create Merge Request" on the newly pushed branch.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/merge-request/merge-request-create-form.png)

The build should start shortly.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/merge-request/merge-request-create-running.png)

You can see the step by clicking on it.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/merge-request/merge-request-create-running-step.png)

## Logging Details

Click on Details to see the Pipeline Logging output.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/merge-request/merge-request-create-done.png)

A `plan` was run and provides a preview of what would happen. Any additional `git push` to the MR branch will provide updated previews.

## Merge Request Comment

Also, a MR comment with a Terraspace cloud link was added.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/merge-request/merge-request-comment.png)

If you merge the MR, the [Push Pipeline]({% link _docs/ci/gitlab/push.md %}) that we covered earlier will automatically apply the preview.

Next, we'll cover the Manual Web Pipeline.
