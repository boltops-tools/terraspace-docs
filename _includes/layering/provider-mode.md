## Layering Modes: simple, namespace, provider

In Terraspace v2, the namespace and provider level layering is off by default. There are 3 Layering Modes:

* **simple**: This is the default. It only includes TS_ENV and region.
* **namespace**: This enables the namespace. The namespace is AWS Account, Azure Subscription, or Google Project.
* **provider**: This enables the most number of layering. It includes layers that are scoped to the cloud provider also.


If you need v1 behavior, you can use "provider" mode.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.mode = "provider" # simple, namespace, or provider
end
```

Here's a concrete example:

    $ export TS_SHOW_ALL_LAYERS=1
    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
        app/stacks/demo/tfvars/base.tfvars (found)
        app/stacks/demo/tfvars/dev.tfvars (found)
        app/stacks/demo/tfvars/us-west-2.tfvars
        app/stacks/demo/tfvars/us-west-2/base.tfvars
        app/stacks/demo/tfvars/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/111111111111.tfvars
        app/stacks/demo/tfvars/111111111111/base.tfvars
        app/stacks/demo/tfvars/111111111111/dev.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/base.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/aws.tfvars
        app/stacks/demo/tfvars/aws/base.tfvars
        app/stacks/demo/tfvars/aws/dev.tfvars
        app/stacks/demo/tfvars/aws/us-west-2.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/base.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111.tfvars
        app/stacks/demo/tfvars/aws/111111111111/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/dev.tfvars

**Notes:**

* Only the app level layers are shown for clarity.
* All layers except for the first, tfvars root folder, are provider specific.
* The region maps to an AWS region, Azure location, or Google region. For Azure, `location` and `region` are aliased. 
* The `namespace` an AWS account, Azure subscription, or Google project.
