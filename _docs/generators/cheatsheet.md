---
title: Generators Cheatsheet
---

## Commands Summary

    terraspace new project NAME
    terraspace new module NAME
    terraspace new stack NAME

## Projects: HCL Based

HCL based AWS project

    terraspace new project hcl-aws --bucket my-bucket # default provider is aws
    cd hcl-aws
    terraspace up demo -y
    terraspace down demo -y

HCL based GCP project

    terraspace new project hcl-gcp --bucket my-bucket --plugin google
    cd hcl-gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project hcl-aws-blank --bucket my-bucket --no-examples
    terraspace new project hcl-gcp-blank --bucket my-bucket --plugin google --no-examples

## Modules: HCL Based

    cd project
    terraspace new module ec2 # default provider is aws
    terraspace new module vm --plugin google

## Stacks: HCL Based

    cd project
    terraspace new stack demo # default provider is aws
    terraspace new stack demo --plugin google

## Projects: Ruby Based

Ruby based AWS project

    terraspace new project ruby-aws --bucket my-bucket --lang ruby # default provider is aws
    cd ruby-aws
    terraspace up demo -y
    terraspace down demo -y

Ruby based GCP project


    terraspace new project ruby-gcp --bucket my-bucket --lang ruby --plugin google
    cd ruby-gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project ruby-aws-blank --bucket my-bucket --lang ruby --no-examples
    terraspace new project ruby-gcp-blank --bucket my-bucket --lang ruby --plugin google --no-examples

## Modules: Ruby Based

    cd project
    terraspace new module ec2 --lang ruby # default provider is aws
    terraspace new module vm --lang ruby --plugin google

## Stacks: Ruby Based

    cd project
    terraspace new stack demo --lang ruby # default provider is aws
    terraspace new stack demo --lang ruby --plugin google
