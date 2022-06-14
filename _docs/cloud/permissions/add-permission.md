---
title: "Terraspace Cloud Permissions: Add Permission"
nav_text: Add Permission
category: permissions
order: 3
---

{% include videos/learn/cloud/permissions.md %}

Now we'll add permissions to the team.

1. If you're on the Team show page where you add users, you can click on **Permissions**. If you're on the Teams list page, you can click on the **Permissions** link next to the team.
2. Click **Create Permission**.
3. Fill in a **Permission Name**, Example: **main**
4. You can specify projects, stacks, envs, and apps this permission will grant. They are separated by spaces. To keep this simple, we'll use `*`, which is a wildcard that means all.
5. For **Access**, we'll use **admin**. Which provides full access. IE: read, write, and delete.
6. Click **Save Permission**

The form looks like this:

![](https://img.boltops.com/images/terraspace/cloud/permissions/add-permission-form.png)

Once the permission is saved, you can view it

![](https://img.boltops.com/images/terraspace/cloud/permissions/add-permission-saved.png)

Next, we'll create review what you can do with permissions in a little more detail.
