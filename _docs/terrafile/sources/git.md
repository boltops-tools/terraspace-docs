---
title: "Git: GitHub, Bitbucket, Mercurial repositories"
nav_text: Git
categories: sources
order: 1
---

## Example

Terrafile

```ruby
mod "pet2", source: "https://github.com/tongueroo/pet"
mod "example1", source: "git@bitbucket.org:tongueroo/example-module.git"
mod "example2", source: "git@gitlab.com:tongueroo/example-module"
```

Running:

    terraspace bundle

Will download modules to:

    vendor/modules/pet2
    vendor/modules/example1
    vendor/modules/example2

## Shorthand

GitHub is the default git source, so you can use shorthand notation:

```ruby
mod "pet1", source: "tongueroo/pet"
```

You can use an even shorter hand notation by setting the org:

```ruby
org "tongueroo"
mod "pet3", source: "pet" # inferred org
```
