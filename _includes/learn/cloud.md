## Terraspace Cloud

You can configure your app settings to enable [Terraspace Cloud](https://blog.boltops.com/2022/06/10/terraspace-cloud/). This provides a nice GUI interface to track your plans and updates. It is optional.
config/app.rb

```ruby
Terraspace.configure do |config|
  config.logger.level = :info
  # config.cloud.org = "ORG" # <= change to the Terraspace Cloud org you've created
end
```

To learn more:

* [Terraspace Cloud]({% link _docs/cloud.md %}).
* [Terraspace Cloud Setup]({% link _docs/cloud/setup.md %}).
