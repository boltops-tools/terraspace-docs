---
title: Terraspace vs Pulumi
nav_text: Pulumi
categories: vs
order: 4
---

Pulumi allows you to use general purpose languages like Python, TypeScript, JavaScript, Go, .NET, Java, and YAML, to write Infrastructure as Code. Terraspace is just Terraform HCL code with some conventions and defined structure.  Terraspace utlimately builds a Terraform project, changes directory into that folder, and then runs `terraform apply`. Essentially, Terraspace is Terraform.

Because Pulumi allows you to use a full general-purpose language, it can be very helpful for those already familiar with the language. It can be a double-edge sword. It can too much rope and be abused. He who lives by the sword dies by the sword. However, Terraform code can become just as unwieldy though. It's up to the weilder of the sword, regardless of choice.

Since Terraspace at the end of the day is mainly Terraform, you're usually going to be working with the same HCL Domain Specific language. Some feel this is better because it limits the rope. Whereas some feel the DSL is too limiting and has too many nuances, particularly those who are familiar with general-purpose languages already.

Terraspace also adds the ability to use Ruby sprinkles also. However, it's actually only one small aspect of what Terraspace does. Just like being able to use a general purpose language with Pulumi is only one aspect of that tool.

Terraspace provides many more conveniences on top of Terraform.

* A well-defined project structure
* Automatic backend creation like s3 buckets, azure storage acconts, gcs buckets.
* Automatic use of tfvars file
* Secrets support
* Generators
* A testing framework
* Terraspace is a framework that tries to make working with Terraform easier.
