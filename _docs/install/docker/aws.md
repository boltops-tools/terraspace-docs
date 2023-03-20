---
title: "AWS Docker Guide"
nav_text: AWS
category: docker-guides
---

Here's a guide to using Terraspace, Docker and AWS.

## Credentials

To use Cloud provider with Terraspace and Docker container you should mount the credentials.

    docker run --rm -ti -v $HOME/.aws:/root/.aws ghcr.io/boltops-tools/terraspace

## Editing Files

It is useful to be able to edit files with an text editor in your normal OS. You can do this by mounting a folder from your current host to a volume. Here an example that mounts the current working directory to the `/work` folder within the Docker container.

    docker run --rm -ti -v $HOME/.aws:/root/.aws -v `pwd`:/work ghcr.io/boltops-tools/terraspace

## Env Variables

Using env files is also handy. Here's an example `dev.env` file.

    AWS_PROFILE=tung
    ANOTHER_ENV_VAR=value

And how to use the env file.

    docker run --rm -ti -v $HOME/.aws:/root/.aws -v `pwd`:/work --env-file dev.env ghcr.io/boltops-tools/terraspace

## Test Terraspace

Once you've started and are inside a container, you can start trying out terraspace.

    terraspace new project infra --examples
    cd infra
    terraspace up demo -y
    terraspace down demo -y

For a more detailed Learn Guide check out [AWS Learn Guide]({% link _docs/learn/aws.md %}).
