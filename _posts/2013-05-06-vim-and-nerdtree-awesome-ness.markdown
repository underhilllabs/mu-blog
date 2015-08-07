---
layout: post
title: "Vim and NERDTree Awesome-ness"
date: 2013-05-06 17:35
comments: true
categories: Vim
---

I thought I'd write up a couple quick posts on vim commands that I have been using lately. This first post is on NERDTree.

## NERDTree

Wow, this [plugin](https://github.com/scrooloose/nerdtree) is so amazing. It is a sideloaded file browser for vim. 
![screenshot of NERDTree](https://lh5.googleusercontent.com/-hoztGWZNcow/UYkqmD1fg6I/AAAAAAAADmY/Wv8lSBOukkg/w1371-h771-no/Screenshot+from+2013-05-07+10%253A21%253A38.png)

### Installing and setting up NERDTree


If you have pathogen installed, then installing it is as simple as:

``` bash
cd ~/.vim/bundles/
git clone git://github.com/scrooloose/nerdtree.git
```

Next, I added the following to my ~/.vimrc

```bash
map <leader>nt :execute 'NERDTreeToggle ' . getcwd()<CR>
```

My leader key is comma, so once the previous code is added to my .vimrc, I can type `,nt` in normal mode, and NERDTree's file browser pops open on the side and displays the current working directory. Type `C-w h` (Control-w h) to send focus to the file browser and hit `<enter>` over a directory to expand it, or press `<enter>` over a file name to open it in the main window.

Next to close the file browser type `,nt` again and it disappears. 

## Use NERDTree to rename and create new files.

I was satisfied with the above commands for awhile, it was very convenient, but then I watched screencasts of people creating files eaily in Sublime and Textmate and lo I was unsatisfied. But then one day as I was in the file browser I happened upon the "m" or menu command and it was a godsend! Typing `m` while on a file will bring up a menu of options:

```bash
NERDTree Menu. Use j/k/enter and the shortcuts indicated
==========================================================
> (a)dd a childnode
  (m)ove the current node
  (d)elete the current node
  (c)opy the current node

```

### Move (or rename) a file
1. move cursor to a filename in the file browser
2. type `m` to bring up the menu
3. type `m` again to rename the file
4. type in it's new name, press `<enter>` and the file is renamed.

### Create a new file

1. move cursor to a filename in the file browser
2. press `m` while on a directory.
3. type `a` for add a child node
4. type in the new file's name and press `<enter>`
5. arrow down to the new file name and select it to start editing it.

### Delete a file

1. move cursor to a filename in the file browser
2. press `m` to bring up the menu.
3. press `d` to delete the file.

## Opening file
By default NERDTree opens a file you select in the current window (the last window you hopped to the file browser from.) If you'd like to open it in a new horizontally split window, press `i` when cursor is on the file. To open it in a new vertical spit, type `s`.

## NERDTree help
As mentioned earlier, you can type `?` while in the file browser to bring up a help window. Type `?` again to toggle the help window's display.



