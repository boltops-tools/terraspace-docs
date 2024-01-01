---
title: Dot Env Files
category: config
order: 14
---

Terraspace loads environment variables from `.env` files. The naming convention for these files is `.env.TS_ENV`.

Let's say you have a Terraspace project that has the following dotenv files:

    .env
    .env.dev
    .env.prod

## Always Loaded

The `.env` file will always get loaded.

## Environment Specific Variables

The other `.env` files will be loaded based on value of the `TS_ENV` environment variable. So:

* `TS_ENV=dev terraspace up` will use `.env.dev`
* `TS_ENV=prod terraspace up` will use `.env.prod`

You can set `TS_ENV` to any value, depending on whatever you want to name your environment.

## Dotenv File Precedence

Here's an example with `TS_ENV=dev` to explain the dotenv files precedence, from highest to lowest.

1. .env.dev.local - highest precedence. only loaded when `TS_ENV=dev`
2. .env.dev
3. .env.local
4. .env - lowest precedence. always loaded.

## Load Order

The dotenv files load after the [config/boot.rb]({% link _docs/config/boot.md %}) hooks. To test and confirm that dotenv files are loading properly you can use an [config/inits]({% link _docs/config/inits.md %}) initializer. Example:

.env

    FOO=bar-base

.env.dev

    FOO=bar-dev

config/inits/printenv.rb

```ruby
puts "printenv.rb called: ENV['FOO'] #{ENV['FOO'].inspect}"
```
