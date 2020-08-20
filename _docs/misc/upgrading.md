---
title: Upgrading Guide
---

This covers upgrading Terraspace. Notes about compatible dependent libraries may be listed here. For most versions updates, no upgrade steps are necessary. Please also refer to the [CHANGELOG](https://github.com/boltops-tools/terraspace/blob/master/CHANGELOG.md).

## Summary

The following table summarizes the releases. Only some highlighted releases are in the list.

Version | Notes
--- | ---
0.2.0 | Just make sure youre using the a compatible version the provider plugins. Upgrading terraspace should have already done this, but just in case this is noted.

## Upgrade Details

The following section provides a little more detail on each version upgrade. Note, we'll not provide more details for all versions.

### 0.2.0

* backend_expand helper method is deprecated. You should replace it with the expansion method.  expansion requires only one argument. IE: `expansion(string)` vs `backend_expand(backend_type, string)`.
* Terraform Cloud and Terraform Enterprise support added.
* Layer Interface module added. All latest provider plugins like terraspace\_plugin_aws make use of this module.
* Terraspace 0.2.x is compatible with terraspace\_plugin_aws 0.2.x, terraspace\_plugin_google 0.2.x, and terraspace\_plugin_azurerm 0.2.x

### 0.1.2

* Terraspace 0.1.x is compatible with terraspace\_plugin_aws 0.1.x, terraspace\_plugin_google 0.1.x, and terraspace\_plugin_azurerm 0.1.x
