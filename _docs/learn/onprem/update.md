---
title: Update Infrastructure
search_title: Update Infrastructure Non-Cloud
---

{% include videos/learn/getting-started/onprem.md %}

Let's update the infrastructure.

    $ terraspace up demo

Terraspace will show you a preview of the changes and prompt you to update the infrastructure.

    $ terraspace up demo
    Building .terraspace-cache/dev/stacks/demo
    Built in .terraspace-cache/dev/stacks/demo
    Current directory: .terraspace-cache/dev/stacks/demo
    => terraform apply -input=false
    module.pet.random_pet.this: Refreshing state... [id=charmed-bee]

    Terraform used the selected providers to generate the following execution
    plan. Resource actions are indicated with the following symbols:
    -/+ destroy and then create replacement

    Terraform will perform the following actions:
      # module.pet.random_pet.this must be replaced
    -/+ resource "random_pet" "this" {
          ~ id        = "charmed-bee" -> (known after apply)
          ~ length    = 2 -> 3 # forces replacement
            # (1 unchanged attribute hidden)
        }
    Plan: 1 to add, 0 to change, 1 to destroy.

    Changes to Outputs:
      ~ pet_id = "charmed-bee" -> (known after apply)

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

Once again, we shown what will change and prompted to `Enter a value:`. Type `yes` and press enter.

      Enter a value: yes
    module.pet.random_pet.this: Destroying... [id=charmed-bee]
    module.pet.random_pet.this: Destruction complete after 0s
    module.pet.random_pet.this: Creating...
    module.pet.random_pet.this: Creation complete after 0s [id=indirectly-game-grub]

    Apply complete! Resources: 1 added, 0 changed, 1 destroyed.

    Outputs:

    pet_id = "indirectly-game-grub"
    $

The modification has been applied.

Next, we'll destroy the infrastructure.