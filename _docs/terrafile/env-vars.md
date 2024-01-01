---
title: Env Vars
category: terrafile
order: 7
---

There is one notable env var that allows you to affect the `git clone` command that `terraspace bundle` calls.

    TB_GIT_CLONE_ARGS

This allows you to add extra arguments to the `git clone` command. IE:

    export TB_GIT_CLONE_ARGS='-c http.extraheader="AUTHORIZATION: Basic"'
    terraspace bundle

Related [GitHub issue](https://github.com/boltops-tools/terraspace-bundler/issues/6#issuecomment-859623939)
