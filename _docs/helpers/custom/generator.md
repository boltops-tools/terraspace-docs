---
title: Helper Generator
nav_text: Generator
categories: helpers-custom
order: 9
---

To help you get started quickly, you can generate starter helper code. Here are some examples:

## Project Examples

Conventionally name the helper custom.

    $ terraspace new helper custom --type project
          create  config/helpers
          create  config/helpers/custom_helper.rb

Produces:

config/helpers/custom_helper.rb

```ruby
module Terraspace::Project::CustomHelper
end
```

## Stack Examples

Conventionally name the helper to be the same as the stack name.

    $ terraspace new helper demo --type stack
          create  app/stacks/demo/config/helpers
          create  app/stacks/demo/config/helpers/demo_helper.rb
    $

Produces:

app/stacks/demo/config/helpers/demo_helper.rb

```ruby
module Terraspace::Stack::Demo::DemoHelper
end
```

Explictly name the helper file. IE: custom here.

    $ terraspace new helper demo --type stack --name custom
          create  app/stacks/demo/config/helpers
          create  app/stacks/demo/config/helpers/custom_helper.rb
    $

## Module Examples

Conventionally name the helper to be the same as the module name.

    $ terraspace new helper example --type module
          create  app/module/example/config/helpers
          create  app/module/example/config/helpers/example_helper.rb
    $

Produces:

app/module/example/config/helpers/example_helper.rb

```ruby
module Terraspace::Module::Example::ExampleHelper
end
```

Explictly name helper method. IE: custom here.

    $ terraspace new helper example --type module --name custom
          create  app/module/example/config/helpers
          create  app/module/example/config/helpers/custom_helper.rb
    $