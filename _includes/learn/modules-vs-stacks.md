## App Modules vs Stacks

In Terraspace, both `app/modules` and `app/stacks` folders contain Terraform modules. The difference is how they are meant to be used. Terraspace provides this structure as a guideline:

* Stacks are meant to be used to group together modules. Generally, this is where business-specific logic goes.
* Modules modules are smaller pieces of reusable code. Generally, it contains reusable and non-business-specific logic.
