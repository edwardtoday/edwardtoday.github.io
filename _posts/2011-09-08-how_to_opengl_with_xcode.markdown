---
date: '2011-09-08 16:33:18'
layout: post
slug: how_to_opengl_with_xcode
status: publish
title: 'How to: OpenGL with Xcode'
wordpress_id: '38165'
categories:
- Life at Hong Kong
- Programming
tags:
- App
- App Store
- Apple
- application
- GIT
- iPhone
- Mac
- MacBook
- OpenGL
- Product
- Programming
- RAM
- web
- Work
- Xcode
---

I selected an image processing course this semester, the labs of which are based on OpenGL.

Programming environment in the computer lab is cygwin & gcc/g++ & opengl & glut under Windows OS.

If I were under some linux distribution, it would be even easier to get everything work with some apt-get's. That would be as free of charge as the cygwin solution.

I am currently using a 2007 MacBook with Mac OS Lion. With the following steps, I have got an OpenGL programming environment with Xcode.


# Get Xcode


Start the Mac App Store by clicking the top left  icon and then click "App Store…".


![Start Mac App Store](http://qingpei.me/wordpress/wp-content/uploads/2011/09/macappstore.png)




Search for "Xcode".


![Search Xcode](http://qingpei.me/wordpress/wp-content/uploads/2011/09/searchxcode.png)The first hit should be the Xcode.

![Install Xcode](http://qingpei.me/wordpress/wp-content/uploads/2011/09/xcodeinstall.png)

If you are using Lion, it should be free. Click "INSTALL" and after the download finishes, there should be a "Install Xcode" in your Application folder. Install it with the default settings should be fine.


# Create a New Xcode Project




Start Xcode and a welcome screen will pop up.




![Welcome to Xcode](http://qingpei.me/wordpress/wp-content/uploads/2011/09/welcometoxcode.png)




Click "Create a new Xcode project".




![Empty Mac OS X Project](http://qingpei.me/wordpress/wp-content/uploads/2011/09/emptyproject.png)




Select "Mac OS X" -> "Other" -> "Empty" to create an empty project to start with.




Click "Next", enter the product name, "OpenGL001" for example.




Click "Next" again and choose where to save the project. Note that we are selecting the parent folder of the project, i.e. you choose Desktop, the project will be saved in Desktop/OpenGL001/. A source control option is provided here. If you know what git is, you know whether or not you are using it. Otherwise, unchecking it would be fine and won't have any negative effect.




![Git Source Control](http://qingpei.me/wordpress/wp-content/uploads/2011/09/sourcecontrol.png)




Now we have an empty project.





# Add a Target




Click ![Add Target](http://qingpei.me/wordpress/wp-content/uploads/2011/09/addtarget.png) button to add a target. What is a "target"? When you create an application, you may expecting it to be run on different platforms, iPhones, Macs, PCs or Linux hosts and so on. They may need different tools/configurations to build, and this is the moment that we need to define what platform we need our OpenGL app to be running on.




Choose "Mac OS X" -> "Cocoa Application". (Command Line Tool works as well but adding frameworks is not as convinient.)




![Cocoa Application as target](http://qingpei.me/wordpress/wp-content/uploads/2011/09/cocoaapplication.png)




Click "Next". Fill the Product Name, Company Identifier and some other settings. If you are about to submit your application to the App Store, these information are critical. If not, it does not matter that much. Anyway, you can modify what you typed here later whenever you want to.




![Fill the target information](http://qingpei.me/wordpress/wp-content/uploads/2011/09/targetinfo.png)




Click "Finish" and a number of files will be automatically added to our project.




![Files added to project](http://qingpei.me/wordpress/wp-content/uploads/2011/09/projectview.png)




At this point, the app is actually runnable. By clicking the "Run" button, after compiling and linking, the app should be running and it is nothing but an empty window.




![Empty window](http://qingpei.me/wordpress/wp-content/uploads/2011/09/cocoawindow.png)





# Add Source Code to the Project




Although there has been a GUI application running so far, it has nothing to do with OpenGL but based on NSWindow from Apple's framework. The next steps are to remove whatever we don't need and add OpenGL and GLUT to our app.




Delete files that we do not need by selecting them (hold  to select multiple files), right click and "delete".




![Delete unnecessary files](http://qingpei.me/wordpress/wp-content/uploads/2011/09/deletefiles.png)




You have the choice to just keep those files out of the project or delete them and move the files to Trash. The safest way is "Remove References Only" and delete the actual files manually later when you are sure you have not delete anything you should not.




![Delete files dialog](http://qingpei.me/wordpress/wp-content/uploads/2011/09/deletedialog.png)




Then add the source code that uses OpenGL to the project. Either right click the project and select "Add Files to ...", or drag the files from a Finder window to the project. Use the default settings when Xcode ask you what to do with the added files.




![Add files to project](http://qingpei.me/wordpress/wp-content/uploads/2011/09/addfiles.png)




Here I have added a main.cpp to the project. As the code is from the professor and I do not have the copyright, a Gaussian blur is quite helpful.




![Main.cpp](http://qingpei.me/wordpress/wp-content/uploads/2011/09/main.cpp_.png)




Note the first 3 lines. It might be:




#include <gl/gl.h>




#include <gl/glu.h>




#include <glut/glut.h>




when you searched for OpenGL samples on the web. Change them to:




#include <OpenGL/gl.h>




#include <OpenGL/glu.h>




#include <GLUT/GLUT.h>


Or you would encounter compile errors later since Xcode cannot find those files.


# Use OpenGL and GLUT Frameworks


If you compile right now, there would be errors telling you that files including gl.h are missing. This is solved by adding frameworks to our project. Click the Project in the leftmost colomn to view the project "Summary" tab. In the middle, there is "Linked Frameworks and Libraries".

![Project Settings](http://qingpei.me/wordpress/wp-content/uploads/2011/09/projectsettings.png)

Click the ![+ button](http://qingpei.me/wordpress/wp-content/uploads/2011/09/+.png) button to add frameworks we need. In this case, we are adding OpenGL and GLUT.

Search for "opengl", select it and click "Add".

![Add OpenGL framework](http://qingpei.me/wordpress/wp-content/uploads/2011/09/addopengl.png)

Add GLUT the same way.

![Frameworks added](http://qingpei.me/wordpress/wp-content/uploads/2011/09/frameworkadded.png)

They should appear both in the "Linked Frameworks and Libraries" box and in the left column as part of the project.


# Hello world!


Click "Run" again and a window pops up with its content drawn with OpenGL. What you see in the window depends on what is in that main.cpp file.

![OpenGL Window](http://qingpei.me/wordpress/wp-content/uploads/2011/09/openglwindow.png)


# Afterword


With the app successfully built and run, the next steps are all about applying what feel like drawing onto the window.

Being able to use tools like Xcode only tells us apart from other animals. It is the work done with those tools that tell us apart from other human beings.
