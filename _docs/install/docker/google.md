---
title: "Google Docker Guide"
nav_text: Google
category: docker-guides
---

Here's a guide to using Terraspace, Docker and Google.

## Credentials

To use Cloud provider with Terraspace and Docker container you should mount the credentials.

    docker run --rm -ti -v $HOME/.config/gcloud:/root/.config/gcloud boltops/terraspace

## Editing Files

It is useful to be able to edit files with an text editor in your normal OS. You can do this by mounting a folder from your current host to a volume. Here an example that mounts the current working directory to the `/work` folder within the Docker container.

    docker run --rm -ti -v $HOME/.config/gcloud:/root/.config/gcloud -v `pwd`:/work boltops/terraspace

## Env Variables

Using env files is also handy. Here's an example `dev.env` file.

    GOOGLE_APPLICATION_CREDENTIALS=/home/ec2-user/.gcp/dev.json
    GOOGLE_PROJECT=EXAMPLE-project-id
    GOOGLE_REGION=us-central1

And how to use the env file.

    docker run --rm -ti \
        -v $HOME/.config/gcloud:/root/.config/gcloud \
        -v `pwd`:/work \
        --env-file dev.env \
        boltops/terraspace

## Test Terraspace

Once you've started and are inside a container, you can start trying out terraspace.

    terraspace new project -p google infra --examples
    cd infra
    terraspace up demo -y
    terraspace down demo -y

For a more detailed Learn Guide check out [Google Learn Guide]({% link _docs/learn/gcp.md %}).
