Tfvar files should be place within the `config/stacks/MOD/tfvars` folder. Example:

    config/stacks/demo
    └── tfvars
        ├── base.tfvars
        ├── dev.tfvars
        └── prod.tfvars

You don't have to specify the `-var-file` option, the tfvars files are automatically processed and used via layering.
