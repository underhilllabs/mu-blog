--- 
layout: page
title: Emacs Cheatsheet
category: emacs
tags: [notes, emacs]
---

<p><img src="http://farm1.static.flickr.com/130/330223208_508744ea49_m.jpg"  alt="http://farm1.static.flickr.com/130/330223208_508744ea49_m.jpg" />
</p>

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">Emacs help</a></li>
<li><a href="#sec-2">Orgmode</a></li>
<li><a href="#sec-3">Info Navigation</a></li>
<li><a href="#sec-4">Emacs Macros</a></li>
<li><a href="#sec-5">More Emacs Commands</a></li>
<li><a href="#sec-6">Dired Commands</a>
<ul>
<li><a href="#sec-6-1">C-x C-q in Dired mode</a></li>
</ul>
</li>
<li><a href="#sec-7">Emacs and Etags</a></li>
<li><a href="#sec-7-5">Regular Expressions</a></li>
<li><a href="#sec-8">Tramp</a></li>
<li><a href="#sec-9">JDE Keybindings</a></li>
<li><a href="#sec-10">Magit Control</a></li>
<li><a href="#sec-11">Rinari Keybindings</a></li>
<li><a href="#sec-12">Git Stuff</a></li>
<li><a href="#sec-13">Textile</a></li>
<li><a href="#sec-14">wl Keybindings</a></li>
</ul>
</div>
</div>

<div id="outline-container-1" class="outline-2">
<h2 id="sec-1">Emacs help</h2>
<div class="outline-text-2" id="text-1">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-h b</td><td class="left">describe bindings</td></tr>
<tr><td class="left">C-h f</td><td class="left">describe function</td></tr>
<tr><td class="left">C-h v</td><td class="left">describe variable</td></tr>
<tr><td class="left">C-h m</td><td class="left">describe mode</td></tr>
</tbody>
</table>


</div>

</div>

<div id="outline-container-2" class="outline-2">
<h2 id="sec-2">Orgmode</h2>
<div class="outline-text-2" id="text-2">

<p>This list is very miscellanous, see <a href="http://orgmode.org">http://orgmode.org</a>
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">&lt;s TAB</td><td class="left">inserts #+begin_src #+end_src section</td></tr>
<tr><td class="left">&lt;h TAB</td><td class="left">inserts #+begin_html &hellip; #+end_html</td></tr>
<tr><td class="left">C-c .</td><td class="left">insert timestamp</td></tr>
<tr><td class="left">C-c [</td><td class="left">add file to Agenda</td></tr>
<tr><td class="left">C-c ]</td><td class="left">remove file from Agenda</td></tr>
<tr><td class="left">C-c C-e</td><td class="left">Org export.  Brings up menu of options</td></tr>
<tr><td class="left">C-c C-e t</td><td class="left">Insert Template into org doc</td></tr>
<tr><td class="left">C-c C-e b</td><td class="left">Export to html and open page in browser</td></tr>
<tr><td class="left">C-c C-e P</td><td class="left">Export and publish current project</td></tr>
<tr><td class="left">C-c C-e F</td><td class="left">Export and publish current file</td></tr>
<tr><td class="left">C-c C-e l</td><td class="left">Export as LaTex file</td></tr>
<tr><td class="left">C-c C-e p</td><td class="left">Export as LaTex and process pdf</td></tr>
<tr><td class="left">C-c C-e p</td><td class="left">Same as above &hellip; and open pdf</td></tr>
<tr><td class="left">C-c c</td><td class="left">Org-capture</td></tr>
<tr><td class="left">C-c cc</td><td class="left">Capture Calc III assignment</td></tr>
<tr><td class="left">C-c cp</td><td class="left">Capture Probs and Stats HW.</td></tr>
</tbody>
</table>




</div>

</div>

<div id="outline-container-3" class="outline-2">
<h2 id="sec-3">Info Navigation</h2>
<div class="outline-text-2" id="text-3">

<p>Navigating in the Emacs Info Reader
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">l</td><td class="left">back in history</td></tr>
<tr><td class="left">p</td><td class="left">prev node</td></tr>
<tr><td class="left">n</td><td class="left">next node</td></tr>
<tr><td class="left">u</td><td class="left">up a level</td></tr>
<tr><td class="left">&lt;spc&gt;</td><td class="left">scroll page  then first sub-node at end of node</td></tr>
</tbody>
</table>



</div>

</div>

<div id="outline-container-4" class="outline-2">
<h2 id="sec-4">Emacs Macros</h2>
<div class="outline-text-2" id="text-4">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-x (</td><td class="left">start keyboard macro</td></tr>
<tr><td class="left">C-x )</td><td class="left">end keyboard macro</td></tr>
<tr><td class="left">C-x e</td><td class="left">repeat last macro</td></tr>
<tr><td class="left">M-n C-x e</td><td class="left">repeat last macro n times</td></tr>
<tr><td class="left">M-x</td><td class="left">name-last-kbd-macro</td></tr>
</tbody>
</table>


</div>

</div>

<div id="outline-container-5" class="outline-2">
<h2 id="sec-5">More Emacs Commands</h2>
<div class="outline-text-2" id="text-5">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-M ;</td><td class="left">comment-region</td></tr>
<tr><td class="left">C-u C-M ;</td><td class="left">un-comment-region</td></tr>
<tr><td class="left">C-M \</td><td class="left">indent-region</td></tr>
<tr><td class="left">M-PgUp</td><td class="left">scroll other window up</td></tr>
<tr><td class="left">M-PgDn</td><td class="left">scroll other window down</td></tr>
<tr><td class="left">M-%</td><td class="left">queery-replace</td></tr>
<tr><td class="left">C-x f</td><td class="left">set-column-fill</td></tr>
<tr><td class="left">M-q</td><td class="left">fill-paragraph</td></tr>
</tbody>
</table>


</div>

</div>

<div id="outline-container-6" class="outline-2">
<h2 id="sec-6">Dired Commands</h2>
<div class="outline-text-2" id="text-6">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">m</td><td class="left">mark file</td></tr>
<tr><td class="left">u</td><td class="left">unmark file</td></tr>
<tr><td class="left">d</td><td class="left">mark file for deletion</td></tr>
<tr><td class="left">x</td><td class="left">execute deletions</td></tr>
<tr><td class="left">Q</td><td class="left">regexp search-replace in marked files</td></tr>
<tr><td class="left">R</td><td class="left">rename marked files</td></tr>
<tr><td class="left">Z</td><td class="left">compress file</td></tr>
<tr><td class="left">~</td><td class="left">mark all backup files for deletion</td></tr>
<tr><td class="left">#</td><td class="left">mark all #'d files for deletion</td></tr>
<tr><td class="left">O</td><td class="left">change owner</td></tr>
<tr><td class="left">s</td><td class="left">toggle sorting by name/date</td></tr>
</tbody>
</table>



</div>

<div id="outline-container-6-1" class="outline-3">
<h3 id="sec-6-1">C-x C-q in Dired mode</h3>
<div class="outline-text-3" id="text-6-1">

<p>also C-x C-q allows you to edit the dired directory as a file, and use
macros or string-replace to change lots of file names at once. Use C-c
C-c to save changes.
</p>
</div>
</div>

</div>

<div id="outline-container-7" class="outline-2">
<h2 id="sec-7">Emacs and Etags</h2>
<div class="outline-text-2" id="text-7">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">M-.</td><td class="left">go to function</td></tr>
<tr><td class="left">M-*</td><td class="left">after M-. go back to where you were.</td></tr>
<tr><td class="left">M-x visit-tags-table</td><td class="left">add TAGS file for source</td></tr>
<tr><td class="left">generate etags</td><td class="left">find . -name '*.java'  xargs etags</td></tr>
</tbody>
</table>



</div>

</div>

<div id="outline-container-7-5" class="outline-2">
<h2 id="sec-7-5">Regular Expressions</h2>
<div class="outline-text-2" id="text-8">
<h3>Match a new line in the minibuffer</h3>
match a newline, \n,  with C-j.
In the minibuffer, you have to type:
<pre>
C-q C-j
</pre>
The C-q quotes the following sequence C-j.

<h3>Match Parentheses</h3>
with ( or ).  In emacs, it is reversed, use ( to match paren, and \( and \) to open and close a group.

<h3>backslashes</h3>
<li>use \\ to quote a character in elisp code
<li>use a single backslash to quote in the minibuffer
</div>
</div>

<div id="outline-container-8" class="outline-2">
<h2 id="sec-8">Tramp</h2>
<div class="outline-text-2" id="text-8">

<p>with Tramp you use the same "write-file" command with keybinding <b>C-x C-w</b> and then give a remote ssh path as the file path
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">save file to server</td><td class="left">C-x C-w</td></tr>
<tr><td class="left">use ssh path to save file remotely</td><td class="left">/ssh:username@yourserver.org:path/to/file</td></tr>
</tbody>
</table>



</div>

</div>

<div id="outline-container-9" class="outline-2">
<h2 id="sec-9">JDE Keybindings</h2>
<div class="outline-text-2" id="text-9">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-c C-v z</td><td class="left">add any needed imports</td></tr>
<tr><td class="left">C-c C-v j</td><td class="left">add javadoc comment for class or method</td></tr>
<tr><td class="left">C-c C-v C-c</td><td class="left">compile</td></tr>
<tr><td class="left">C-c C-v C-r</td><td class="left">run app</td></tr>
<tr><td class="left">C-c C-v C-d</td><td class="left">debug app</td></tr>
</tbody>
</table>



</div>

</div>

<div id="outline-container-10" class="outline-2">
<h2 id="sec-10">Magit Control</h2>
<div class="outline-text-2" id="text-10">

<p>Magit is an Emacs Mode for interacting with Git Repositories
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-x g</td><td class="left">git status</td></tr>
<tr><td class="left">C-c C-c</td><td class="left">when in commit log: commit changes</td></tr>
<tr><td class="left"></td><td class="left">**Following commands work in git status buffer**</td></tr>
<tr><td class="left">s</td><td class="left">stage file at point</td></tr>
<tr><td class="left">u</td><td class="left">unstage file at point</td></tr>
<tr><td class="left">c</td><td class="left">open commit log</td></tr>
<tr><td class="left">P</td><td class="left">push master origin untracked file section</td></tr>
<tr><td class="left">i</td><td class="left">add file to ignore</td></tr>
<tr><td class="left">I</td><td class="left">add file to git/info/exclude</td></tr>
<tr><td class="left">k</td><td class="left">in unstaged: resets to head. ie discards changes</td></tr>
<tr><td class="left">k</td><td class="left">in untracked: deletes file</td></tr>
<tr><td class="left">&lt;tab&gt;</td><td class="left">in staged/unstaged: shows/hides diff of changes</td></tr>
<tr><td class="left">C-u P</td><td class="left">push master to ?: prompts for remote to push changes to</td></tr>
<tr><td class="left">l</td><td class="left">git log: hit &lt;enter&gt; on a commit to see changes</td></tr>
<tr><td class="left">=</td><td class="left">diff current with commit at point</td></tr>
<tr><td class="left">t</td><td class="left">create lightweight tag</td></tr>
<tr><td class="left">T</td><td class="left">create annotated tag</td></tr>
<tr><td class="left">x</td><td class="left">prompts for revision resets HEAD to it.</td></tr>
</tbody>
</table>


</div>

</div>

<div id="outline-container-11" class="outline-2">
<h2 id="sec-11">Rinari Keybindings</h2>
<div class="outline-text-2" id="text-11">

<p>Rinari is an Emacs Mode for Ruby on Rails projects.
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-c ; f c,</td><td class="left">rinari-find-controller</td></tr>
<tr><td class="left">C-c ; f e,</td><td class="left">rinari-find-environment</td></tr>
<tr><td class="left">C-c ; f f,</td><td class="left">rinari-find-file-in-project</td></tr>
<tr><td class="left">C-c ; f h,</td><td class="left">rinari-find-helper</td></tr>
<tr><td class="left">C-c ; f i,</td><td class="left">rinari-find-migration</td></tr>
<tr><td class="left">C-c ; f j,</td><td class="left">rinari-find-javascript</td></tr>
<tr><td class="left">C-c ; f l,</td><td class="left">rinari-find-plugin</td></tr>
<tr><td class="left">C-c ; f m,</td><td class="left">rinari-find-model</td></tr>
<tr><td class="left">C-c ; f n,</td><td class="left">rinari-find-configuration</td></tr>
<tr><td class="left">C-c ; f o,</td><td class="left">rinari-find-log</td></tr>
<tr><td class="left">C-c ; f p,</td><td class="left">rinari-find-public</td></tr>
<tr><td class="left">C-c ; f s,</td><td class="left">rinari-find-script</td></tr>
<tr><td class="left">C-c ; f t,</td><td class="left">rinari-find-test</td></tr>
<tr><td class="left">C-c ; f v,</td><td class="left">rinari-find-view</td></tr>
<tr><td class="left">C-c ; f w,</td><td class="left">rinari-find-worker</td></tr>
<tr><td class="left">C-c ; f x,</td><td class="left">rinari-find-fixture</td></tr>
<tr><td class="left">C-c ; f y,</td><td class="left">rinari-find-stylesheet</td></tr>
</tbody>
</table>




</div>

</div>

<div id="outline-container-12" class="outline-2">
<h2 id="sec-12">Git Stuff</h2>
<div class="outline-text-2" id="text-12">

<table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">git status</td><td class="left">==&gt; see status files</td></tr>
<tr><td class="left">git add init.el</td><td class="left">==&gt; add init.el to commit change log</td></tr>
<tr><td class="left">git commit</td><td class="left">==&gt; commit changes</td></tr>
<tr><td class="left">git remote add origin</td><td class="left">git remote add git@github.com:underhilllabs/[..].git</td></tr>
<tr><td class="left">git push origin master</td><td class="left">==&gt; push committed changes to git repository</td></tr>
</tbody>
</table>



</div>

</div>

<div id="outline-container-13" class="outline-2">
<h2 id="sec-13">Textile</h2>
<div class="outline-text-2" id="text-13">

<p>Textile is a markup language.  I use org-mode markup more these days. 
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">h2.</td><td class="left">headline</td></tr>
<tr><td class="left">!&gt;bossy.jpg!</td><td class="left">here is a picture of Bossy that will use align=right</td></tr>
<tr><td class="left">bq.</td><td class="left">a block quote</td></tr>
<tr><td class="left">&lt;pre&gt;&lt;code&gt;</td><td class="left">for long code blocks use html tags</td></tr>
</tbody>
</table>


</div>

</div>

<div id="outline-container-14" class="outline-2">
<h2 id="sec-14">wl Keybindings</h2>
<div class="outline-text-2" id="text-14">

<p>Wanderlist is an Emacs Mode for Reading Email.
</p><table class="table table-bordered table-striped" border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">a or A</td><td class="left">replay to email under point</td></tr>
<tr><td class="left">d</td><td class="left">mark email for deletion</td></tr>
<tr><td class="left">x</td><td class="left">execute commands</td></tr>
</tbody>
</table>

<hr/>

</div>
</div>
</div>

<div id="postamble">
<div class=footer><p><a href="http://orgmode.org"><img src="/sites/default/files/org-mode.png" alt="Made with Org Mode"/></a></p></div>
