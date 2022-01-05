---
title: Destroy Infrastructure
search_title: Destroy Infrastructure AWS
---

{% include videos/learn/terraspace-getting-started-with-onprem.md %}

Now that we've seen how to deploy infra, let's clean up and tear down the resources.

To destroy the resources, run:

    terraspace down demo

You'll be prompted to make sure you really want to delete these resources.

    $ terraspace down demo
    Building .terraspace-cache/dev/stacks/demo
    Built in .terraspace-cache/dev/stacks/demo
    Current directory: .terraspace-cache/dev/stacks/demo
    => terraform destroy
    module.pet.random_pet.this: Refreshing state... [id=indirectly-game-grub]

    Terraform used the selected providers to generate the following execution
    plan. Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:
      # module.pet.random_pet.this will be destroyed
      - resource "random_pet" "this" {
          - id        = "indirectly-game-grub" -> null
          - length    = 3 -> null
          - separator = "-" -> null
        }
    Plan: 0 to add, 0 to change, 1 to destroy.


    Changes to Outputs:
      - pet_id = "indirectly-game-grub" -> null

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes
    module.pet.random_pet.this: Destroying... [id=indirectly-game-grub]
    module.pet.random_pet.this: Destruction complete after 0s

    Destroy complete! Resources: 1 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
