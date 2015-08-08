---
layout: post
title: Vim Notes
tags: vim
category: vim
---

!["Why are we hiding from the police, Daddy? Because we use vim. Vim comic"](/img/hide_vi.jpg)

### Vi Commands


<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides" class="table table-bordered table-striped">
  <caption></caption>
  <colgroup><col class="left" /><col class="left" />
  </colgroup>
  <thead>
  <tr><th scope="col" class="left">vi key combo</th><th scope="col" class="left">command</th></tr>
  </thead>
  <tbody>
  <tr><td class="left">:q!</td><td class="left">quit without saving</td></tr>
  <tr><td class="left">:wq</td><td class="left">write and quit</td></tr>
  <tr><td class="left">:q</td><td class="left">quit</td></tr>
  <tr><td class="left">:%s/oldword/newword/g</td><td class="left">substitute all oldword occurences with newword in entire file</td></tr>
  <tr><td class="left">:ls</td><td class="left">list buffers</td></tr>
  <tr><td class="left">:b1</td><td class="left">switch to buffer 1</td></tr>
  <tr><td class="left">:bn</td><td class="left">switch to buffer n</td></tr>
  <tr><td class="left">:vs</td><td class="left">vertically split window (create side by side windows)</td></tr>
  </tbody>
  <tbody>
  <tr><td class="left">dw</td><td class="left">delete word</td></tr>
  <tr><td class="left">d$</td><td class="left">delete to end of line</td></tr>
  <tr><td class="left">dd</td><td class="left">delete current line</td></tr>
  <tr><td class="left">.</td><td class="left">repeat last change</td></tr>
  <tr><td class="left">yy</td><td class="left">copy, yank line into buffer</td></tr>
  <tr><td class="left">p</td><td class="left">paste the line in buffer after cursor position</td></tr>
  <tr><td class="left">cw</td><td class="left">change word</td></tr>
  <tr><td class="left">u</td><td class="left">undo!</td></tr>
  <tr><td class="left">i</td><td class="left">insert mode</td></tr>
  <tr><td class="left"><Esc&gt;</td><td class="left">escape, exit insert mode</td></tr>
  <tr><td class="left">/VirtualHost</td><td class="left">search file for phrase "VirtualHost"</td></tr>
  <tr><td class="left">n</td><td class="left">move to next occurence of search phrase</td></tr>
  <tr><td class="left">100G</td><td class="left">move to 100th line</td></tr>
  <tr><td class="left">1G</td><td class="left">move to first line</td></tr>
  <tr><td class="left">G</td><td class="left">move to last line</td></tr>
  </tbody>
</table>

### A list of the most common g commands

{:class .table .table-bordered .table-striped}
| key combo| command|
|----------|--------|
| gf | Go to file under cursor |
| gv | Go to last visual selection (and reselect) |
| gi | Go to last inserted text |
| g; | Go to prev change in changelist |
| g, | Go to next change in changelist |
| gD | Go to definition of word under cursor in current file|
| gU | uppercase |
| gu | lowercase |

### more vi cheatsheets

<a href="http://www.washington.edu/computing/unix/viqr.html">http://www.washington.edu/computing/unix/viqr.html</a>

<a href="http://www.lagmonster.org/docs/vi.html">http://www.lagmonster.org/docs/vi.html</a>

### add to .screenrc to get Color Schemes working

```bash
attrcolor b ".I"
termcapinfo xterm 'Co#256:AB=\E[48;5;%dm:AF=\E[38;5;%dm'
defbce "on"
term screen-256color-bce
```

### .vimrc

```vim
" Colors!!
set t_Co=256

" color theme
colors elflord

set showmode "show current mode down the bottom

"Setting the status line...

set statusline=%f       "tail of the filename

"display a warning if the file format isn't Unix
set statusline+=%#warningmsg#
set statusline+=%{&amp;ff!='unix'?'['.&amp;ff.']':''}
set statusline+=%*

"display a warning if file encoding isn't UTf-8
set statusline+=%#warningmsg#
set statusline+=%{(&amp;fenc!='utf-8'&amp;&amp;&amp;fenc!='')?'['.&amp;fenc.']':''}
set statusline+=%*

set statusline+=%h      "help file flag
set statusline+=%y      "filetype
set statusline+=%r      "read only flag
set statusline+=%m      "modified flag
syntax on
```

### Window Commands
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides" class="table table-bordered table-striped">
<caption></caption>
<colgroup><col class="left" /><col class="left" />
</colgroup>
<tbody>
<tr><td class="left">C-w s</td><td class="left">Split window horizontally</td></tr>
<tr><td class="left">C-w v</td><td class="left">Split window vertically</td></tr>
<tr><td class="left">C-w x</td><td class="left">Exchange windows</td></tr>
<tr><td class="left">C-w w</td><td class="left">jump to next window</td></tr>
<tr><td class="left">:only</td><td class="left">kill all windows but current</td></tr>
<tr><td class="left">C-w =</td><td class="left">equalize all window sizes</td></tr>
</tbody>
</table>

### Edit Keys: used with argument

### c change
* cw = change word

#### d delete
* d$ delete til end of line

#### r replace


* r5 replace 5 chars

#### y yank

* yy yank entire line
