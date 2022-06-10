## Separate Layers

You can have your layer files defined in the stack itself or at the project level. Example:

* **Blueprint Layers**: These layers ship with the stack. Think of them as defaults that ship with the stack itself. IE: `app/stacks/demo/config`. These layers are processed first and take lower precedence.
* **Project Layers**: These layers are your project-specific settings. IE: `config/stacks/demo`. These layers are processed later and take higher precedence. They override previous layer values.

It is recommended to define layers at the project-level, `config/stacks`. This allow stacks to be even more reusable.
