---
title: Main Push Workflow
---

We'll review the when Main Push Workflow. This is what happens when a push is made to the `main` branch. Here's the relevant section.

.circleci/config.yml

{% raw -%}
```yaml
parameters:
  manual:
    type: boolean
    default: false

jobs:
  dev_up:
    docker:
      - image: cimg/ruby:3.1.0
    environment: *common_env_vars
    steps:
      - checkout
      - run: .circleci/bin/install
      - run: terraspace up demo -y

workflows:
  dev_up:
    when:
      not: << pipeline.parameters.manual >>
    jobs:
      - dev_up:
          filters:
            branches:
              only: main
```
{% endraw -%}

## Pipeline Parameter

The config defines a `manual` pipeline parameter. We're using `where.not` in the workflows section to tell CircleCI to run the `dev_plan` when `manual=false`.

## Build Script

The pipeline uses the `cimg/ruby:3.1.0` Docker image. This is a Docker image managed by CircleCI.

The first part installs terraform and terraspace with a supporting script that looks something like this:

.circleci/bin/install

    #!/bin/bash
    # install terraform
    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    export PATH="$HOME/.tfenv/bin:$PATH"
    tfenv install latest
    tfenv use latest

    # install terraspace
    bundle install
    terraspace --version

After the install script, it calls the

    terraspace up demo -y

Essentially, `terraspace up` automatically runs for dev infrastructure for every push to `main`.

## CircleCI Notes

* CircleCI is not currently able to evaluate `config.yml` and build different workflows based on whether it's a PR event or not. Instead, you can possibly check for the environment variable `CIRCLE_PULL_REQUEST` in your script **during** the build.
* Found that the PR event does not fire when the PR is initially opened. There needs to an additional git push after the PR has been opened for `CIRCLE_PULL_REQUEST` to be set.
* There's a discussion and a feature request for the CircleCI team on this topic: [Build only pull request to a specific branch](https://discuss.circleci.com/t/build-only-pull-request-to-a-specific-branch/903).
* This is why this guide chooses to use push workflows with different branches.

{% include ci/push.md name="CircleCI" %}

## Results

After the job starts, you'll see something like the following. You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/push/push-ci-running.png)

You can see that a resource was created.

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/push/push-ci-finished.png)

Next, we'll look at the Branch Workflow.
