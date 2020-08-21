---
title: "VCS Workflow: Adjust Project Settings"
---

## Summary

1. Remove .terraspace-cache from .gitignore
2. Set up pre-push git hook

## 1. Remove .terraspace-cache from .gitignore

Normally, Terraspace builds a terraform project in the `.terraspace-cache` folder that is not meant to be added to versioned controlled.  With TFC, the code must be in VCS in order to be ran though.  So we must remove the `.terraspace-cache` line from the `.gitignore` file to commit it.

## 2. Set up pre-push git hook

Since TFC will run the built Terraform project folders by Terraspace, we must remember to build the project before a `git push`. We can use a git pre-push hook to always build and commit the changes so we don't forget.  In your terraform project folder, run:

    terraspace new git_hook

Here's an examle with output:

    $ terraspace new git_hook
          create  .git/hooks/pre-push
           chmod  .git/hooks/pre-push
    $

Feel free to customize the `.git/hooks/pre-push` further to fit your needs. It's just a starter hook.  The pre-push script looks something like this:

.git/hooks/pre-push

    #!/bin/bash -ex
    echo "Running: terraspace build placeholder"
    TS_ENV=dev terraspace build placeholder
    TS_ENV=prod terraspace build placeholder
    git add .terraspace-cache
    git commit -m 'update .terraspace-cache' || true

The "placeholder" stack is treated specially by Terraspace. Terraspace builds all stack modules, specifically for TFC support.

Also, note how both dev and prod envs are built. You can adjust this by using the `--envs` option. Example:

    terraspace new git_hook --envs dev stg prod

Now, you won't have to remember to run `terraspace build` before a `git push` again.

### Terraspace Clean

Terraspace only cleans up env-specific files in .terraspace-cache. If you want to remove the built files from other envs, you must do so manually with `rm -rf`. You can also blow away the entire cache and start fresh with:

    terraspace clean
