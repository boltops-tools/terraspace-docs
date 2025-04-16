---
title: Branch Push Workflow
nav_text: Branch Push
category: ci-circleci
order: 4
---

{% include videos/learn/cloud/circleci.md %}

Let's take a look at Branch Push Workflow.  This is what happens when a push is made to the any other branch except for `main`. Here's the relevant section.

.circleci/config.yml

{% raw -%}
```yaml
parameters:
  manual:
    type: boolean
    default: false

jobs:
  dev_plan:
    docker:
      - image: cimg/ruby:3.1.0
    steps:
      - checkout
      - run: .circleci/bin/install
      - run: terraspace plan demo

workflows:
  # use different dev_plan and dev_up workflows so it shows up on the CircleCI dashboard
  dev_plan:
    when:
      not: << pipeline.parameters.manual >>
    jobs:
      - dev_plan:
          filters:
            branches:
              ignore: main
```
{% endraw -%}

After the install script, it calls the

    terraspace plan demo

A `terraspace plan` automatically runs for dev infrastructure for every push to any branch that is not `main`. This gives a preview of what changes will happen to the dev infrastructure before the branch is merged into `main`.

## Create Branch and PR

    git checkout feature
    vim app/stacks/demo/main.tf
    git add .
    git commit -m "change code"
    git push -u origin feature

To create a Pull Request, you can either go to the url printed out from `git push`

    https://github.com/ORG/REPO/pull/new/feature

Or go to the branch on GitHub and click "New Pull Request". Click "Create pull request".

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/branch/open-pr.png)

Now here's the CircleCI quirk we noted in the previous Push Workflow. The PR event does not fire when the PR is initially opened. There needs to an additional git push after the PR has been opened for CircleCI to set `CIRCLE_PULL_REQUEST` for that build.

This is important because we are also using `terraspace_vcs_github` in the `Gemfile` so Terraspace can post PR comments with a summary of the changes.

Let's make another change and push again.

    vim app/stacks/demo/main.tf
    git add .
    git commit -m "another code change"
    git push

We'll see another build.

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/branch/build-started.png)

## Logging Details

Click on Details to see the Pipeline Logging output.

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/branch/ci-results-output.png)

A `plan` was run and provided a preview of what would happen. Any additional `git push` to the PR branch will provide updated previews.

If you merge the PR, the [Push Workflow]({% link _docs/ci/circleci/push.md %}) that we covered earlier will automatically apply the preview.

Next, we'll cover the Manual Workflow pipeline.
