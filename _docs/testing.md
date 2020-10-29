---
title: Testing
---

Terraspace supports testing with real-resources. It is recommended to use a separate AWS account, Azure subscription, GCP project, or cloud provider equivalent that is dedicated for testing purposes.

The usual testing process will:

1. Build a test harness. The test harness is a generated terraspace project with the specified modules and stacks.
2. Runs a `terraspace up` (`terraform apply`) to create real resources.
3. Check the resources. In this case, it simply checks for the terraform output.
4. Runs a `terraspace down` (`terraform destroy`) to clean up the real resources.

## Module-Level and Project-Level Tests

Tests for both module-level and project-level tests are supported:

* [Test Harness]({% link _docs/testing/test-harness.md %}): Test Harness Concept
* [Module-Level Testing]({% link _docs/testing/module.md %}): Testing reusable modules.
* [Stack-Level Testing]({% link _docs/testing/stack.md %}): Testing your stack code.
* [Project-Level Testing]({% link _docs/testing/project.md %}): Testing your project code.
