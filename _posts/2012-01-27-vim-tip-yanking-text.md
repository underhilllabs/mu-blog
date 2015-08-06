---
layout: post
title: Vim Tip Yanking or Deleting a Big Chunk of Text
tags: vim mysql webdev
category: Vim
---

I have a large mysqldump backup file of all databases on a server but I need a sql backup for a single database. So I wanted to break up the dump file into smaller pieces.  This is one solution I came up with using vim. 

1. I opened the dump file and a newly created file for the single database:

``` bash
vim db-dump.sql newdumpfile.sql
```

2. I searched for the start of the database section by searching for:

``` bash
 /USE `databasename`
```

where "databasename" is the specific database I want to grab.

3. Once I was at the correct spot in the database dump I noticed that each individual database section starts with a comment:

``` bash
---
--- Current Database: `databasename`
--- 
```

Once again, "databasename" is a specific database name.

4. So I yanked all lines until the next database section with the following vim command:

``` bash
y/Current Database/
```

This tells vim to yank all lines until it reaches the next match for the regular expression "Current Database".  Vim will report how many lines have been yanked.

5. Next, switch to the new file and paste the lines that were yanked.

``` bash
:bn 
p
```

The vim command `:bn`, means switch to the next buffer.  You could also
run the command `:e newdumpfile.sql` to create and edit a new sql file

The next vim command `p` is the paste command, it pastes into the
current buffer the last yanked hunk of text. In this case it would be
the lines you just yanked, the single database dump.

6. Finally save the changes to the new file with `:wq`

7. If you'd like to reload the database into mysql use the following:

``` bash
mysql -p < newdumpfile.sql
```
