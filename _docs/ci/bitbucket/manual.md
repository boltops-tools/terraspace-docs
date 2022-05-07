---
title: Manual Custom Pipeline
---

The Custom Pipeline is a pipeline designed to be run manually so a human can approve the changes.  We'll use it to apply the changes to production. Let's take a look at it.

bitbucket-pipelines.yml

{% raw -%}
```yaml
image: ruby:latest

pipelines:
# ...
  custom:
    terraspace:
      - variables:
          - name: TS_ENV
            default: prod
            allowed-values:
              - dev
              - prod
      - step:
          name: plan
          script:
            - .bitbucket/bin/install
            - .bitbucket/bin/terraspace plan demo
      - step:
          name: up
          trigger: manual
          script:
            - .bitbucket/bin/install
            - .bitbucket/bin/terraspace up demo -y
```
{% endraw -%}

## Run Pipeline

Let's run the pipeline on `TS_ENV=prod`.

1. Go to **Pipelines** on the left-side menu.
2. Click **Run Pipeline** on the upper right hand corner
3. Select the branch **main**  and select the pipeline **custom: terraspace**
4. Click **Run** to manually run the pipeline. The pipeline should start shortly.
5. Once it gets to the up stage, the Pipeline status will wait for to confirm to run the next step.
6. You can click on the Stage and then click **Run**

Here's the Run Pipeline button:

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/manual/manual-run-pipeline-button.png)

Clicking on it will pop up a form.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/manual/manual-run-pipeline-form.png)

Select the branch **main**  and select the pipeline **custom: terraspace** and click **Run**

Once the run is completed, it'll wait for you.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/manual/manual-run-pipeline-waiting.png)

The waiting state is also indicated on the Pipelines List page with a circle icon vs a checkmark.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/manual/manual-run-pipeline-waiting-circle.png)

## Results

Click **run** to approve the changes, and the pipeline runs the `terraspace up` step.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/manual/manual-run-pipeline-completed.png)

The changes have been applied to production.

Next, we'll review what we learned.
