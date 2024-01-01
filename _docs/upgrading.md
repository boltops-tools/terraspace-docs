---
title: Upgrading Guide
nav_text: Upgrading
category: top-level
subcategory: upgrading
order: 16
---

This covers upgrading Terraspace. Notes about compatible dependent libraries may be listed here. For most versions updates, no upgrade steps are necessary. Please also refer to the [CHANGELOG](https://github.com/boltops-tools/terraspace/blob/master/CHANGELOG.md).

Also see the [Updating Docs]({% link _docs/install/updating.md %})

## Summary

The following table summarizes the releases. Only some highlighted releases are in the list.

Version | Notes
--- | ---
2.2.15 | The recommend tfvars location is now within the config folder. See below.
2.1.0 | The generated backend.tf has a new key pattern. See below.
2.0.1 | The generated backend.tf has a new key pattern. See below.
2.0.0 | The generated backend.tf has a new key pattern. See below.
0.3.0 | Some config options where renamed. See below.
0.2.0 | Just make sure youre using the a compatible version the provider plugins. Upgrading terraspace should have already done this, but just in case this is noted.

## Upgrade Details

The following section provides a little more detail on each version upgrade. Note, we'll not provide more details for all versions.

### 2.2.15

The recommended tfvars location is now under `config/stacks` instead of `app/stacks`. Details: [Upgrading: Move Tfvars]({% link _docs/upgrading/move-tfvars.md %})

This probably should had been a minor instead of patch version bump for clarity. The change is backwards compatiable though so minor is still ok.

### 2.1.0

* The generated backend.tf for the different cloud provider plugins have a new pattern. The update is in the **plugins** themselves since they provide the template to the core terraspace framework.
* Here are the GitHub Compares and some examples of the backend "key" changes around when 2.1 was released:
  * AWS: [v0.4.2...v0.5.0](https://github.com/boltops-tools/terraspace_plugin_aws/compare/v0.4.2...v0.5.0). Updated to: `:PROJECT/:REGION/:APP/:ROLE/:ENV/:EXTRA/:BUILD_DIR/terraform.tfstate`
  * Azurerm: [v0.6.2...v0.7.0](https://github.com/boltops-tools/terraspace_plugin_azurerm/compare/v0.6.2...v0.7.0) Updated to: `:PROJECT/:LOCATION/:APP/:ROLE/:ENV/:EXTRA/:BUILD_DIR/terraform.tfstate`
  * Google: [v0.4.2...v0.5.0](https://github.com/boltops-tools/terraspace_plugin_google/compare/v0.4.2...v0.5.0) Updated to: `:PROJECT/:REGION/:APP/:ROLE/:ENV/:EXTRA/:BUILD_DIR`
* More confident that this will be the default pattern for a while.
* Note, again this will not affect terraspace projects that were generated from older versions of Terraspace. By design, you have to manually update the `config/terraform/backend.tf` since it will change your state file location.

### 2.0.1

* Here are the GitHub Compares and some examples of the backend "key" changes around when 2.0.1 was released and project was added:
* The generated backend.tf for the different cloud provider plugins have a new pattern. It also includes `:PROJECT`. This accounts for different statefiles for different terraspace projects.
* AWS: [v0.4.0...v0.4.1](https://github.com/boltops-tools/terraspace_plugin_aws/compare/v0.4.0...v0.4.1).
* Azurerm: [v0.6.0...v0.6.1](https://github.com/boltops-tools/terraspace_plugin_azurerm/compare/v0.6.0...v0.6.1)
* Google: [v0.4.0...v0.4.1](https://github.com/boltops-tools/terraspace_plugin_google/compare/v0.4.0...v0.4.1)
* This should have originally been in terraspace 2.0. Went with patch release since Terraspace 2.0 has only been out for a few days.

### 2.0.0

* The generated backend.tf for the different cloud provider plugins have a new pattern. The update is in the **plugins** themselves since they provide the template to the core terraspace framework.
* This will not affect terraspace projects that were generated from older versions of Terraspace, IE: v1 and below. By design, you have to manually update the `config/terraform/backend.tf` since it will change your state file location.
* Here are the GitHub Compares and some examples of the backend "key" changes right when 2.0 was released:
  * AWS: [v0.3.8...v0.4.0](https://github.com/boltops-tools/terraspace_plugin_aws/compare/v0.3.8...v0.4.0). `:REGION/:ENV/:BUILD_DIR/terraform.tfstate` => `:PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate`
  * Azurerm: [v0.5.1...v0.6.0](https://github.com/boltops-tools/terraspace_plugin_azurerm/compare/v0.5.1...v0.6.0) `:LOCATION/:ENV/:BUILD_DIR/terraform.tfstate` => `:PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:LOCATION/terraform.tfstate`. There were also changes to the resource_group_name and storage_account_name. Look at compare to see the exact difference.
  * Google: [v0.3.5...v0.4.0](https://github.com/boltops-tools/terraspace_plugin_google/compare/v0.3.5...v0.4.0) `:REGION/:ENV/:BUILD_DIR` => `:PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION`
* If you want to upgrade to take advantage of features like [app, role]({% link _docs/layering/app-layering.md %}), and [extra layering]({% link _docs/layering/extra.md %}), then you should update the keys and **move** your statefiles in your respective backend.
* The default layering is simplified. It includes env and regions. It does not include namespace and provider layers. If you need to use how all the layers that was in Terraspace v1, you can enable it with `config.layering.mode = "provider"` More info: https://terraspace.cloud/docs/layering/full-layering/#layering-modes-simple-namespace-provider

### 0.3.0

* TFC vars related options like `cloud.overwrite` have been move to `cloud.vars`. IE:  `config.overwrite` => `config.tfc.overwrite`
* TFC option. The `cloud.relative_root` has been renamed to `cloud.working_dir_prefix`.
* See [Config Reference Docs]({% link _docs/config/reference.md %}) for up-to-date list.

### 0.2.0

* backend_expand helper method is deprecated. You should replace it with the expansion method.  expansion requires only one argument. IE: `expansion(string)` vs `backend_expand(backend_type, string)`.
* Terraform Cloud and Terraform Enterprise support added.
* Layer Interface module added. All latest provider plugins like terraspace\_plugin_aws make use of this module.
* Terraspace 0.2.x is compatible with terraspace\_plugin_aws 0.2.x, terraspace\_plugin_google 0.2.x, and terraspace\_plugin_azurerm 0.2.x

### 0.1.2

* Terraspace 0.1.x is compatible with terraspace\_plugin_aws 0.1.x, terraspace\_plugin_google 0.1.x, and terraspace\_plugin_azurerm 0.1.x
