---
layout: post
title: "OpenWrt 固定 WAN 口 MAC 地址"
description: ""
tagline: ""
category: "Technical"
tags: [OpenWrt]
published: true
---

此前买了台 Netgear WNDR3700v4，刷了 OpenWrt 之后，每次重启 WAN 口的 MAC 地址都会随机变化。家用倒无所谓，但是一些应用 MAC 白名单的商用环境， 这是个问题。

试了各种方法，解决了问题。整理如下。

## 试过但失败的方法

Web GUI 上的「Network - Interface - WAN - Advanced Settings」里面有一个「Override MAC address」设置。在这里填写「aa:bb:cc:dd:ee:ff」等效于在 `/etc/config/network` 中的 `config interface 'wan'` 下增加一行 `option macaddr 'aa:bb:cc:dd:ee:ff'` 。但是重启后该设置不起作用。

网上有人说如下命令可以改 MAC 地址。

```
uci set network.wan.macaddr=aa:bb:cc:dd:ee:ff
uci commit network
ifdown wan && ifup wan
```

试了，不行。

网上还有人说这样可以，假设 WAN 口为 `eth0.2` 。

```
ifconfig eth0.2 down
ifconfig eth0.2 hw ether aa:bb:cc:dd:ee:ff
ifconfig eth0.2 up
```

试了，不行。

## 有效的方法

如下命令测试可行。

```
ifconfig eth0.2 down
ifconfig eth0 down
ifconfig eth0 hw ether aa:bb:cc:dd:ee:ff
ifconfig eth0 up
ifconfig eth0.2 up
ifdown wan
ifup wan
```

应该是 `eth0.2` 这个 VLAN 接口启用时，会克隆 `eth0` 的地址。

下面设置启动后自动应用该 MAC 设置。

```
touch /etc/init.d/clonemac
chmod +x /etc/init.d/clonemac
```

然后编辑 `/etc/init.d/clonemac`，内容如下。

```
#!/bin/sh /etc/rc.common
# Copyright (C) 2014 OpenWrt.org

START=30
STOP=15

start() {
ifconfig eth0.2 down
ifconfig eth0 down
ifconfig eth0 hw ether aa:bb:cc:dd:ee:ff
ifconfig eth0 up
ifconfig eth0.2 up
ifdown wan
ifup wan
}

stop() {
  echo "Stop clonemac."
}
```

其中，`START=30` 是试出来的。启动项中的 `network` 优先级为 20，这个脚本应在其后执行才有效。

最后设置启动时执行该脚本。

```
/etc/init.d/clonemac enable
```

重启路由发现 MAC 地址设置成功，顺利通过 DHCP 拿到 IP。