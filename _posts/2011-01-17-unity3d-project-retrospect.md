---
layout: post
title: 'Unity3D Project Retrospect'
date: 2011-01-17 23:02
comments: true
category: 
tagline: 
tags:
---
    

Table of Contents

  * 1 Version control 

  * 2 Script performance tweak 

  * 3 Graphics performance tweak 

    * 3.1 Shader 

    * 3.2 Draw call 

    * 3.3 3D models 

    * 3.4 Textures/Materials 

    * 3.5 Particle systems 

    * 3.6 OpenGL ES 1.1/2.0 

    * 3.7 Shadows 

  * 4 Memory consumption tweak 

  * 5 Cross-platform issues 

    * 5.1 Textures 

    * 5.2 Models 

    * 5.3 Videos 

  * 6 Remaining issues 

    * 6.1 iOS4 multi-tasking support 

    * 6.2 Movie playback on iOS devices 

## 1 Version control

The Unity scene file is binary. Artists, designers and programmers all need to modify the scene. And there was no way to merge our local modifications. This leads to a large amount of time waste that one needs to redo all the modifications after updating the working copy and everyone has to do this every time there is a change in the scene.

Asset server may help, but we don't have it.

There is also an open source project that converts Unity scene file to plaintext. But cautions are there to inform that it is not approved by Unity and may fail to work.

## 2 Script performance tweak

Though scripts are not the performance bottle neck, there are something we can do to make it even faster.

  * Calculation  

    * Replace / with * if possible.

    * Use less random/sin/cos/…

  * Function call  

    * Get the script component and call the function directly. According to Unity documentation, this is 100x faster than sending a message to the game object to call that function. 

  * Cache frequently used variables  

    * Cache positions, rotations or other properties of frequently accessed object to avoid time loss accessing these values. 

  * Avoid finding game object  

    * If there is a need to find some object, find it once during initializing. 

  * Use triggers  

    * Do not manually check something every frame is it is possible to use a trigger function. 

## 3 Graphics performance tweak

Graphics is the bottleneck of our project. We have spent much time on it and finally have a game running smoothly both on a PC and on an iPad.

### 3.1 Shader

  * Mobile vertex colored shader is 2x the speed of diffuse shader on iOS devices.

  * Mobile background shader is ~3x the speed of default shader for the skybox. 

### 3.2 Draw call

  * Our first demo is very slow on iPad. It has about 340 draw calls per frame. The final demo has only 70~130.

  * The more lights, the more draw calls.

  * The more textures, the more draw calls.

  * The more objects, the more draw calls. 

### 3.3 3D models

  * It is possible to get 60 frames per second on an iPad with 30~40k triangles to render per frame.

  * Combine small models together to cut the total number of objects.

  * Cut large models into pieces to avoid rendering the whole object while only a small portion of it is visible. 

### 3.4 Textures/Materials

  * Letting models which is placed in the scene near each other share a common texture saves draw calls. 

### 3.5 Particle systems

  * This is also a critical performance issue. As in the test, a water fountain with ~400 particles with a default shader drained iPad's GPU to get 4~5 frames per second.

  * To obtain 30 frames per second, keep the number of particles per frame under 50 and use simple shaders for the particles. 

### 3.6 OpenGL ES 1.1/2.0

There is an option to turn OpenGL ES 2.0 on and off after exporting the Unity project to an Xcode project.

  * OpenGL ES 1.1 does not support shader model 2.0 and therefore does not support the reflection or refraction of the water, dynamic shadows, etc.

  * OpenGL ES 2.0 support all the graphical effects we used in our game. The rendered images are great but the performance is far from satisfaction.

Our game runs at 23~35 frames per second with OpenGL ES 1.1. With OpenGL ES 2.0, the frame rate drops to 5~9 frames per second.

### 3.7 Shadows

  * Dynamic lights/shadows should be turned off on mobile devices for acceptable performance. 

## 4 Memory consumption tweak

Our final project which runs smoothly on a PC, without specific optimizations, crashes almost every time it is run on an iPad. GDB shows that the application has received low memory warning.

The following changes are made to save memory:

  * Compress large textures.  

    * Converting images to lower resolution. Background images are usually large in size. We have different images for menu and loading screen. They may have different versions for iPhone, iPad and PC. These files add up to about 10MB. 50~70% space can be saved after conversion.

    * Converting textures to lower color depth. Some UI textures uses very few colors but have 32-bit color depth. Using 16-bit color for these textures may not affect the quality much but save half the space.

  * Compress audio files.  

    * Background music are compressed to 64kbps mpeg audio from wav format.

    * SFX clips are compressed to 32kbps mpeg audio from wav format.

    * Force the audio to be mono as iPhone speakers are mono.

These settings save as much as about 10MB memory space.

Further profiling shows that if the game asked for more than 35MB memory, it would possibly crash on an iPad. After the tweaks, our game needs 7MB in the main menu and 29MB in the game.

## 5 Cross-platform issues

### 5.1 Textures

  * Use TGA, not DDS. When converting a project to iOS platform, DDS files cannot be successfully imported. 

  * Only power-of-2 sized texture can use the PVRTC compression for iOS devices. Other aspect rations may lead to unwanted rendering results. Do not use compression on those textures. 

### 5.2 Models

  * Use FBX, not MAX. iOS apps can only be compiled on a Mac. And Unity Mac version does not support MAX files. 

### 5.3 Videos

  * Use M4V files with H.264 codec. Unity uses QuickTime to play/import videos. Unity iPhone application calls the system player to play videos.

Videos should be places in "Assets/Streaming Assets" folder to be accessible on an iOS device.

## 6 Remaining issues

### 6.1 iOS4 multi-tasking support

Unity 3 does not fully support the multi-tasking function of iOS4. There are problems suspending/resuming the game.

### 6.2 Movie playback on iOS devices

To play a movie, iOS devices pause the game, call the system media player to open and play the movie file, return to the game and resume it. As we do not have control over the execution order, the last frame rendered before movie playback would appear again after playback for a short while until the game is resumed and the next frame is rendered and shown on the display.

Author: qingpei

Date: 2011-01-07 15:30:00

HTML generated by org-mode 6.33x in emacs 23

