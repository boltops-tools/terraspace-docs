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

{% include intro/modules-vs-stacks.md %}