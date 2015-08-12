---
title: Limitations on MySQL Trigger
layout: page
category: notes
notetype: note
permalink: cheatsheets/mysql-triggers/
---

You cannot create more than one trigger on a table for the same event and the same activation time.

In other words, you cannot create two `After Insert` triggers on a table. This is mitigated slightly by the fact that you can put more than one statements in a Begin/End block, like so:

```mysql
Create Trigger ins_name
After Insert On account
For Each Row
Begin
  update [...] ;
  insert into [...];
End;
```
