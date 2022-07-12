---
title: Terraspace Cloud Terraspace All Logging
nav_text: Terraspace All
category: cloud
order: 6
---

{% include videos/learn/cloud/terraspace-all.md %}

Terraspace Cloud is smart enough to capture and record the `terraspace all` logs from `terraspace up` on individual stacks. Normally, the individual stack logs are written a log file, IE: `log/up/demo.log`. With terraspace cloud these logs are captured and saved to the dashboard. This is particularly helpful when running `terraspace all` as a part of [CI/CD]({% link _docs/ci.md %}).

## Example

Here's an example of what `terraspace all` logs for an individual stacks looks like on Terraspace Cloud.

![](https://img.boltops.com/images/terraspace/cloud/all/terraspace-all-logs.png)

The logs show that the update was triggered from the `terraspace all` command and provides summarized log output from the previous `terraspace up` batches. It also shows the full log of the individual `terraspace up` command.
