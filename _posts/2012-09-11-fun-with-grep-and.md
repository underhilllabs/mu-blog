---
layout: post
title: Fun with Grep and Bash Aliases
tags: bash, webdev
category: Bash
---

Just a quick post to write up an bash alias I just created to list the sites enabled on a server and each sites location.

I often need to look up the list of sites enabled on a web server and also the document roots of each of these sites. In the past this meant loading the Apache configuration file into emacs or vim and searching for the site I was looking for.  Today I decided to create an alias for this task.  Here is the original combination of grep commands.

## Grep Command

```bash
grep ''^ServerName" -A 3 /etc/apache2/sites-available/default | \
   grep "^ServerName\|^DocumentRoot\|^--"
```

<ol>
<li>^ServerName:
  <ul><li>Searches the file for all lines that begin with ServerName at the beginning of the line.</li></ul>
</li>
<li>-A 3
  <ul><li>Prints the 3 lines after the match.</li></ul>
</li>
<li>3. grep "^ServerName\|^DocumentRoot\|^--"' 
  <ul><li>Prints only the lines that we are interested (ie lines that begin with ServerName or DocumentRoot or --)</li>
  <li>The "\|" in the second grep command separates the regex with an "or" statement.  </li>
</li>
</ol>

## Alias Command
1. Choose a name for the command, in my case, show-sites
2. Add the alias to the .bashrc or .bash_alias file in your home directory

```bash
alias show-sites='grep "^ServerName" -A 3 /etc/apache2/sites-available/default | \
 grep "^ServerName\|^DocumentRoot\|^--"'
```

## Reload Your Bash Configuration

```bash
. ~/.bashrc
```

## Show All Current Aliases
Type alias at the command line to view all of the currently defined aliases.

```bash
$ alias
```

Bash prints out all of your aliases, like so:

```bash
alias ducks='du -cks * |sort -rn |head -11'
alias gb='git branch'
alias gba='git branch -a'
alias gc='git commit -v'
alias gca='git commit -v -a'
alias gd='git diff | vim -'
alias gl='git log --stat'
alias gp='git push'
alias graceful='sudo apache2ctl graceful'
alias gst='git status'
alias ls='ls --color=auto'
alias show-sites='grep '\''^ServerName'\'' -A 3 /etc/apache2/sites-available/default \
  | grep '\''^ServerName\|^DocumentRoot\|^--'\'''
```
 
