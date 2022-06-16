## Configure Terraspace Cloud

Configure the `cloud.org` and `cloud.project` settings.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.org = "boltops"  # replace with your org name
  config.cloud.project = "main" # replace with your project name
end
```

* **org**: The org is the organization you created when you signed up for an account.
* **project**: The project name is used as a "namespace" or "container" for your terraspace stacks. It can contain regular alpha characters, dashes, and numbers.

More Docs: [Cloud Config]({% link _docs/cloud/config.md %})

## Deploy a Stack

After you've set up the first 2 steps, any stack updates will be tracked by Terrapace Cloud. Example:

    terraspace up demo

When the update completes, you'll see a link to the update:

    Terraspace Cloud Stack demo-dev https://app.terraspace.cloud/boltops/main/demo/updates/update-nvEHbKSiGRe8nYTm

The dashboard looks like this:

![](https://img.boltops.com/images/terraspace/cloud/stacks/stack-updates-v3.png)

And update logs:

![](https://img.boltops.com/images/terraspace/cloud/stacks/stack-update-log.png)