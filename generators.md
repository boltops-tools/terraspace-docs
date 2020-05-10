# Generators

Terraspace providers generators with the `new` command.  Here's an example of the starter structure it creates for you:

    $ terraspace new project hcl-aws --bucket my-bucket # default provider is aws
    => Creating new project called hcl-aws.
          create  hcl-aws
          create  hcl-aws/config/backend.tf
          create  hcl-aws/config/provider.tf
    => Creating new module called example.
          create  hcl-aws/app/modules/example
          create  hcl-aws/app/modules/example/main.tf
          create  hcl-aws/app/modules/example/outputs.tf
          create  hcl-aws/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  hcl-aws/app/stacks/demo
          create  hcl-aws/app/stacks/demo/main.tf
          create  hcl-aws/app/stacks/demo/outputs.tf
          create  hcl-aws/app/stacks/demo/variables.tf
    ================================================================
    Congrats! You have successfully created a terraspace project.
    Check out the created files. Adjust to your needs and then deploy with:

        cd hcl-aws
        terraspace up demo -y
        terraspace down demo -y # to destroy

    More info: https://terraspace.cloud/
    $

## Commands Summary

    terraspace new project NAME
    terraspace new module NAME
    terraspace new stack NAME

## Cheatsheet

## Projects: HCL/ERB Based

HCL based AWS project

    terraspace new project hcl-aws --bucket my-bucket # default provider is aws
    cd hcl-aws
    terraspace up demo -y
    terraspace down demo -y

HCL based GCP project

    terraspace new project hcl-gcp --bucket my-bucket --provider gcp
    cd hcl-gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project hcl-aws-blank --bucket my-bucket --no-examples
    terraspace new project hcl-gcp-blank --bucket my-bucket --provider gcp --no-examples

## Modules: HCL/ERB Based

    cd project
    terraspace new module ec2 # default provider is aws
    terraspace new module vm --provider gcp

## Stacks: HCL/ERB Based

    cd project
    terraspace new stack core # default provider is aws
    terraspace new stack core --provider gcp

## Projects: Ruby Based

Ruby based AWS project

    terraspace new project ruby-aws --bucket my-bucket --lang ruby # default provider is aws
    cd ruby-aws
    terraspace up demo -y
    terraspace down demo -y

Ruby based GCP project


    terraspace new project ruby-gcp --bucket my-bucket --lang ruby --provider gcp
    cd ruby-gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project ruby-aws-blank --bucket my-bucket --lang ruby --no-examples
    terraspace new project ruby-gcp-blank --bucket my-bucket --lang ruby --provider gcp --no-examples

## Modules: Ruby Based

    cd project
    terraspace new module ec2 --lang ruby # default provider is aws
    terraspace new module vm --lang ruby --provider gcp

## Stacks: Ruby Based

    cd project
    terraspace new stack core --lang ruby # default provider is aws
    terraspace new stack core --lang ruby --provider gcp
