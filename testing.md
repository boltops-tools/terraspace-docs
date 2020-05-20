## Terraspace Supports Testing

The usual testing process will:

1. Build a test harness. The test harness is a generated terraspace project with the specified modules and stacks.
2. Runs a `terraspace up` (`terraform apply`) to create real resources.
3. Check the resources. In this case, it simply checks for the terraform output.
4. Runs a `terraspace down` (`terraform destroy`) to clean up the real resources.

## Module-Level and Project-Level Tests

Tests for both module-level and project-level tests are supported:

* [Module-Level Testing](testing/module-testing.md)
* [Project-Level Testing](testing/project-testing.md)
