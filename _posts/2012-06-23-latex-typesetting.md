---
layout: post
title: 'Notes on typesetting my thesis with latex'
date: 2012-06-23 22:36
comments: true
category: programming
tagline: 
tags: [tex]
---
    

For my MSc dissertation, the official template is a Word document. For quite a long time, I have not used Word if I am the only one editing that document.

So many choices are out there. I personally use the following combinations for text editing:

* **Plaintext w/o [markdown](http://daringfireball.net/projects/markdown/) syntax** for notes, assignments without format specs, drafts for long documents and the source of current page you are viewing
* **Emacs [org-mode](http://orgmode.org/)** for documents which I have created earlier with that. E.g., a log of my expenses, some notes on lectures or weekly seminars. (I used to keep my TODO list in org-mode. Now I am using [doit.im](http://doit.im).)
* **Google Docs** for collaborating with others.
* **LaTeX** for serious things like reports or papers.

Writing with latex is usually painless. It is even more convenient when there are tools like [pandoc](http://johnmacfarlane.net/pandoc/) which help convert my markdown drafts to latex articles. (That's how I use pandoc. It can do far more than that. Org-mode has latex export functionally as well.) However, when there's a "Word template" and the submitted electronic/printed copy must follow those requirements, you'd better pray there's an existing latex class that does all the nasty format adjustments. Unfortunately, I found nothing. No such classes for any kind of documents for HKPU. (There is a Beamer theme by Xiaofeng Qu. I saw him using it in our weekly seminar and then found it at [GitHub](http://github.com/quxiaofeng/PolyU_Beamer_Theme).)

I started with [puthesis](http://engineering.purdue.edu/~mark/puthesis/) class and changed whatever I find different from the official Word template. There are still some minor differences. (If not, what's the point of using late….) I'll leave this to the department general office to judge whether it is acceptable and make further changes to fulfill the requirements. If it is accepted, I'll share this document class on GitHub.

Various packages are used, if you are new to latex, read [the tex environment part](#latexenv) first for setting up a latex environment that is fully automatic.

Most of the changes are straightforward. Just search the need in natural language, e.g. "how to change chapter heading font size" and you get an answer. Some require a more recursive searching process. You look for a specific setting. Someone replies with an keyword and left. Follow that keyword and you may find a more detailed description.

<a id="latexenv"></a>
# The latex environment that works for me
There are various tex distributions. I have the following setup for my computers.

## Mac

[MacTeX](http://tug.org/mactex/).

If some command line tools are missing, I try [Homebrew](http://mxcl.github.com/homebrew/) first.

I use [TextMate](http://macromates.com/) at the moment. Sometimes I use [Aquamacs](http://aquamacs.org/). I used to use [TeXShop](http://pages.uoregon.edu/koch/texshop/).

For PDF preview, the built-in Preview.app works. If you want something else, [Skim](http://skim-app.sourceforge.net/) might be a good one.

## Windows

There are times that I might want to check whether everything works under Windows.

Then I use [MiKTeX Portable](http://miktex.org/portable/about). The basic install takes much less storage than the greedy MacTeX. If a package is required, it will download and install automatically in the background. I am using the portable version because I have it synced via Dropbox. When I need a tex environment on someone else's computer, I can simply download the folder from dropbox and start using it.

The only thing that requires manual setup for this post is the `pygmentize` command for `minted` highlighting. No big deal, use `listings` instead. Or, install Python, `easy_install` and `Pygment`, configure the `PATH` and `minted` will work.

# HOWTOs

Shortcuts

* [PDF 1.4, Acrobat 5.x Compatibility](#pdf14)
* [Include EPS image](#eps)
* [Table caption position and separator](#tab)
* [Set line spacing](#linespace)
* [Remove first-line indentation, modify after paragraph skip](#parskip)
* [Page number position](#pageno)
* [Set page margins](#margin)
* [Format chapter headings, text shadow](#chap)
* [Format section, subsection, etc. headings](#headings)
* [Format Bibliography heading](#bib)
* [Format Appendix heading](#appdix)
* [Format Table of Contents, List of Figures, List of Tables](#toc)
* [Turn on/off code highlighting](#bw)
* [Specify a TeX root document](#root)

<a id="pdf14"></a>
## Create PDF outputs compatible with Acrobat 5.x or above

The default PDF version of pdflatex output is 1.5 (Acrobat 6.x+). To go back and use PDF 1.4, add this:

<script src="https://gist.github.com/edwardtoday/5143689.js"></script>

Alternatively, there is a package for this issue. Simply put the following line right after the `\documentclass` declaration. Some say that putting this after using other packages leads to errors. I am not sure about that. I am happy with the `\pdfminorversion` one and am not interested in moving the line around to get things broken...

<script src="https://gist.github.com/edwardtoday/5143690.js"></script>

<a id="eps"></a>
## Use EPS images with pdflatex

Being able to use PNGs or JPEGs is handy. But when you already have those EPS images, converting them to raster images does not sound good. You may use tools to convert them to PDF images which pdflatex does support. Or you could use the `epstopdf` package.

<script src="https://gist.github.com/edwardtoday/5143694.js"></script>

Then it will automatically do the conversion when a EPS image is specified in `\includegraphics{}`.

<a id="tab"></a>
## Move table captions from bottom to top

The way people read tables and figures might be different. Some say that table captions should appear before the reader gets to the rows and columns.

<script src="https://gist.github.com/edwardtoday/5143697.js"></script>

## Change the separator (default is colon) in table caption

The template has a sample table whose caption is "Table #.# some text". With default settings I get "Table #.#: some text". With the `caption` package, change the `labelsep` will do.

<script src="https://gist.github.com/edwardtoday/5143705.js"></script>

<a id="linespace"></a>
## Change line spacing

The template use different line spacings here and there. Normal text use 1.5 line spacing. So I make it the global setting.

<script src="https://gist.github.com/edwardtoday/5143712.js"></script>

When something should be double spacing, I wrap it with

<script src="https://gist.github.com/edwardtoday/5143714.js"></script>

For table of contents or bibliography, you might want `\singlespacing`.

<a id="parskip"></a>
## Get rid of indent for first line
No first-line indent.

<script src="https://gist.github.com/edwardtoday/5143717.js"></script>

## A blank line between paragraphs
The template specifically requite that there should be an empty line between paragraphs. I do not know why. I thought it should be a `padding-bottom` thing after each paragraph. With the `parskip` package, I can set the spacing between paragraphs.

<script src="https://gist.github.com/edwardtoday/5143720.js"></script>

The length is chosen by comparing the outputs at actual sizes. Change that for different fonts or font sizes.

<a id="pageno"></a>
## Page number at bottom right
Page numbers are by default centered.

<script src="https://gist.github.com/edwardtoday/5143722.js"></script>

`\minsize` is the 10pt specified in the template. (`12pt` is the skip, i.e. distance between lines.)

<script src<script src="https://gist.github.com/edwardtoday/5143725.js"></script>ipt>

<a id="margin"></a><script src="https://gist.github.com/edwardtoday/5143725.js"></script>
## Set the page margins
Set margins at edges.

<script src="https://gist.github.com/edwardtoday/5143728.js"></script>

For some reason, the spacing is not as semantic as it should be. The `\parskip` set above might be the cause. I'll check for it later.

<a id="chap"></a>
## Change chapter title format
I personally like text shadows for top level headings on webpages it they are rendered beautifully. But I do not know why this should be the case with headings in my dissertation.

<script src="https://gist.github.com/edwardtoday/5143737.js"></script>

The `\chaptersize` command is defined as

<script src="https://gist.github.com/edwardtoday/5143741.js"></script>

<a id="headings"></a>
## Change section headings format
I used the following to set the font size and spacing of section, subsection, subsubsection titles.

<script src="https://gist.github.com/edwardtoday/5143744.js"></script>

<a id="bib"></a>
## Set the heading format for bibliography
It seems the command I set above does not affect the heading format for bibliography. And I need to change the heading from "Bibliography" to "References". The following chunk of code does this.

<script src="https://gist.github.com/edwardtoday/5143749.js"></script>

<a id="appdix"></a>
## And also the heading for Appendix
As I mentioned, all the `vspace`s are set because those values make the output look the same as the template.

<script src="https://gist.github.com/edwardtoday/5143753.js"></script>

<a id="toc"></a>
## Table of Contents, List of Figures, List of Tables
Formatting the titles and entries.

<script src="https://gist.github.com/edwardtoday/5143755.js"></script>

<a id="bw"></a>
## Turnoff code highlighting for print
I am using the `minted` package for code listings. When I wrote my bachelor's thesis, I used `listings`. `minted` is not better or worse. I just want to try something new.

If the PDF is for screen, highlighting code snippets makes sense. For hardcopies, the colored text is even harder to read.

<script src="https://gist.github.com/edwardtoday/5143757.js"></script>

Before this block, comment or uncomment the `printmode` declaration to turn print mode on and off.

<script src="https://gist.github.com/edwardtoday/5143760.js"></script>

<a id="root"></a>
## Specify a root document
I have separate .tex files for each chapter, section and sometimes subsections. Then it is easier to include or exclude some of them for output. In TextMate, I hit ⌘+R to compile the document. But the sections does not have a complete document structure. The processor will stop with errors on that. Specifying a root document tells the tex command which file to process.

<script src="https://gist.github.com/edwardtoday/5143762.js"></script>
