---
title: DSL
category: misc
---

Terraspace supports an optional Ruby DSL.  It gives you access to the full power of Ruby, when HCL is not enough for your purposes.

Note: The DSL interface may change.

## Examples

app/modules/instance/main.rb

```ruby
resource("aws_instance", "this",
  ami: "ami-0ded0751341bcc45b", # amazonlinux2
  instance_type: "t2.micro",
)
```

app/modules/vpc/variables.rb

```ruby
variable("cidr_block",
  default: "10.10.0.0/16",
  description: "cidr block",
)
```

app/modules/vpc/main.rb

```ruby
resource("aws_vpc", "vpc",
  cidr_block: var.cidr_block,
)
```

app/modules/vpc/outputs.rb

```ruby
output("vpc_arn",
  description: "VPC arn",
  value: "${aws_vpc.vpc.arn}"
)
```

