---
title: Env Vars
category: config
order: 13
---

Here's a list of **some** env vars that can affect terraspace behavior. Not all env vars are listed as most are for internal usage, may change, and [config settings]({% link _docs/config/reference.md %}) are preferred.

Name | Description | Default
--- | --- | ---
TS_ENV | Environment to deploy | dev
TS_BUFFER_BLOCK_SIZE | Terraspace call terraform commands. It then streams back output from terraform back to terraspace. Output is read with `IO#read_nonblock`. This method reads back data in blocks of bytes. The default setting has already been testing with the highest `TF_LOG=TRACE` level. However, depending on your code, terraform may print even larger volumes of data. Too large and a deadlock is caused. Terraspace "hangs". If this seems to be happening, adjusting this to a higher value may help. | 102400
TS_BUFFER_TIMEOUT | Amount of time before waiting for reading output from terraform commands timeout. | 1hr
