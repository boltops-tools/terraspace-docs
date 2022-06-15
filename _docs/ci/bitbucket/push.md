---
title: Push Workflow
---

{% include videos/learn/cloud/bitbucket.md %}

We'll review the **push** part of the pipeline. Here's the relevant part of `bitbucket-pipelines.yml` that handles it.

bitbucket-pipelines.yml

{% raw -%}
```yaml
image: ruby:latest

pipelines:
  branches:
    main:
      - step:
          name: Main Pipeline
          script:
          - .bitbucket/bin/install
          - .bitbucket/bin/terraspace plan demo
# ...
```
{% endraw -%}

The pipeline uses the `ruby:latest` Docker image.

## Supporting Scripts

A good bit of the logic is in the `.bitbucket/bin` supporting files. The install file installs terraform and terraspace. It looks something like this:

.bitbucket/bin/install

    #!/bin/bash
    # install terraform
    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    export PATH="$HOME/.tfenv/bin:$PATH"
    tfenv install latest
    tfenv use latest
    terraform --version
    # install terraspace
    bundle
    bundle exec terraspace new shim
    export PATH="/usr/local/bin:$PATH"

The `bin/terraspace` script is a wrapper that mainly sets up the PATH.

.bitbucket/bin/terraspace

    #!/bin/bash
    export PATH="$HOME/.tfenv/bin:$PATH"
    type terraform
    export PATH="/usr/local/bin:$PATH"
    exec terraspace "$@"

These supporting scripts are used in other pipelines and keep the code DRYer.

{% include ci/push.md name="Bitbucket" %}

## Results

After the job starts, you'll see something like the following. You may have to refresh to see the job running.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/push/push-up-started.png)

You can see that a resource was created.

![](https://img.boltops.com/images/terraspace/cloud/ci/bitbucket/push/push-up-completed.png)

Next, we'll look at the Pull Request Pipeline.
