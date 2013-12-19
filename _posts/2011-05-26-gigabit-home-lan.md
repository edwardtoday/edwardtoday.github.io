---
layout: post
title: 'Gigabit Home LAN'
date: 2011-05-26 13:27
comments: true
category:
tagline:
tags: []
---

In my previous post [Redesigned Home Network](/?p=37867), I described the network structure with 2 wireless routers (one connected to WAN and another working as a wireless AP) and several devices. That does help to increase the speed of wireless network at corners or rooms without APs.

With a [new desktop](/?p=38000), I have [turned the old MacBook into an HTPC](/?p=37849) to play contents stored in other computers connected wired or wireless. The LAN speed, however, become a bottleneck. I noticed the day before yesterday when I was playing a FLAC audio stored in my desktop. The playback blocked for 1~2 seconds every 3~5 minutes, even if I set the buffer to 10MB and wait seconds for buffering. The desktop has a wireless connection to the router with 150Mbps claimed. The MacBook has a wired connection to the 100M BASE-TX port on the router. FTP transporting speed is around 5/2 MBps with doors and windows open/closed. I would like to have 10 times the speed to have smooth HD video playback and acceptable network data backup experience. A gigabit switch is everything I need.

So the new design could be:

Internet
│
Router
◡‿◡                                            ├───── 802.11b/g/n devices
Gigabit Switch
┌───────┬────┴────┬───────┐
Room1           Room2               Room3    MacBook
│                     │                         │                   │
My Desktop         N/A           Desktop 2   TV & AMP

Desktops will have wired connections to boost media sharing performance. Wireless speed is limited by the 100Mbps LAN port of the router.

One more thing. Use [DD-WRT firmware](http://www.dd-wrt.com) with the TP-Link WR-941N wireless router. [autoddvpn](http://code.google.com/p/autoddvpn/) is the reason.

│
