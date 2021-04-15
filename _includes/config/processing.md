Files that end with `.tf` and `.rb` get processed with different strategies as part of being built.

Extension | Strategy
--- | ---
.tf | Will be processed with ERB. This allows add a little extra power to the Terraform HCL language with templating logic.
.rb | Will be processed by the Terraspace Ruby DSL. This allows you to write Terraform code with Ruby.
