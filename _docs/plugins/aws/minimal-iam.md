---
title: AWS Minimal IAM Policy
---

The IAM user you use to run the `terraspace up` commands needs a minimal set of IAM policies. Here is a table of the baseline services needed:

Service | Description
--- | ---
DynamoDB | To create the DynamoDB table for store the locks.
S3 | To create the S3 bucket for backend state storage.
