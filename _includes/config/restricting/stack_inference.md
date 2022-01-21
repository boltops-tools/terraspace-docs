## Including and Excluding Stacks Inference

If you are using `config.allow.stacks` and `config.deny.stacks`, then `config.all.include_stacks` and `config.all.exclude_stacks` are inferred from those settings. For example:

Let's say we have 3 stacks:

    $ terraspace list
    app/stacks/route53
    app/stacks/stack1
    app/stacks/stack2

If you want to only allow `terraspace up` to deploy the `route53` stack for `TS_ENV=global` environment. Configure:

config/app.rb

```ruby
Terraspace.configure do |config|
  if Terraspace.env == "global"
    config.allow.stacks = ["route53"]
  else
    config.deny.stacks = ["route53"]
  end
end
```

Then the `route53` stack will only be allowed to be deployed with `TS_ENV=global`. If `TS_ENV=dev`, then the `route53` stack will be prevented from deploying. Example:

    $ TS_ENV=global terraspace up route53
    ...
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:
    ...
    $ TS_ENV=dev terraspace up route53
    Building .terraspace-cache/dev/stacks/route53
    ERROR: The configs do not allow this.
    This stack is not allowed to be used for TS_ENV=dev
    Deny stacks: route53

By default, terraspace set the options like this:

    config.all.include_stacks = config.allow.stacks
    config.all.exclude_stacks = config.deny.stacks

This means:

    $ TS_ENV=global terraspace all up
    Will run:
        terraspace up route53 # batch 1

And

    $ TS_ENV=dev terraspace all up
    Will run:
        terraspace up stack1 # batch 1
        terraspace up stack2 # batch 1

The the `route53` stack will only be deployed when `TS_ENV=global` by inference. You only have to set the `config.allow.stacks` and `config.deny.stacks` and `terraspace all` automatically knew what to do.

You can change this default behavior with `config.all.consider_allow_deny_stacks = false`. You would then need to set `config.all.include_stacks` and `config.all.exclude_stacks` explicitly.

{% if include.allow_rules %}
More docs: [Config Restricting Stacks]({% link _docs/config/restricting/stacks.md %}).
{% else %}
More docs: [Terraspace All Excluding Stacks]({% link _docs/dependencies/exclude-stacks.md %}).
{% endif %}
