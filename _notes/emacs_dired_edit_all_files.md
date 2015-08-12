---
layout: page
title: Change all of the file names in a Directory with Emacs
category: emacs
tags: emacs
notetype: note
permalink: cheatsheets/emacs-edit-dir/
---

1. Turn on transient mark mode
2. Find directory and open it with Dired `C-xC-d`
3. Put directory in editable Mode `C-xC-q`

## Add Text

To Add the desired text 

1. Select the region that you want to edit

     If you want to add a word in front of all files then create mark `C-<space>` in front of first file name and move to position of last file and create mark `C-<space>` in front of file name.

2.  Go into Rectangle Insert mode

     Type `C-x r t`. Emacs will prompt for the string you want to add, type it in and hit enter.



## Remove text

If you'd like to remove a space in file names

1. Select region that you want to delete

    If you want to remove a space in between words in all files then create a mark `C-<space>` in front of first space in the first file and move to position of last file name and go to the end of the space and create a mark `C-<space>`.

2. call the Rectangle Kill command

    Type `C-x r k`. Emacs will remove the space in all of the file names. If the region was incorrect you can undo the change with `C-x u` and start again.

3. Exit editable dired mode to save changes

## Back to Reality

Once you are satisfied with your changes exit editable directory mode to save changes with:
```C-c C-c```

## Dired Mode

{:.table .table-bordered .table-striped}
| Key | Command |
|-----|---------|
| C-x C-d | Find Directory in Dired Mode|
| C-x C-q| Make direcory editable |
| C-c C-c | Save changes, return to normal mode (if in edit mode)|

## Rectangle Edit Mode

Note: first select region by making mark. The rectangle will be the columns from the start mark to the end mark. If in transient mode, the highlighted region will highlight all columns in all rows, but if you start on column 1 and end on column 3, then the selected rectangle is only the first 3 columns in each of the selected rows.

{:.table .table-bordered .table-striped}
| Key | Command |
|-----|---------|
| C-x r t| insert into rectangle |
| C-x r k | kill/delete rectangle|
| C-x r y | yank/copy register into rectangle|
| C-&lt;space&gt; | make mark |
| C-x r N | insert ascending numbers into rectangle|

See: [Emacs rectangle reference](http://www.gnu.org/software/emacs/manual/html_node/emacs/Rectangles.html)
