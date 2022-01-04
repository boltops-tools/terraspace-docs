---
title: Azure Key Vault Secrets
nav_text: Secrets
categories: helpers-azure
---

The `azure_secret` helper fetches secrets from Azure Key Vault Service.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= azure_secret("demo-:ENV-user") %>"
    pass = "<%= azure_secret("demo-:ENV-pass") %>"

For example if you have these secret values:

    $ VAULT=REPLACE_WITH_YOUR_VAULT_NAME
    $ az keyvault secret show --name "demo-dev-user" --vault-name $VAULT | jq '.value'
    bob
    $ az keyvault secret show --name "demo-dev-pass" --vault-name $VAULT | jq '.value'
    test

.terraspace-cache/us-west-2/dev/stacks/demo/1-dev.auto.tfvars

    user = "bob"
    pass = "test"

## Setup

To set up the Azure Key Vault to use:

config/plugins/azurerm.rb

```ruby
TerraspacePluginAzurerm.configure do |config|
  config.secrets.vault = "REPLACE_WITH_YOUR_VAULT_NAME"
end
```

## Key Vault Access Policy

When you create the Azure Key Vault, only the user used to create the vault has permission to access secrets from it. The Azure AD application also needs Azure Key Vault permissions to retrieve the secret. Else you'll get an error like this:

> The user, group or application 'appid=EXAMPLE-bb76-432a-b5e4-73a53e0a27f7;oid=1a99ba5c-1b7c-4970-85e9-EXAMPLE;iss=https://sts.windows.net/EXAMPLE-8ad0-4651-8b4c-EXAMPLE/' does not have secrets get permission on key vault 'vault-name-EXAMPLE;location=eastus'. For help resolving this issue, please see https://go.microsoft.com/fwlink/?linkid=2125287"

Note: You may have set up the `ARM_*` env vars in the [Learn Azure Configure]({% link _docs/learn/azure/configure.md %}) Guide docs.

Refer to the Docs to set up: [Assign a Key Vault access policy using the Azure portal](https://go.microsoft.com/fwlink/?linkid=2125287)

## Automatic Expansion

Notice how `:ENV` is expanded in the example above. Support for this was automatically added in terraspace\_plugin_azurerm 0.3.3.

To selectively disable expansion you can provide the `expand: false` option.

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= azure_secret("demo-:ENV-user", expand: false) %>"
    pass = "<%= azure_secret("demo-:ENV-pass", expand: false) %>"
