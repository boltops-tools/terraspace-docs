---
title: Pass Files
category: config
order: 12
---

Terraspace builds a terraform project from files like `app/stacks`. {% include config/processing.md %}

There are cases where it makes sense to do no processing at all. For example, lambda function ruby files like `lambda_function.rb` should not be processed by the Terraspace DSL.

## files

By default, the `files` folder within modules or stacks will be copied straight to the build cache without any processing. This is call the "pass" strategy. For example:

    app/stacks/demo/files/lambda_function.rb

Will build:

    $ terraspace build demo
    $ ls .terraspace-cache/us-west-2/dev/stacks/demo/files/
    lambda_function.rb
    $

## Configurable

You can configure additional patterns to use the pass strategy.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.build.pass_files = ["myfiles"]
end
```
