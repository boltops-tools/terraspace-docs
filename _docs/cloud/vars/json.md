---
title: Terraform Cloud Vars JSON
---

## Example

First, you create a `vars.json` file like so:

config/terraform/cloud/vars.json

```json
[
  {
    "data": {
      "type": "vars",
      "attributes": {
        "key": "instance_type",
        "value": "t3.micro",
        "category": "terraform"
      }
    }
  },{
    "data": {
      "type": "vars",
      "attributes": {
        "key": "AWS_ACCESS_KEY_ID",
        "value": "<%= ENV['AWS_ACCESS_KEY_ID'] %>",
        "category": "env"
      }
    }
  },{
    "data": {
      "type": "vars",
      "attributes": {
        "key": "AWS_REGION",
        "value": "<%= ENV['AWS_REGION'] %>",
        "category": "env"
      }
    }
  },{
    "data": {
      "type": "vars",
      "attributes": {
        "key": "AWS_SECRET_ACCESS_KEY",
        "value": "<%= ENV['AWS_SECRET_ACCESS_KEY'] %>",
        "category": "env",
        "sensitive": true
      }
    }
  }
]
```

Notice, that the `vars.json` supports ERB template processing. This avoids hardcoding sensitive info.

Terraspace will then automatically call the Terraform Cloud API to set the variables as part of the `terraspace up`.

{% include cloud/vars-behavior.md %}
