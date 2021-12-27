___

## Why Is Env in Bucket Name?

By default, the bucket name has the ENV at the end. This is done so we can easily see which environment the bucket stores Terraform statefiles for. This quickly helps with debugging. If you prefer not to have the ENV at the end of the bucket name, remove it after generating the project with `terraspace new project`.
