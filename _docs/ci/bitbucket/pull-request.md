---
title: Pull Request
---

Let's take a look at Pull Request pipeline.

bitbucket-pipelines.yml

{% raw -%}
```yaml
image: ruby:latest

pipelines:
# ...
  pull-requests:
    '**': # this runs as default for any branch not elsewhere defined
      - step:
          script:
            - .bitbucket/bin/install
            - .bitbucket/bin/terraspace plan demo
```
{% endraw -%}

The difference here is that this will create a GitLab pipeline that only runs on `pull_request` events and will run a `terraspace plan`.

## Create Branch and PR

    git checkout feature1
    vim app/stacks/demo/main.tf
    git add .
    git commit -m "change code"
    git push -u origin feature1

To create a Pull Request, you can either go to the url printed out from `git push`

    https://bitbucket.org/ORG/REPO/pull-requests/new?source=feature1&event_source=branch_list

Or go to the branch on GitLab and click "Create Merge Request" on the newly pushed branch.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/pull-request/pull-request-create-link.png)

Fill out the form if you wish and click "Create pull request"

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/pull-request/pull-request-create-form.png)

The build should start shortly.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/pull-request/pull-request-in-progress.png)

## Logging Details

Click on Details to see the Pipeline Logging output.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/pull-request/pull-request-completed.png)

A `plan` was run and provided a preview of what would happen. Any additional `git push` to the PR branch will provide updated previews.

If you merge the PR, the [Push Pipeline]({% link _docs/ci/gitlab/push.md %}) that we covered earlier will automatically apply the preview.

Note: Currently, the terraspace_ci_bitbucket plugin does not create a PR comment. Pull Requests with improvements are welcomed.

Next, we'll cover the Manual Custom Pipeline.
