---
title: "Terraspace Cloud Permissions: Review Permissions"
nav_text: Review Permissions
category: permissions
order: 4
---

Terraspace Cloud Permissions are designed to be quite flexible and is designed to work with the way Terraspace works.

With a terraspace project, you define stacks and deploy different instances of these stacks like one for `TS_ENV=dev` and `TS_ENV=prod`. The system is allows you to finely scope these permissions.

Scope | Description
---|---
projects | Your terraspace project name is configured with a config, IE: `config.cloud.project = "main"`. The default project name is main. If you have multiple terraspace projects and repos, you can set `config.cloud.project` and then target which specific projects you want users to have permissions over.
envs | This allows you to target which environments, IE: `TS_ENV`, users have permissions and access to. If you create a rule with `envs: dev sbx`, then the user is only granted permission `TS_ENV=dev` and `TS_ENV=sbx`. The user will not be able to deploy to `TS_ENV=prod`.
apps | This allows to target which applications, users have permissions and access to. If you're leveraging the Terraspace `TS_APP` ability, which is one way to reuse the same stack for different apps. You can use this field to scope access to only that app. Note, if you use this then `TS_APP` needs to be set for that stack.
stacks | This allows to target which stacks, users have permissions and access to. This is the stack being deploy. IE: `terraspace up demo`. In this case, the stack is named `demo`.

## Example: dev and prod team

A decent starting set of permissions is to create 2 teams: dev and prod.

**dev team permissions:**

    projects=*
    envs=dev
    apps=*
    stacks=*

**prod team permissions:**

    projects=*
    envs=prod
    apps=*
    stacks=*

* Then assign only users who should have access to dev to the dev team.
* Assign users will access to both dev and prod to both dev and prod teams.

Next, we'll create a user token.
