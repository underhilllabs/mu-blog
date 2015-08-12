---
layout: page
title: Vagrant Notes
category: vagrant
tags: [notes, vagrant, commandline]
notetype: cheatsheet
published: true
permalink: cheatsheets/vagrant/
---

## Basic Setup

### Initialize a standard Ubuntu vagrant image. 

```bash
vagrant init hashicorp/precise32
```

### Start the vagrant image up.

```bash
vagrant up
````

Vagrant will download and build the VM if this is the first time, otherwise it will restart the vagrant image.

### SSH into the vm after it's been started.

```bash
vagrant ssh
```

{:class .table .table-bordered .table-striped}
| command| description|
|----------|--------|
| vagrant init &lt;file&gt; | create and initialize new vagrant image | 
| vagrant up | start vm |
| vagrant ssh | ssh into the image|

