## Process Context

The context in which the hook runs is worth highlighting. When the `execute` option is a String, Terraspace runs the script in a **new** child process. This the script is an independent process, and whatever is done to its environment is segregated.

When the `execute` option a Ruby object, then Terraspace runs the hook within the **same** process. It means the hook can affect the **same** environment. IE: Setting environment variables.
