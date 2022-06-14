---
title: "Terraspace Cloud Permissions: Access Levels"
nav_text: Access Levels
category: permissions
order: 8
---

{% include videos/learn/cloud/permissions.md %}

When you create a permissions rule it can be assigned one of 3 access levels: read, write, admin. Here's a table that covers these levels.

Level | Description
---|---
read | Read-only access to the records. You can see the plans and updates, but you cannot run `terraspace plan`, `terraspace up`, `terraspace down` to create the records.
write | Write access to the records. You can see the plans and updates, but you cannot run `terraspace plan`, `terraspace up`, `terraspace down` to create the records.
admin | Ability to delete the Terraspace Cloud info. Delete the Cloud Stack and it's history.

The write permission infers the read permission. And the admin permission infers the read and write permission.

Note: If the user is a member of the owners team, the user will have admin access regardless.
