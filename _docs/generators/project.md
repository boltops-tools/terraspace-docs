---
title: Project Generator
---

The project generator creates a starter Terraspace project structure.

## Example Project

    $ terraspace new project infra
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/terraform/backend.tf
          create  infra/config/terraform/provider.tf
          create  infra/app/modules
          create  infra/app/stacks
    ================================================================
    Congrats! You have successfully created a terraspace project.
    Check out the created files.

        cd infra

    You can create modules and stacks with their generators:

        terraspace new module demo
        terraspace new stack demo

    When you are ready, you can deploy with:

        terraspace up demo -y   # to deploy

    And destroy with:

        terraspace down demo -y # to destroy

    More info: https://terraspace.cloud/
    $

## Project with Examples

You can also tell the project generator to generate a project with some starter examples.

    $ terraspace new project infra --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/terraform/backend.tf
          create  infra/config/terraform/provider.tf
    => Creating new module called example.
          create  infra/app/modules/example
          create  infra/app/modules/example/main.tf
          create  infra/app/modules/example/outputs.tf
          create  infra/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  infra/app/stacks/demo
          create  infra/app/stacks/demo/main.tf
          create  infra/app/stacks/demo/outputs.tf
          create  infra/app/stacks/demo/variables.tf
    ================================================================
    Congrats! You have successfully created a terraspace project.
    Check out the created files. Adjust to the examples and then deploy with:

        cd infra
        terraspace up demo -y   # to deploy
        terraspace down demo -y # to destroy

    More info: https://terraspace.cloud/
    $