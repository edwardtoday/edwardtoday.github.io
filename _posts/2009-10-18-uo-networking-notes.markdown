---
date: '2009-10-18 12:22:39'
layout: post
slug: uo-networking-notes
status: publish
title: UO Networking Notes
wordpress_id: '37619'
tags:
- Car
- Cost
- Design
- Hardware
- LAN
- Mac
- Networking
- Notes
- RAM
- Test
- Thoughts
- update
- web
- Work
---


  system login: sysadmin@5umrn3t!  

    

  July 19, 2009  

  
  

# 
    **Unix/IP Preparation Course**
  


  _    [hervey@nsrc.org](mailto:hervey@nsrc.org)  

      [stevev@uoregon.edu](mailto:stevev@uoregon.edu)  

  _  

    

  [http://nsrc.org/workshops/2009/summer/unix-ip.html](http://nsrc.org/workshops/2009/summer/unix-ip.html)  

    

    

  July 20, 2009  

  

# 
    **Introduction to Campus Network Design**
  


    

  REN - Research and Education Network  

  [NAT](http://en.wikipedia.org/wiki/Network_address_translation) or not : [SIP](http://en.wikipedia.org/wiki/Session_Initiation_Protocol) is incompatible with NAT  

  [Star networks](http://en.wikipedia.org/wiki/Star_network) instead of [daisy networks](http://en.wikipedia.org/wiki/Network_topology#Daisy_chains)  

  

## 
    Core Network:
  


      **_Reliability_** is the key - reliable power, reliable air conditioning  

      Firewalls and Traffic Shaping Devices  

      Intrusion Detection, Intrusion Prevention  

      Network Address Translation  

      Border routers separate from core routers  

    

  At the core of your network should be **[routers](http://en.wikipedia.org/wiki/Router)** - you must _route, not switch_. [Switch](http://en.wikipedia.org/wiki/Network_switch) at the edge.  

    

  Border Router MUST get Provider Independent IP address space.  

    






# 
  Structured Network Cabling





## 
  [Unshielded Twisted Pair Cable](http://en.wikipedia.org/wiki/Twisted_pair#Unshielded_twisted_pair_.28UTP.29)



    2+ cables to every outlet; 4 recommended; 6 if the dist is less than 90 meters  




      Strongly recommend [category 5e cabling](http://en.wikipedia.org/wiki/Category_5_cable#Category_5e)  

      Labeling is a key to reduce work later. Label them on the jacks on the router/switches.  

  

## 
    [Fiber Optic Cabling](http://en.wikipedia.org/wiki/Optical_fiber_cable)
  


      **Multi Mode** : 2km@100Mbps. 62.5/50 micron core  

      _versus_  

      **Single Mode** : 70km@virtually unlimited speed.  

  


    
  * 
      optimized for 1310 & 1550 nm operation
    

    
  * 
      optimized for [WDM](http://en.wikipedia.org/wiki/Wavelength-division_multiplexing) operation  

    

  



Physics of Fiber: see this [link](http://en.wikipedia.org/wiki/Optical_fiber)  

    A list of costs of different types of fiber... SO EXPENSIVE!!! starting from $250 USD...  

    Single mode fiber is more popular in US currently since factories do not manufacture many multi mode fibers any more.  

[Dispersion](http://en.wikipedia.org/wiki/Dispersion_%28optics%29) is the major limit on long-distance cabling using optical fiber.  

[Amplification device](http://en.wikipedia.org/wiki/Optical_amplifier) is necessary for networks located farther between than the maximum length limit of a certain type of optical fiber.  

  

**Star** configuration:  




  
  * 
    from core network to individual buildings
  

  
  * 
    inside of buildings from main phone closet to other closets  

  


Outdoor cable between buildings: armored & loose cube  

Indoor cable inside buildings: tight buffer  

Standardize on Connectors:  




  
  * 
    Multi mode: ST or SC ([epoxy](http://zh.wikipedia.org/w/index.php?title=%E7%8E%AF%E6%B0%A7%E6%A0%91%E8%84%82&variant=zh-cn#.E5.B7.A5.E4.B8.9A.E7.94.9F.E4.BA.A7) or hot melt)  

  

  
  * 
    Single mode: SC or SL ([fusion splice](http://en.wikipedia.org/wiki/Fusion_splicing) factory pigtails, however hand polish is OK if done properly)  

  

  
    
  * 
      [more details](http://www.tpub.com/neets/tm/108-7.htm) on fusion splicing  

    

  

If the cable needs to bend in its path, make sure the diameter of the path is at least _14 times_ larger than the diameter of the cable.  

如果需要弯曲光缆，确保弯曲的曲率半径（直径）至少是光缆半径（直径）的14倍以上。 （这种聊天方式真先进。。。）（**我觉得卿培讲解的好！**）没工资拿。。。  

For cable installed in underground conduit:  




  
  * 
    no more than 200m between pull points
  

  
  * 
    reduce distance by 50m for every 90 degrees of bend
  


Leave [slack loops](http://tnrcommunications.com/index_files/Page1111.htm).  

那个挂在墙上的是怎么回事？  

是说要预留一段长度的光缆以备不时之需吧。。。比如如果中间有一处断了，需要接上的时候，就得两头各熔掉一小断然后接上，如果没有预留就不够长了。  

  

[WDM](http://en.wikipedia.org/wiki/Wavelength-division_multiplexing) - Wave Division Multiplexing  

    using different colors of light 不同波长的光信号共享同一根光缆传输信号  




  
  * 
    Coarse
  

  
    
  * 
      fewer waves, low cost
    

    
  * 
      1310nm freq spectrum
    

  
  
* 
    Dense: more waves  

  


UADM?? what is this..  

-  

July 21, 2009  



# 
  Layer 2 Network Design



Carlos Vicente  

University of Oregon  

[cvicente@uoregon.edu](mailto:cvicente@uoregon.edu)  

  

Review...  

Redundant  

In-Building and Layer 2  




  
  * 
    Switching inside a building: small network  

  

  
  * 
    Routing between buildings: large network  

  


Layer 2 Concepts: Layer 2 protocols control access to a shared medium  

Ethernet Functions  




  
  * 
    Source and Destination id - MAC address
  



  
  * 
    Detect and avoid frame collisions
  

  
    
  * 
      listen and wait for channel to be available
    

    
  * 
      if collision occurs, wait a random period before retrying: CASMA-CD (should this be CSMA-CD?)
    

  

Ethernet Frame  

Evolution of Ethernet Topologies  




  
  * 
    Bus    

  

  
  * 
    Star  

  


  

[Hub](http://en.wikipedia.org/wiki/Network_hub): receives information and sends it to all ports (集线器)  

[Switch](http://en.wikipedia.org/wiki/Network_switch): learns the location of each node by looking at the source address of each incoming frame, and builds a forwarding table（交换机）  

A switch broadcasts come frames:  




  
  * 
    when the destination is not found in the table
  

  
  * 
    when the frame is destined to the broadcast address (FF:FF:FF:FF:FF:FF)
  

  
  * 
    when the frame is destined to a multi-cast Ethernet address
  

  
  * 
    **_So, switches do not reduce the broadcast domain!_**  

  


Switch vs. Router  




  
  * 
    Ethernet frames vs IP packets
  

  
  * 
    IP packets travel inside Ethernet frames
  

  
  * 
    IP networks can be logically segmented into subnets
  

  
  * 
    Switches do not usually know about IP, they only deal with Ethernet frames
  


Routers do not forward Ethernet broadcasts. So:  




  
  * 
    Switches reduce the collision domain
  

  
  * 
    Routers reduce the broadcast domain
  


Traffic Domains  




  
  * 
    Try to eliminate collision domains – Get rid of hubs!
  

  
  * 
    Try to keep your broadcast domain limited to no more than 250 simultaneously connected hosts
  

  
    
  * 
      Segment your network using routers
    

  

Layer 2 Network Design Guidelines  




  
  * 
    Always connect hierarchically
  

  
    
  * 
      If there are multiple switches in a building, use an aggregation switch
    

    
  * 
      Locate the aggregation switch close to the building entry point (e.g. fiber panel)
    

    
  * 
      Locate edge switches close to users (e.g. one per floor)
    

  


  
  * 
    Minimize path between elements (star better than chain)
  

  
  * 
    Build incrementally
  



  
    
  * 
      Keep growing within the same hierarchy
    

    
  * 
      Add redundancy, or the possibility of failure will rise
    

    
  * 
      Add a redundant aggregation switch
    

  
  
* 
    Do not daisy-chain, connect buildings hierarchically
  


[VLAN](http://en.wikipedia.org/wiki/VLAN)



  
  * 
    Allow us to split switches into separate (virtual) switches
  

  
  * 
    Only members of a VLAN can see that VLAN's traffic
  

  
  * 
    Reason of virtualization: reduce the cost of devices.
  



  
  * 
    Inter-switch links are configured as **trunks**, carrying frames from all or a subset of a switch’s VLANs
  


[802.1Q](http://en.wikipedia.org/wiki/802.1Q)



  
  * 
    The IEEE standard that defines how Ethernet frames should be _**tagged**_ when moving across switch trunks
  

  
  * 
    This means that switches from _different vendors_ are able to exchange VLAN traffic
  

  
  * 
    16-bit tag inserted to normal Ethernet frame
  

  
  * 
    VLAN + 802.1Q Trunk -> VLAN [Trunking](http://en.wikipedia.org/wiki/Trunking)
  


Tagged vs. Untagged  




  
  * 
    edge ports are not tagged, they are just “members” of a VLAN
  



  
  * 
    only need to tag frames in trunks  

  



  
  * 
    a trunk can transport both tagged and untagged VLANs
  



  
    
  * 
      As long as the two switches agree on how to handle those
    

  



VLANS increase complexity  




  
  * 
    You can no longer “just replace” a switch
  



  
  * 
    You have to make sure that all the switch- to-switch trunks are carrying all the necessary VLANs
  


Good reasons to use VLANs  




  
  * 
    You want to segment your network into multiple subnets, but can’t buy enough switches
  



  
    
  * 
      Hide sensitive infrastructure like IP phones, building controls, etc.
    

  


  
  * 
    Separate control traffic from user traffic
  

  
    
  * 
      Restrict who can access your switch management address  

    

  

Bad reasons to use VLANs  




  
  * 
    Because you can, and you feel cool...
  

  
  * 
    Because they will completely secure your hosts (or so you think)  

  



  
  * 
    Because they allow you to extend the same IP network over multiple separate buildings
  


Do not build “VLAN spaghetti”  

            _// Can anybody tell me who is Kevin Anderson?   [blade.reo@gmail.com??](mailto:blade.reo@gmail.com??)          It's me, Yang._  

Link Aggregation_  

    _You can use multiple links in parallel as a single, logical link        

    increased capacity and redundancy  




  



[LACP](http://en.wikipedia.org/wiki/Link_Aggregation_Control_Protocol#Link_Aggregation_Control_Protocol)  

Distributing Traffic in Bundled Links  

    using a hashing algorithm, based on source/destination IP, MAC, PORT  

    use the load-balancing method  

[Switching loop](http://en.wikipedia.org/wiki/Switching_loop)  

    Forwarding tables become unstable  

    Switches will broadcast each other’s broadcasts  

    **broadcast storm**  

Good Switching Loops: Redundant paths  

[Spanning Tree Protocol](http://en.wikipedia.org/wiki/Spanning_tree_protocol)



  
  * 
    to have bridges _dynamically_ discover a subset of the topology that is loop-free (a tree) and yet has just _enough connectivity_ so that where physically possible, there is a path between every switch
  



  
  * 
    Several flavors:
  



  
    
  * 
      [802.1d](http://standards.ieee.org/getieee802/download/802.1D-2004.pdf)
    

    
      
  * 
        [这里](http://en.wikipedia.org/wiki/Spanning_tree_protocol#Protocol_operation)的图和解释很清楚
      

      
  * 
        STP Design Guidelines  

            Enable spanning tree even if you don't have redundant paths  

            plan and set bridge priorities  

            do not accept BPDUs on end-user ports
      

      
  * 
        802.1d Convergence Speed  

            Blocking -> Forwarding : ~30s  

            Topologies changes: ~30s
      

      
  * 
        Choose the right root bridge!  

      

    



  
    
  * 
      [RapidSTP 802.1w](http://en.wikipedia.org/wiki/Rapid_spanning_tree#Rapid_Spanning_Tree_Protocol_.28RSTP.29)
    

    
      
  * 
        While STP can take 30 to 50 seconds to respond to a topology change, RSTP is typically able to respond to changes within a second.
      

    



  
    
  * 
      [MultipleSTP 802.1s](http://en.wikipedia.org/wiki/Rapid_spanning_tree#Multiple_Spanning_Tree_Protocol_.28MSTP.29)
    

    
      
  * 
        MSTP includes all of its spanning tree information in a single BPDU format. Not only does this reduce the number of BPDUs required on a LAN to communicate spanning tree information for each VLAN, but it also ensures backward compatibility with RSTP (and in effect, classic STP too).
      

    


  

  

July 22, 2009  



# 
  Core Network Design






  José Domínguez  







  
  * 
    Routing Architectures
  



  
    
  * 
      Where to route?
    

    
      
  * 
        At the point where we want to limit our layer-2 broadcast domain
      

      
  * 
        At your IP subnet boundary
      

    
    
* 
      Thinking of layers helps reduce the convergence time
    

    
* 
      topology and logical design are _**NOT**_ the same
    

    
* 
      These layers should not be confused with your layer 2 architecture
    

    


      
  * 
        Access layer
      

      
        
  * 
          Minimum routing information
        

        
  * 
          feeds traffic into the network
        

        
  * 
          provide network access control
        

        
  * 
          provide other edge services
        

        
          
  * 
            tagging for [QoS](http://en.wikipedia.org/wiki/Quality_of_service)
          

          
  * 
            tunnel termination
          

          
  * 
            traffic metering and accounting
          

          
  * 
            policy-based routing
          

        

      
* 
        Distribution layer
      

      


        
  * 
          Goals  

        

        
          
  * 
            Isolates topology changes
          

          
  * 
            Controls the routing table size
          

          
  * 
            Aggregates traffic
          

        
        
* 
          Strategies
        

        


          
  * 
            Route summarization
          

          
  * 
            Minimize the number of connections to the core
          

        

      
* 
        Core layer
      




                                    where you spend most of the money for performance  




  
    
      
        
  * 
          Goal
        

        
          
  * 
            Forwarding packets fast
          

        
        
* 
          Strategies
        

        


          
  * 
            Clear of network policies
          

          
  * 
            Every device has full reachability to every destination
          

          
            
  * 
              Facilitates core redundancy
            

            
  * 
              Reduces suboptimal routing
            

            
  * 
              Prevents routing loops
            

          



    
* 
      Depending in how large your campus is
    

    


      
  * 
        1 core + distribution layer
      

      
  * 
        1 core + no distribution layer + access layer
      

    
    
* 
      Spend some time thinking about how you will assign address space
    

    
* 
      the _routing table_ is to be updated when any change is made to the network
    

    
* 
      only provide full topology where it is needed; summarize at the hierarchy edges
    

    
* 
      Strategies for addressing
    

    


      
  * 
        First come, first serve
      

      
  * 
        Politically
      

      
  * 
        Geographically
      

      
  * 
        Topologically 
      

    



  
  * 
    High Availability and Fast Convergence
  



  
    
      
  * 
        hardware resiliency and backup paths
      

      
  * 
        different tech in different layer
      

      
  * 
        evaluate your _NEEDS_: minimum -> medium -> high
      

      
  * 
        Redundancy, redundancy and redundancy!
      

      
  * 
        dual everything everywhere ...  

      

    



  
  * 
    Campus Routing Protocols
  



  
    
  * 
      [Interior Routing Protocols (IGP)](http://en.wikipedia.org/wiki/Interior_gateway_protocol)
    

  


  
    
      
  * 
        [Open Shortest Path First (OSPF)  

        ](http://en.wikipedia.org/wiki/OSPF)
      

      
        
  * 
          defined in [RFC2328](http://tools.ietf.org/html/rfc2328)
        

        
  * 
          link-state routing
        

        
  * 
          using the optimal path (by the sum of costs of interfaces)  

        

        
  * 
          fast convergence  

        

      




  
    
  * 
      [Exterior Routing Protocols (EGP)](http://en.wikipedia.org/wiki/Exterior_Gateway_Protocol)
    

  


  
  * 
    Routing Protocols and security considerations
  


为啥今天的课听得格外艰难。。。。。。  

    因为这个东西应该靠实验来搞懂。。。或者说，美国佬光讲原理没有用具体的网络来举例说明，于是没有形象认识。。。  

这个老师是不是有口音？  

    还好，比中东的强多了…那群搞IT的以色列人才叫口音。。  

  
July 23, 2009  
  
//如果是照抄pdf，不如直接看  
  
为什么他们读router都是读作rauter，而不是ru:ter阿？我查的字典都是后者。。。  
[http://www.merriam-webster.com/dictionary/router](http://www.merriam-webster.com/dictionary/router)  
1rout·er [](http://www.merriam-webster.com/dictionary/router#)Pronunciation:
      
      ˈrau̇-tər
    
    Function:_noun_ Date:1818
  **:** one that routs: as a**:** a routing plane b**:** a machine with a revolving vertical spindle and cutter for milling out the surface of wood or metal   
  
July 24, 2009  
  
上午是Network Management  
介绍了不少开源工具，不过短期内咱是用不到了  
  
下午是非洲兄弟们介绍建网情况  
NSRC送出手router和switch共4台  
经过搜索  
每台价格大约为18000～30000RMB  
  
PS  
有位黑人兄弟问了一个问题，大致如下：  
Porn websites are illegal in your country, then why don't you block them at the core incoming place but let the college block by themselves?  
I know China has blocked almost everything from the outside.  
  
此时，边上的Cleven问我，is that real?  
  
  
贵国的巨型局域网又被bs了。。。  

