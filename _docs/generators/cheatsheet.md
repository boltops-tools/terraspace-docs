---
title: Generators Cheatsheet
nav_text: Cheatsheet
category: generators
order: 4
---

Here's a cheatsheet for generators. Refer to the cli reference for more docs: [terraspace new]({% link _reference/terraspace-new.md %})

## Commands Summary

    terraspace new project NAME
    terraspace new module NAME
    terraspace new stack NAME

## Projects

AWS project

    terraspace new project aws
    cd aws
    terraspace up demo -y
    terraspace down demo -y

GCP project

    terraspace new project gcp --plugin google
    cd gcp
    terraspace up demo -y
    terraspace down demo -y

Blank project without examples

    terraspace new project aws-blank --no-examples
    terraspace new project gcp-blank --plugin google --no-examples

## Modules

    terraspace new module ec2
    terraspace new module vm

## Stack

    terraspace new stack demo

## Hook

    terraspace new hook demo --type stack

## Helper

    terraspace new helper demo --type stack
