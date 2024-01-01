## Usage

Here's a demo stack that uses the downloaded `vendor/modules/s3` module.

app/stack/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 2
}

module "bucket" {
  source     = "../../modules/s3" # looks up either app/modules/s3 or vendor/modules/s3
  bucket     = "bucket-${random_pet.this.id}"
  acl        = var.acl
}
```

A module downloaded to `vendor/modules/s3` is sourced same way as if they were defined in `app/modules/s3`. This is because Terraspace considers multiple lookup paths. Docs: [Lookup Paths]({% link _docs/misc/lookups.md %})

Here's an example repo based on these docs: [boltops-tools/terraspace-demo-terrafile](https://github.com/boltops-tools/terraspace-demo-terrafile)

{% include terrafile/lockfile.md %}
