## Tip: Seeing Layering Clearly

To see the layers being used, use the `config.layering.show` option.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.show = true
end
```

This will show **found** layers, which is what you want to see most of the time. To see **all possible** layers, see: [Debugging Layering Docs]({% link _docs/layering/debugging.md %}).
