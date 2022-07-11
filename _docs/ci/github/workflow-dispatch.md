---
title: Workflow Dispatch
---

{% include videos/learn/cloud/github.md %}

The Workflow Dispatch is generalized and flexible.  It can be use to run any general terraspace command with the GitHub Actions. Let's take a look at it.

.github/workflows/workflow_dispatch.yml

{% raw -%}
```yaml
name: Dispatch Terraspace
on:
  workflow_dispatch:
    inputs:
      env:
        description: "TS_ENV"
        type: choice
        options: # Add more environment if needed
          - dev
          - prod
      command:
        description: "Terraspace command to run"
        default: "plan demo"
jobs:
  run:
    runs-on: ubuntu-latest

    env:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      AWS_REGION: us-west-2
      GH_TOKEN: ${{ github.token }}
      TS_ENV: ${{ github.event.inputs.env }}
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
        terraspace ${{ github.event.inputs.command }} -y
```
{% endraw -%}

## Workflow Inputs

A key element of the Workflow Dispatch is that there are inputs. It you to define the inputs to use for job. Here the inputs

* **TS_ENV**: The terraspace env. IE: dev, prod
* **command**: The terraspace command to run. IE: `up demo`, `plan demo`, `destroy demo`, `all up`, etc

## Review Workflow Steps

Now let's review the steps. The first steps deal with installing terraform and terraspace. The final step runs the terraform command you wish.

The `on.workflow_dispatch.inputs.command` key defined at the top maps to the `github.event.inputs.command` in the final step command. This allows you to run any terraspace command you need to.  The starter `workflow_dispatch.yml` is quite flexible.

## Run Workflow

Let's run the workflow dispatch.

1. Go to your repo on GitHub. github.com/ORG/REPO
2. Go to the **Actions** tab
3. Click on the **Terraspace** on the left hand side
4. Click on the right hand side, there's a **Run workflow** dropdown button
5. Leave the values as `TS_ENV=prod` and `command="plan demo"` or change them if you wish
6. Click on **Run workflow**

## Run Workflow

Here's what the Run Workflow button looks like

![](https://img.boltops.com/images/terraspace/cloud/ci/github/workflow_dispatch/run-workflow-button.png)

Since `TS_ENV=dev` has already been run, we can use this workflow to run `TS_ENV=prod`.  Select it and start the job.

## Results

After the job starts, you'll see something like this.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/workflow_dispatch/run-workflow-started.png)

You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/workflow_dispatch/run-workflow-completed.png)

If the plan looks good, you can now run the job again with the `up demo` command instead.

The workflow dispatch job is very flexible. It allows you to run pretty much any terraspace command you need. Examples:

    terraspace plan demo
    terraspace up demo
    terraspace down demo
    terraspace all plan
    terraspace all up
    terraspace all down

Next, we'll review what we learned.
