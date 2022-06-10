---
title: Terraspace vs Pulumi
nav_text: Pulumi
categories: vs
order: 4
---

Pulumi allows you to use a general purpose languages like Python, TypeScript, JavaScript, Go, .NET, Java, and YAML, to write Infrastructure as Code. Terraspace just Terraform HCL code with some conventions and with a little bit of Ruby sprinkles.  Terraspace utlimately builds a Terraform project and then runs `terraform apply`. Essentialy, Terraspace is Terraform.

Because Pulumi allows you to use a full general purpose language, it can be very helpful for those already familar with the language. It's a double-edge sword though. It can also provide too much rope when abused. He who lives by the sword dies by the sword. Terraform code can be just as unweildly though. Tt's up to weilder of the sword, regardless of choice.

Since Terraspace at the end of the day is mainly Terraform, you're usually going to be working with the HLC Domain Specific language. Some feel this is better because it limits the rope. Whereas some feel the DSL is too limiting and has too many nuances, particularly those who are familar with general purpose languages already. Even the fact that Terraspace allows you to

However, the ability to use Ruby sprinkles with Terraspace is actually only one small aspect of what Terraspace does. Just like being able to use a general purpose language with Pulumi is only one aspect of that tool.

Terraspace provides many more conveniences on top of Terraform.