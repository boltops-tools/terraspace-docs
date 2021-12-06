---
title: Custom Helpers
nav_text: Custom
order: 4
category: helpers
---

You can add your own custom helper methods to Terraspace. This is powerful because you can extend and change Terraspace itself.

There are 3 types of helpers:

1. [Project-Level Helpers]({% link _docs/helpers/custom/project.md %}): Globally available to all modules in the Terraspace project.
2. [Stack-Level Helpers]({% link _docs/helpers/custom/stack.md %}): Only locally available to the specific stack they are defined in.
3. [Module-Level Helpers]({% link _docs/helpers/custom/module.md %}): Only locally available to the specific module they are defined in.

There are several types of helpers you can define, so you may be unsure which type to use. When in doubt, use stack-level helpers. It nice to keep the helpers scope to the specific stack that needs them.

## Example

For a helper example use-case, check out the [Patterns Different Versions Docs]({% link _docs/patterns/different-versions.md %}).
