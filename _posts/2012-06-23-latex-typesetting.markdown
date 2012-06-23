---
layout: post
title: Notes on typesetting my thesis with latex
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

<a id="latexenv"></a> <!--just an anchor for internal link-->
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

<a id="pdf14"></a> <!--just an anchor for internal link-->
## Create PDF outputs compatible with Acrobat 5.x or above

The default PDF version of pdflatex output is 1.5 (Acrobat 6.x+). To go back and use PDF 1.4, add this:
<pre><code>\pdfminorversion=4
</code></pre>

Alternatively, there is a package for this issue. Simply put the following line right after the `\documentclass` declaration. Some say that putting this after using other packages leads to errors. I am not sure about that. I am happy with the `\pdfminorversion` one and am not interested in moving the line around to get things broken...
<pre><code>\RequirePackage{pdf14}
</code></pre>

<a id="eps"></a> <!--just an anchor for internal link-->
## Use EPS images with pdflatex

Being able to use PNGs or JPEGs is handy. But when you already have those EPS images, converting them to raster images does not sound good. You may use tools to convert them to PDF images which pdflatex does support. Or you could use the `epstopdf` package.
<pre><code>\usepackage{epstopdf}
</code></pre>

Then it will automatically do the conversion when a EPS image is specified in `\includegraphics{}`.

<a id="tab"></a> <!--just an anchor for internal link-->
## Move table captions from bottom to top

The way people read tables and figures might be different. Some say that table captions should appear before the reader gets to the rows and columns.
<pre><code>\usepackage[tableposition=top]{caption}
</code></pre>

## Change the separator (default is colon) in table caption

The template has a sample table whose caption is "Table #.# some text". With default settings I get "Table #.#: some text". With the `caption` package, change the `labelsep` will do.
<pre><code>\captionsetup[table]{labelsep=period}
</code></pre>

<a id="linespace"></a> <!--just an anchor for internal link-->
## Change line spacing

The template use different line spacings here and there. Normal text use 1.5 line spacing. So I make it the global setting.
<pre><code>\usepackage{setspace}
\onehalfspacing
</code></pre>

When something should be double spacing, I wrap it with
<pre><code>\begin{doublespacing}
\end{doublespacing}
</code></pre>

For table of contents or bibliography, you might want `\singlespacing`.

<a id="parskip"></a> <!--just an anchor for internal link-->
## Get rid of indent for first line
No first-line indent.
<pre><code>\usepackage{parskip}
</code></pre>

## A blank line between paragraphs
The template specifically requite that there should be an empty line between paragraphs. I do not know why. I thought it should be a `padding-bottom` thing after each paragraph. With the `parskip` package, I can set the spacing between paragraphs.
<pre><code>\setlength{\parskip}{18pt}
</code></pre>

The length is chosen by comparing the outputs at actual sizes. Change that for different fonts or font sizes.

<a id="pageno"></a> <!--just an anchor for internal link-->
## Page number at bottom right
Page numbers are by default centered.
<pre><code>\usepackage{fancyhdr}
\fancyhf{} % clear all header and footers
\renewcommand{\headrulewidth}{0pt} % remove the header rule
\rfoot{
	\fancyplain{\minsize\thepage\hspace{1.8em}}
	{\minsize\thepage\hspace{1.8em}}}
\pagestyle{fancyplain}
</code></pre>

`\minsize` is the 10pt specified in the template. (`12pt` is the skip, i.e. distance between lines.)
<pre><code>\newcommand{\minsize}{\fontsize{10pt}{12pt}\selectfont}
</code></pre>

<a id="margin"></a> <!--just an anchor for internal link-->
## Set the page margins
Set margins at edges.
<pre><code>\usepackage[top=1in, left=1.8in, bottom=1.4in, right=1.1in]{geometry}
</code></pre>

For some reason, the spacing is not as semantic as it should be. The `\parskip` set above might be the cause. I'll check for it later. -->

<a id="chap"></a> <!--just an anchor for internal link-->
## Change chapter title format
I personally like text shadows for top level headings on webpages it they are rendered beautifully. But I do not know why this should be the case with headings in my dissertation.
<pre><code>\usepackage{shadowtext}
\shadowoffsetx{1pt}
\shadowoffsety{.7pt}
\usepackage{titlesec}
\makeatletter
\renewcommand{\@makechapterhead}[1]{
	\vspace*{-6pt}
	{\setlength{\parindent}{0pt}\raggedright
	\normalfont \chaptersize
	\shadowtext{\chaptertitlename\ \thechapter \quad\ #1}
	}
\vspace*{22pt}
}
\makeatother
</code></pre>

The `\chaptersize` command is defined as
<pre><code>\newcommand{\chaptersize}{\fontsize{22pt}{28pt}\selectfont\bfseries}
</code></pre>

<a id="headings"></a> <!--just an anchor for internal link-->
## Change section headings format
I used the following to set the font size and spacing of section, subsection, subsubsection titles.
<pre><code>% change fontsize for section/subsection/subsubsection headings
\titleformat{\section}{\normalfont\sectionsize}{\thesection}{1em}{}
\titleformat{\subsection}{\normalfont\subsectionsize}{\thesubsection}{1em}{}
\titleformat{\subsubsection}{\normalfont\subsubsectionsize}{\thesubsection}{1em}{}

% Change spacing for headings. Please ignore the actual numbers.
% They are tweaked by comparing PDF outputs to the Word template. --!
\titlespacing*{\section}{0pt}{-12pt}{6pt}
\titlespacing*{\subsection}{0pt}{-14pt}{6pt}
\titlespacing*{\subsubsection}{0pt}{-16pt}{6pt}
</code></pre>

<a id="bib"></a> <!--just an anchor for internal link-->
## Set the heading format for bibliography
It seems the command I set above does not affect the heading format for bibliography. And I need to change the heading from "Bibliography" to "References". The following chunk of code does this.
<pre><code>\renewcommand*{\bibname}{References}
\makeatletter
\renewenvironment{thebibliography}[1]{
\clearpage
\ifdefined\phantomsection
\phantomsection
\else
\fi
\addcontentsline{toc}{chapter}{\bibname}
\vspace*{-12pt}
\begin{doublespace}
	{\subsectionsize\bfseries \bibname}
\end{doublespace}
\vspace*{6pt}
\onehalfspacing
\@mkboth{\MakeUppercase\bibname}{\MakeUppercase\bibname}%
\list{\@biblabel{\@arabic\c@enumiv}}{
	\settowidth\labelwidth{\@biblabel{#1}}%
	\leftmargin\labelwidth
	\advance\leftmargin\labelsep
	\@openbib@code
	\usecounter{enumiv}%
	\let\p@enumiv\@empty
	\renewcommand\theenumiv{\@arabic\c@enumiv}}%
\sloppy
\clubpenalty4000
\@clubpenalty \clubpenalty
\widowpenalty4000%
\sfcode`\.\@m}{
	\def\@noitemerr
	{\@latex@warning{Empty `thebibliography' environment}}%
	\endlist}
 \makeatother
</code></pre>

<a id="appdix"></a> <!--just an anchor for internal link-->
## And also the heading for Appendix
As I mentioned, all the `vspace`s are set because those values make the output look the same as the template.
<pre><code>\usepackage{appendix}
\makeatletter
\newcommand\appendix@chapter[1]{
	\refstepcounter{chapter}
	\orig@chapter*{
		\vspace*{-72pt}
		\subsectionsize\bfseries Appendix \@Alph\c@chapter: #1
		\vspace*{-36pt}
	}
	\addcontentsline{toc}{chapter}{Appendix \@Alph\c@chapter: #1}
}
\let\orig@chapter\chapter
\g@addto@macro\appendix{\let\chapter\appendix@chapter}
\makeatother
</code></pre>

<a id="toc"></a> <!--just an anchor for internal link-->
## Table of Contents, List of Figures, List of Tables
Formatting the titles and entries.
<pre><code>%%% Set Table of Contents format
\renewcommand\contentsname{Table of Contents}
\usepackage[subfigure]{tocloft}
\renewcommand{\cftbeforechapskip}{0pt}
\renewcommand{\cftbeforetoctitleskip}{6pt}
\renewcommand{\cftaftertoctitleskip}{12pt}
% Set ToC heading size the same as that of Abstract
\renewcommand\cfttoctitlefont{\subsectionsize\bfseries}
\renewcommand\cftchapfont{\tocchapsize\bfseries}
\renewcommand\cftchappresnum{Chapter } % prefix "Chapter " to chapters in ToC
\cftsetindents{chapter}{0em}{5em}      % set amount of indenting
\makeatletter \renewcommand{\@dotsep}{1} \makeatother
\renewcommand{\cftchapdotsep}{\cftdotsep}

\renewcommand{\cftbeforeloftitleskip}{6pt}
\renewcommand{\cftafterloftitleskip}{18pt}
\renewcommand\cftloftitlefont{\subsectionsize\bfseries}
\renewcommand\cftfigpresnum{Figure }  % prefix "Figure " to entries in LoF
\cftsetindents{figure}{0em}{5em}      % set amount of indenting

\renewcommand{\cftbeforelottitleskip}{6pt}
\renewcommand{\cftafterlottitleskip}{18pt}
\renewcommand\cftlottitlefont{\subsectionsize\bfseries}
\renewcommand\cfttabpresnum{Table }	 % prefix "Table " to entries in LoT
\cftsetindents{table}{0em}{5em}      % set amount of indenting
</code></pre>

<a id="bw"></a> <!--just an anchor for internal link-->
## Turnoff code highlighting for print
I am using the `minted` package for code listings. When I wrote my bachelor's thesis, I used `listings`. `minted` is not better or worse. I just want to try something new.

If the PDF is for screen, highlighting code snippets makes sense. For hardcopies, the colored text is even harder to read.
<pre><code>\ifdefined\printmode
\usepackage{minted}
\usemintedstyle{bw}		% turn off code highlighting
\else
% Online copy
\usepackage{minted}
\usemintedstyle{tango}	% turn on code highlighting
</code></pre>

Before this block, comment or uncomment the `printmode` declaration to turn print mode on and off.
<pre><code>% \newcommand{\printmode}{}
</code></pre>

<a id="root"></a> <!--just an anchor for internal link-->
## Specify a root document
I have separate .tex files for each chapter, section and sometimes subsections. Then it is easier to include or exclude some of them for output. In TextMate, I hit ⌘+R to compile the document. But the sections does not have a complete document structure. The processor will stop with errors on that. Specifying a root document tells the tex command which file to process.
<pre><code>%!TEX root = ../thesis.tex
</code></pre>