---
layout: post
title: "Clone ESXi Boot Drive"
description: ""
tagline: ""
category: "cloud"
tags: [esxi]
published: true
---

Suppose the original boot drive is `/dev/sdb` and the new drive is `/dev/sdc`. (Use `sudo parted -l` to check this.)

View the partition table of `/dev/sdb` with `sudo sgdisk -p /dev/sdb`.

There would be 5 partitions numbered 1,5,6,7,8. Remember the `End (sector)` of partition 8, which is the last one. In this case, it is 1843199.

Dump the data with `sudo dd if=/dev/sdb of=/dev/sdc bs=512 count=1843200`. Note that `count` is the sector number we remembered plus 1 since the first sector is number 0.

Fix the partition table with

<script src="https://gist.github.com/edwardtoday/69772791d34678ee2c59.js"></script>
