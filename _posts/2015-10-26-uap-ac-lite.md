---
layout: post
title: "装修没有布网线，如何拯救世界"
description: ""
tagline: ""
category: "life"
tags: [gadgets]
published: true
---

刚搬好家，没有重新装修，上家多年前装修的时候并没有布网线，所以各个房间的网络覆盖成了一个问题。

家里有一个 Asus AC66R，一个 Netgear WNDR3700，一个洋垃圾千兆交换机。考虑到 NAT 性能，把 AC66R 作为主路由。交换机放在电视柜里，接着电视、电视盒子、NAS。交换机与 AC66R 拉了一根明线沿踢脚线绕房间半圈到电视柜后面，千兆达成。

房间的门密封做得特别好，连个扁网线都拉不进去，所以房间里的网络只能考虑 Wi-Fi 或是电力线通信。败了一对 Zinwell PLS-8011，一个插在客厅，一个插在书房，标称 1000M，实测 70M～100M 波动。该速率像是半双工的，从 NAS 读取能达到 9MB/s，但是读写同时进行，只有 5MB/s 左右。这个速度简直对不起 200M 入户的电信宽带，待改造，给台式机加个 802.11ac 的网卡后再战。

AC66R 的无线覆盖在原来的小房子就是个问题，主卧一侧床头信号极差。现在问题更明显。

![](https://dn-qingpei-image.qbox.me/in_post/2015/wifi/wifi.png)

用 iPhone6 + Speedtest app 测速。上下行速度在 A 位置有 240/28Mbps，B 位置 25/25 Mbps，C 位置搜不到路由器的 SSID 广播，D 位置下行 1.xMbps，上行测试失败。

床头怎能没有网？蹲坑怎能没有网？正好月初关注的 UBNT 新 AP 在万能的淘宝出现了，以前只有 802.11n 的 UAP 和真・企业级定价的 UAP-AC，现在终于有 UAP-AC 了。［UAP-AC-Lite](https://www.ubnt.com/unifi/unifi-ap-ac-lite/) 更加小巧，于是购入。（天线是2x2的，最高只能 867Mbps。Pro 版本天线倒是 3x3，可以达到 1300Mbps，但是贵，遂放弃。）装在走廊尽头吊顶上，明线走墙角练到 AC66R，中间接了 POE adapter 供电。（注：低端货是24V/48V供电，高端货才兼容 802.3at POE。）官网下载软件进行配置，全图形界面，难度绝不比家用产品大。支持多个 SSID，可以做隔离，guest Wi-Fi 无压力。

连 UAP 测速。A 位置 137/20 Mbps，B 位置 27/10 Mbps，C 位置 20/18 Mbps，D 位置待测。上传浮动大是因为 NAS 在上传抢带宽。

TODO: 目前书房的电脑由电力线传输改成 Wi-Fi。电力线用于 IPTV。电信这个直播点播分别用两个 VLAN tag 的做法，Asus 原厂固件还真对付不了。

更多阅读：

- [Review: Ubiquiti UniFi made me realize how terrible consumer Wi-Fi gear is](http://arstechnica.com/gadgets/2015/10/review-ubiquiti-unifi-made-me-realize-how-terrible-consumer-wi-fi-gear-is/)
- [UniFi AC APs Datasheet](http://dl.ubnt.com/datasheets/unifi/UniFi_AC_APs_DS.pdf)
