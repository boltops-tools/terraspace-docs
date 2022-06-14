---
title: Push Workflow
---

We'll review the **push** part of the pipeline. Here's the relevant part of `.gitlab-ci.yml` that handles it.

.gitlab-ci.yml

{% raw -%}
```yaml
image: ruby:latest

stages:
  - up dev
# ...

before_script: |
  # install terraform
  git clone https://github.com/tfutils/tfenv.git ~/.tfenv
  echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bash_profile
  export PATH="$HOME/.tfenv/bin:$PATH"
  tfenv install latest
  tfenv use latest
  terraform --version
  # install terraspace
  bundle
  bundle exec terraspace new shim
  echo 'export PATH="/usr/local/bin:$PATH' >> ~/.bash_profile
  export PATH="/usr/local/bin:$PATH"

# ...

up_dev:
  stage: up dev
  rules:
    - if: '$CI_PIPELINE_SOURCE == "push" && $CI_COMMIT_BRANCH == "main"'
  script:
    - terraspace up demo -y

# ...
```
{% endraw -%}

## Setup

The pipeline uses the `ruby:latest` Docker image.

The first part with the `before_script` installs terraform and terraspace. This pipeline hook will run for **every** stage. This is because each GitLab pipeline stage run on a "fresh" environment. This was a GitLab design decision.

{% include ci/push.md name="GitLab" %}

## Results

After the job starts, you'll see something like the following. You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/push/push-ci-running.png)

You can see that a resource was created.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/push/push-ci-finished.png)

Next, we'll look at the Pull Request Pipeline.
