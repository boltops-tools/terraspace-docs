---
title: Project Structure
---

Within the app folder there are modules and stacks folders.

    .
    ├── app
    │   ├── modules
    │   │   ├── instance
    │   │   ├── rds
    │   │   ├── security_group
    │   │   ├── wordpress
    │   │   └── vpc
    │   └── stacks
    │       ├── core
    │       └── wordpress
    └── config
        ├── backend.tf
        └── provider.tf

## Modules vs Stacks

Both modules and stacks are terraform modules. The difference is how you use them.

* Stacks are meant to be used to group together modules. Generally, this is where business-specific logic goes.
* Modules modules are smaller pieces of reusable code. Generally, it contains reusable and non-business-specific logic.

For example, the "core" stack could be designed to create using the "vpc" module. Also, the "wordpress" stack cloud use modules like the "instance" and "rds" modules.
