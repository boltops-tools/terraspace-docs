---
title: Manual Web Pipeline
---

The Web Pipeline is a pipeline designed to be run manually so a human can approve the changes.  We'll use it to apply the changes to production. Let's take a look at it.

.gitlab-ci.yml

{% raw -%}
```yaml
image: ruby:latest

stages:
# ...
  - plan prod
  - up prod
# ...

# Runs Manually Only (part 1 of 2)
plan_prod:
  stage: plan prod
  rules:
    - if: '$CI_PIPELINE_SOURCE == "web"'
  script:
    - TS_ENV=prod terraspace plan demo

# Runs Manually Only (part 2 of 2)
up_prod:
  stage: up prod
  rules:
    - if: '$CI_PIPELINE_SOURCE == "web"'
      when: manual # manual approval
  script:
    - TS_ENV=prod terraspace up demo -y
```
{% endraw -%}

* The `if: $CI_PIPELINE_SOURCE == "web"` condition is use to define a "web" pipeline that rusn a `terraspace plan` and then ``terraspace up` stage for `TS_ENV=prod`
* The `when: manual` is use so that the final apply requires a manual trigger.

## Run Pipeline

Since `TS_ENV=dev` has already been run, let's run the pipeline on `TS_ENV=prod`.

1. Go to **CI/CD -> Pipelines** on the left-side menu.
2. Click **Run Pipeline** on the upper right hand corner
3. For Variables you can leave as is and click **Run Pipeline** to start the build.
4. You can click on each Stage to see the Logs and see the plan preview
5. Once it gets to the Up prod stage, the Pipeline status will change to **blocked**
6. You can click on the Stage and then click **Run** or hit the play button to apply.

Here's the Run Pipeline button:

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-start-run.png)

You'll see it running.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-running.png)

You can click on the first stage to see the plan logs.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-plan-log.png)

The pipeline will then go in **blocked** status, waiting for you to trigger the next step manually.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-approval-play.png)

Clicking on the Play button will resume the pipeline into **running** state.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-up-running-2.png)

## Results

After the job finishes, you'll see something like this.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/manual/manual-up-done.png)

The changes have been applied to production.

Next, we'll review what we learned.
