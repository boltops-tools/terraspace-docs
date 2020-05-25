---
title: Config
---

The config folder is for common configurations. Example:

* [Backend Config]({% link _docs/config/backend.md %}): configure which backend to use by default. IE: S3
* [Provider Config]({% link _docs/config/provider.md %}): configure which provider to use by default. IE: AWS

The files in the config folder get materialized to each module you deploy. It's all configurable and overridable within each module itself. The next docs cover how it works.
