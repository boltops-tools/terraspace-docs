---
title: Build Cache Dir
---

The `build.cache_dir` setting controls where the generated terraform project will be built. It's set to a reasonable and conventional default. If you wish, you also can override and fully control the path. Here's the default:

```ruby
Terraspace.configure do |config|
  config.build.cache_root = nil # defaults to /full/path/to/.terraspace-cache
  config.build.cache_dir = ":CACHE_ROOT/:REGION/:ENV/:BUILD_DIR" # default
end
```

## Interface: String or Object

The `build.cache_dir` can take:

1. a **String** or
2. an **Object** that responds to the `call` method.

## String Interface

When setting it as a **String**, Terraspace uses it as a pattern and substitute values. For example,

```ruby
Terraspace.configure do |config|
  config.build.cache_dir = ":CACHE_ROOT/:REGION/:ENV/:BUILD_DIR"
end
```

Can produce:

    .terraspace/us-west-2/dev/stacks/demo

## Object Interface

When setting it as a Object, the instacne method `call` should also return a String with a pattern for Terraspace to use for substitution.

```ruby
class CustomBuildDir
  def call(mod)
    ":CACHE_ROOT/my-cache/:NAMESPACE/:REGION/:ENV/:BUILD_DIR" # String is returned
  end
end

Terraspace.configure do |config|
  config.build.cache_dir = CustomBuildDir
end
```

The Object can also respond with class method  `call`. The current module or stack is passed to the `call` method also.
