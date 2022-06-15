## Environment Variables

We should set these environment variables. Note that the AWS variables are required only if you're using terraspace_plugin_aws.

* **AWS Variables**: The workflow is environment configured with `AWS_*` variables, so the CI machine has permissions to create resources on AWS. The AWS token need these [minimal permissions]({% link _docs/plugins/aws/minimal-iam.md %}).
{% if include.name == "GitLab" %}
* **GITLAB_TOKEN**: Terraspace uses this to grab additional information like commit messages and Merge Request comments with the terraspace cloud link. The token should have permissions: read_repository and api so it can create the MR comment.
{% elsif include.name == "GitHub" %}
* **GH_TOKEN**: Terraspace uses this to grab additional information like commit messages and PR comments with the terraspace cloud link. The token should have permissions: repo so it can create the PR comment.
{% elsif include.name == "GitHub" %}
{% endif %}
* **TS_TOKEN**: This allows Terraspace to communicate to Terraspace Cloud and record plans, updates, etc.

{% if include.name == "GitLab" %}
With GitLab, you set the environment variables in the Settings -> CI/CD -> Variables section.
{% elsif include.name == "GitHub" %}
With GitHub, you have to configure these secrets before running the workflow.
{% endif %}

**Steps:**

{% if include.name == "GitLab" %}
1. Go to the Repo **Settings**. It's the tab on the left-hand side. You must own the repo or have admin permissions to see it.
2. On the left-hand menu, go to **CI/CD**.
3. Under the **Variables** section on the page, click **Expand**
4. Create the variable, IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `GITLAB_TOKEN`, and `TS_TOKEN`. You might want to uncheck **Protect variable** if your branch is not protected.

![](https://img.boltops.com/images/terraspace/cloud/ci/gitlab/push/gitlab-variables.png)
{% elsif include.name == "GitHub" %}
1. Go to the Repo **Settings**. It's the tab on the right-hand side. You must own the repo or have admin permissions to see it.
2. On the left-hand menu, go to **Secrets / Actions**.
3. Click on the **New repository secret**
4. Create the secrets, IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `GH_TOKEN`, and `TS_TOKEN`.

![](https://img.boltops.com/images/terraspace/cloud/ci/github/push/github-secrets.png)
{% elsif include.name == "Bitbucket" %}
1. Go to **Repository Settings** on the left-hand side.
2. Go to **Repository variables** under the Pipelines section on the left-hand side. Note, you might have to enable Pipelines first.
3. Add the variables, , IE: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `TS_TOKEN`.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/push/repository-variables.png)
{% endif %}

## Terraspace Command

At the very end, the `terraspace up demo -y` command will run to deploy the demo stack. You can customize this command or add additional commands. IE: You might want to use `terraspace all up` if you prefer.

## Commit and Push

Let's commit and push the files to start the workflow.

    git add .
    git commit -m 'add ci'
    git push -u origin main

This starts the build process immediately.
