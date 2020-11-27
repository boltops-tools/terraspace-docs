---
title: "Azure Docker Guide"
nav_text: Azure
category: docker-guides
---

Here's a guide to using Terraspace, Docker and Azure.

## Credentials

To use Cloud provider with Terraspace and Docker container you should mount the credentials.

    docker run --rm -ti -v $HOME/.azure:/root/.azure boltops/terraspace

## Editing Files

It is useful to be able to edit files with an text editor in your normal OS. You can do this by mounting a folder from your current host to a volume. Here an example that mounts the current working directory to the `/work` folder within the Docker container.

    docker run --rm -ti -v $HOME/.azure:/root/.azure -v `pwd`:/work boltops/terraspace

## Env Variables

Using env files is also handy. Here's an example `dev.env` file.

    ARM_SUBSCRIPTION_ID=EXAMPLE-c44e-4677-bf0e-6c380EXAMPLE
    ARM_CLIENT_SECRET=EXAMPLEDcyCg~_XEFa_y-blKEXAMPLE
    ARM_TENANT_ID=EXAMPLE-8ad0-4651-8b4c-bfdEXAMPLE
    ARM_CLIENT_ID=EXAMPLEb0-bb76-432a-b5e4-73a5EXAMPLE

And how to use the env file.

    docker run --rm -ti -v $HOME/.azure:/root/.azure -v `pwd`:/work --env-file dev.env boltops/terraspace

## Test Terraspace

Once you've started and are inside a container, you can start trying out terraspace.

    terraspace new project -p azurerm infra --examples
    cd infra
    terraspace up demo -y
    terraspace down demo -y

For a more detailed Learn Guide check out [Azure Learn Guide]({% link _docs/learn/azure.md %}).
