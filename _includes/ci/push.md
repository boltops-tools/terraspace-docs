## Environment Variables

We should set these environment variables. Note that the AWS variables are required only if you're using terraspace_plugin_aws.

* **AWS Variables**: The workflow is environment configured with `AWS_*` variables, so the CI machine has permissions to create resources on AWS. The AWS token need these [minimal permissions]({% link _docs/plugins/aws/minimal-iam.md %}).
{% if include.name == "GitLab" %}
* **GITLAB_TOKEN**: Terraspace uses this to grab additional information like commit messages and Merge Request comments with the terraspace cloud link. The token should have "api" permission so it can post the Merge Request comment.
{% elsif include.name == "GitHub" %}
* **GH_TOKEN**: This token is grabbed from the GitHub Actions env itself via `github.token`. This allows Terraspace post PR comments with a summary of the changes and cost estimates. The GitHub Actions token should have necessary permissions. If you choose to use create and use your own token, it should have "repo" permissions so it can create the PR comment.
{% elsif include.name == "CircleCI" %}
* **GH_TOKEN**: This allows Terraspace to post PR comments with a summary of the changes and cost estimates. The GitHub Actions token should have necessary permissions. The token should have "repo" permissions so it can create the PR comment.
{% endif %}
* **TS_TOKEN**: This allows Terraspace work with Terraspace Cloud. IE: Save plans, applies, cost etimates, live streams, etc.
* **INFRACOST_API_KEY**: You will need an infracost API key if you are using [Cost Estimation]({% link _docs/cloud/cost-estimation.md %}).

{% if include.name == "GitLab" %}
With GitLab, you set the environment variables in the Settings -> CI/CD -> Variables section.
{% elsif include.name == "GitHub" %}
With GitHub, you have to configure these secrets before running the workflow.
{% endif %}

{% if include.name == "GitLab" %}
**Steps:**

1. Go to the Repo **Settings**. It's the tab on the left-hand side. You must own the repo or have admin permissions to see it.
2. On the left-hand menu, go to **CI/CD**.
3. Under the **Variables** section on the page, click **Expand**
4. Create the variable, IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `GITLAB_TOKEN`, and `TS_TOKEN`. You should uncheck **Protect variable** if your branch is not protected.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/push/gitlab-variables.png)
{% elsif include.name == "GitHub" %}
1. Go to the Repo **Settings**. It's the tab on the right-hand side. You must own the repo or have admin permissions to see it.
2. On the left-hand menu, go to **Secrets / Actions**.
3. Click on the **New repository secret**
4. Create the secrets, IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `GH_TOKEN`, and `TS_TOKEN`, etc.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/push/github-secrets.png)
{% elsif include.name == "Bitbucket" %}
1. Go to **Repository Settings** on the left-hand side.
2. Go to **Repository variables** under the Pipelines section on the left-hand side. Note, you might have to enable Pipelines first.
3. Add the variables, , IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `TS_TOKEN`, etc.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/push/repository-variables.png)
{% elsif include.name == "CircleCI" %}
1. Go to **Project Settings**.
2. Go to **Environment Variables**
3. Add the variables, , IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `TS_TOKEN`, `GH_TOKEN`, etc.

![](https://img.boltops.com/images/terraspace/cloud/ci/circleci/push/environment-variables.png)
{% endif %}

## Terraspace Command

At the very end, the `terraspace up demo -y` command will run to deploy the demo stack. You can customize this command or add additional commands. IE: You probably want to use `terraspace all up` if you prefer.

## Commit and Push

Let's commit and push the files to start the workflow.

    git add .
    git commit -m 'add ci'
    git push -u origin main

This starts the build process immediately.
