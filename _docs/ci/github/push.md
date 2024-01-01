---
title: Push Workflow
category: ci-github
order: 3
---

{% include videos/learn/cloud/github.md %}

Let's take a look at the push workflow.

.github/workflows/push.yml

{% raw -%}
```yaml
name: Push Up
on:
  push:
    branches:
      - main

jobs:
  run:
    runs-on: ubuntu-latest

    env:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      AWS_REGION: us-west-2
      GH_TOKEN: ${{ github.token }}
      TS_ENV: dev
      TS_TOKEN: ${{ secrets.TS_TOKEN }}
      # INFRACOST_API_KEY: ${{ secrets.TS_TOKEN }} # needed if using cost estimation

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Install Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: 3.1
        bundler-cache: true # runs 'bundle install' and caches installed gems automatically

    - name: Install
      run:
        .github/bin/install

    - name: Terraspace Command
      run: |
        terraspace up demo -y
```
{% endraw -%}

## Supporting Script

The install script installs Terraform, Terraspace, and infracost. It looks something like this.

.github/bin/install

    #!/bin/bash

    # install terraform
    brew install tfenv
    tfenv install 1.5.5 # do not use later than 1.5.5
    tfenv use 1.5.5
    terraform --version

    # install terraspace
    bundle install
    bundle exec terraspace new shim
    terraspace --version

    # install infracost https://www.infracost.io/docs/
    curl -fsSL https://raw.githubusercontent.com/infracost/infracost/master/scripts/install.sh | sh

{% include ci/push.md name="GitHub" %}

## Results

After the job starts, you'll see something like the following. You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/push/push-workflow-completed-v2.png)

You can see that a resource was created.

Next, we'll look at the Pull Request Workflow.
