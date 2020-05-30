---
title: New Project
---

We'll use [terraspace new project]({% link _reference/terraspace-new-project.md %}) to generate a new terraspace project.

    $ terraspace new project infra --provider google --examples

For this tutorial, we're using the `--examples` option to generate a starter example.

    $ terraspace new project infra --provider google --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/templates/backend.tf
          create  infra/config/templates/provider.tf
    => Creating new module called example.
          create  infra/app/modules/example
          create  infra/app/modules/example/main.tf
          create  infra/app/modules/example/outputs.tf
          create  infra/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  infra/app/stacks/demo
          create  infra/app/stacks/demo/main.tf
          create  infra/app/stacks/demo/outputs.tf
          create  infra/app/stacks/demo/variables.tf
    $ cd infra # and start checking out the files

## Config Files

Let's look at `infra/config/templates/backend.tf`

```terraform
terraform {
  backend "gcs" {
    bucket = "<%= backend_expand("gcs", "terraform-state-:PROJECT-:REGION-:ENV") %>" # expanded by terraspace IE: terraform-state-project-us-central1-dev
    prefix = "<%= backend_expand("gcs", ":REGION/:ENV/:BUILD_DIR") %>" # expanded by terraspace IE: us-central1/dev/modules/vm
  }
}
```

If you're already familiar with terraform, then you'll probably notice that there's ERB templating.  Terraspace allows you use templating in your tf files. When we deploy the terraspace project, it compiles the config file down to a standard terraform file. The templating is particularly useful in `backend.tf` as it gives dynamic control over bucket, key, and region.

When we later deploy, the `backend.tf` gets compiled down to a standard terraform tf file. Terraspace will then automatically create the google cloud storage bucket for you.

Next, let's take a look at the `infra/config/templates/provider.tf` file.

```terraform
# provider "google" {
#   project = "REPLACE_ME"
#   region  = "us-central1"   # update to your region
#   zone    = "us-central1-a" # update to your zone
# }
```

You can see it's actually commented out. This is because we have already configured `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_PROJECT`, etc. We can generally leave the generated config files as-is.

Next, we'll review generated app folder files.
