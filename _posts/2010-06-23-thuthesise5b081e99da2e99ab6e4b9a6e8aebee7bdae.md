---
layout: post
title: 'ThuThesis封面隶书设置'
date: 2010-06-23 15:43
comments: true
category: 
tagline: 
tags:
---
    

今天上午答辩完，有人问我封面的隶书怎么设置，我才想起来我封面上的校名还是楷体……学校要求是隶书。此外xeCJK的幼圆字体也缺失。

Windows下装好office貌似就有隶书字体了，装之前有没有我不确定，office需不需要是中文版我也不确定。总之需要simli.ttf和simyou.ttf。这俩字体google一搜就是一堆下载站点。

在mac下安装这两个字体

![fontfolder](https://lh6faa.bay.livefilestore.com/y1mhj5EDfHRPgXI8e_F4yGN5y6qV6gwlJkj6l3ek3pRnf6Fimtyg0-exvAZXqOqhCS2Gxp6Cq1P0A7VlKU4wnjzoaUfFQkBZySr7PMOqGlCeYW9R9YOmpeMg8UyGhOWsGxfTQP3o8B4KbNVIPfsrgIw5Q/fontfolder[21].png?download&psid=1)

我装在/Library/Fonts里了，应该也可以装在~/Library/Fonts下。

![fontbook_lisu](https://lh6faa.bay.livefilestore.com/y1mY4Cf5QkLTEwV-VaI3gOHd9V6WrjlHnHnrZYxceQymM1O3Q0hefibf-8s0e_QszurG9FZ1XlD7ec3CurdsyZ_Kv97exOQtrJPSAXvp1HSY2cxe2kqU-dHd8lA6xEYDzg5GTXfR94iH18w2oAVgMFLgw/fontbook_lisu[9].png?download&psid=1)

[![fontbook_youyuan](https://lh6faa.bay.livefilestore.com/y1mmMzAfuycl-FQ0g4dcvfLp3t-GFiWpoATEVkaZQv8ETyFDIsYMbVAFMrI3VRz76Kxtq-0VcwrzB-gzihSs5DmDFWImx_I7qwIKWBSNEaslWblSLWNt-Y3bPGS4nxGJ4MXYV0HJP6XXe2GSAtClpYGfA/fontbook_youyuan_thumb[4].png?download&psid=1)](https://lh6faa.bay.livefilestore.com/y1mSDg9QxSVilGqhd0S9v1NJhOCuOKDQp8UENgUd-a3VoSEC8KplVFF3YQt90w0gqeXZot5zrAqHj7kQ-dbR2d-UxDshL5udKxEz1fYpS0AfKexBFu6OqaFTE0J7JUWj8SnDi5hIXXqOSXjlBnVI2p-fg/fontbook_youyuan[6].png?download&psid=1)

然后打开Font Book查这两个字体叫什么名字……本啦应该没有这一步的，可是我用simli和simyou这两个名字去编译，console里一直是error，找不到字体。图中看到字体名字分别是“LiSu”和“YouYuan”。

在thuthesis.dtx的第1243和1244行 以及 thuthesis.cls的第110和111行把字体换掉。

![thuthesis.dtx](https://lh6faa.bay.livefilestore.com/y1mlcBMdSeHIMgxqcIR31Bfq4T6PfpTr3l1XhHnbb4afurmWMVMJKbn1ow6DVBOKKd4G4vzWpdatnxwk6o3njMMnOm0n84M1qDnZzql1JIenrmudn_UHYIcjiUn-Ld1_GlhyJUHDH7YQPDaGeDDUqbQmA/thuthesis.dtx[5].png?download&psid=1)

![thuthesis.cls](https://lh6faa.bay.livefilestore.com/y1mIzVc-2T7SYSq0HOLolCndGwbhYV46QsaEro9y1wlroeZDbVL7R123kkTNMMNK_i6Dpf0BGwzdEn0zq6hQwXOVdyClJpUDeB4bCimj1IRaWA4Wi8tUDGYVls2uF3t6vj8rn3lOaALUFQxte6EJ5RSbg/thuthesis.cls[7].png?download&psid=1)

重新编译见到隶书，很好……
