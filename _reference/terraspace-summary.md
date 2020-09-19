---
title: terraspace summary
reference: true
---

## Usage

    terraspace summary

## Description

Summarize resources.

## Example

    $ terraspace summary
    Summary of resources based on backend storage statefiles
    Downloading statefiles to /tmp/terraspace/statefiles/terraform-state-111111111111-us-west-2-dev/us-west-2/dev/
    stacks/demo/terraform.tfstate
        random_pet this: sunny-chicken
        aws_s3_bucket this: bucket-sunny-chicken
    $

Also, check out `terraspace all show`.


## Options

```
    [--mod=MOD]                  # Module to build to generate a backend file for discovery. By default the last module is used. Usually, it wont matter.
    [--init], [--no-init]        # Instance of stack
                                 # Default: true
s, [--short], [--no-short]       # Only show statefiles
    [--verbose], [--no-verbose]  
    [--noop], [--no-noop]        
```

