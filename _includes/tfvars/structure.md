Tfvar files should be place within the `app/stacks/MOD/tfvars` folder. Example:

    app/stacks/demo
    ├── main.tf
    ├── tfvars
    │   ├── base.tfvars
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── variables.tf

You don't have to specify the `-var-file` option, the tfvars files are automatically processed and used via layering.
