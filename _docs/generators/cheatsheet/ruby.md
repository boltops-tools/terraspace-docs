---
title: Generators Cheatsheet Ruby
nav_text: Ruby
category: archive-generators-cheatsheet
---

You can use

## Projects: Ruby Based

Ruby based AWS project

    terraspace new project aws --bucket my-bucket --lang ruby # default provider is aws
    cd aws
    terraspace up demo -y
    terraspace down demo -y

Ruby based GCP project


    terraspace new project gcp --bucket my-bucket --lang ruby --plugin google
    cd gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project aws-blank --bucket my-bucket --lang ruby --no-examples
    terraspace new project gcp-blank --bucket my-bucket --lang ruby --plugin google --no-examples

## Modules: Ruby Based

    cd project
    terraspace new module ec2 --lang ruby # default provider is aws
    terraspace new module vm --lang ruby --plugin google

## Stacks: Ruby Based

    cd project
    terraspace new stack demo --lang ruby # default provider is aws
    terraspace new stack demo --lang ruby --plugin google
