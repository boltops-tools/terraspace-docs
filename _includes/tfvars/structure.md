Tfvar should be place within the `app/stacks/MOD` folder. Example:

    app/stacks/core
    ├── main.tf
    ├── tfvars
    │   ├── base.tfvars
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── variables.tf

You don't have to specify the `-var-file` option, the tfvars files are automatically processed.
