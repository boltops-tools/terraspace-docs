---
title: Push Workflow
---

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
      GH_TOKEN: ${{ secrets.GH_TOKEN }}
      TS_ENV: dev
      TS_TOKEN: ${{ secrets.TS_TOKEN }}

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

The install script installs Terraform and Terraspace and looks something like this.

.github/bin/install

    #!/bin/bash
    brew install tfenv
    tfenv install latest
    tfenv use latest
    bundle install
    bundle exec terraspace new shim

{% include ci/push.md name="GitHub" %}

## Results

After the job starts, you'll see something like the following. You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/push/push-workflow-completed-v2.png)

You can see that a resource was created.

Next, we'll look at the Pull Request Workflow.
