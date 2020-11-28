---
title: Terraspace with Docker
---

You can run Terraspace within a Docker container. TThe Docker images are published to Dockerhub daily at [boltops/terraspace](https://hub.docker.com/r/boltops/terraspace). This provides you with an isolated throwaway environment to try out Terraspace.

Here's a "Getting Started with Terraspace and Docker" Video:

<div class="video-box"><div class="video-container"><iframe src="https://www.youtube.com/embed/GKE2DZtaJc8" frameborder="0" allowfullscreen=""></iframe></div></div>

## Docker Run

Start the container

    docker run -ti boltops/terraspace

This starts up a container with Terraspace and Terraform already installed.

The default OS is the ubuntu. You can also use different OSes by specifying the tag.

    docker run -ti boltops/terraspace:alpine
    docker run -ti boltops/terraspace:amzn2
    docker run -ti boltops/terraspace:ubuntu

For the Dockerfiles, see: [boltops-tools/terraspace-dockerfiles](https://github.com/boltops-tools/terraspace-dockerfiles)

## Docker Pull

The Docker images are published to Dockerhub daily at [boltops/terraspace](https://hub.docker.com/r/boltops/terraspace). The images generally include the latest version of Terraspace and Terraform. So remember to update the cached Docker images if you've pulled them before.

    docker pull boltops/terraspace
    docker pull boltops/terraspace:alpine
    docker pull boltops/terraspace:amzn2
    docker pull boltops/terraspace:ubuntu

## Cloud Provider Docker Guides

Here are useful Docker guides for different cloud providers:

{% assign docs = site.docs | where: "categories","docker-guides" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
