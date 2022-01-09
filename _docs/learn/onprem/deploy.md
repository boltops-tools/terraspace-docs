---
title: Deploy Infrastructure
search_title: Deploy Infrastructure AWS
---

{% include videos/learn/getting-started/onprem.md %}

Let's go ahead and deploy the infrastructure

    $ terraspace up demo

The `terraspace up` command will build the files and then essentially run `terraform apply`.

    $ terraspace up demo
    Building .terraspace-cache/dev/stacks/demo
    Built in .terraspace-cache/dev/stacks/demo
    Current directory: .terraspace-cache/dev/stacks/demo
    => terraform apply -input=false

    Terraform used the selected providers to generate the following execution
    plan. Resource actions are indicated with the following symbols:
      + create

    Terraform will perform the following actions:

      # module.pet.random_pet.this will be created
      + resource "random_pet" "this" {
          + id        = (known after apply)
          + length    = 2
          + separator = "-"
        }

    Plan: 1 to add, 0 to change, 0 to destroy.

    Changes to Outputs:
      + pet_id = (known after apply)

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

You get shown what will be provisioned and prompted with `Enter a value:`

Type `yes` and press enter and you'll see terraform apply finishing.

      Enter a value: yes
    module.pet.random_pet.this: Creating...
    module.pet.random_pet.this: Creation complete after 0s [id=charmed-bee]

    Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

    Outputs:

    pet_id = "charmed-bee"
    $

You can see the `random_pet` got created.

Note, you can also use the `-y` option to bypass the prompt. IE: `terraspace up demo -y`.

Next, we'll make some changes to the infrastructure code.
