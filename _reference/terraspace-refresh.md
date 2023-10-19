---
title: terraspace refresh
reference: true
---

## Usage

    terraspace refresh STACK

## Description

Run refresh.

## Example

    $ terraspace refresh demo
    => terraform refresh
    random_pet.this: Refreshing state... [id=fond-sheep]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-fond-sheep]

    Outputs:

    bucket_name = bucket-fond-sheep
    $


## Options

```
-i, [--instance=INSTANCE]  # Instance of stack
```

