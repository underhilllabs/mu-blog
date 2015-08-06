---
layout: post
title: "Notes on Drupal Rules"
date: 2014-06-12 21:44
comments: true
categories: [Drupal]
---

These are notes for some of the trickier situations for writing Rules.

## Trigger Rule when a Node field has changed

In order to get the **node-unchanged** selector, the only event must be "Before Saving Content".

### Event

+ Before Saving content

### Conditions

1. Set condition field exists 
  + Entities -> Entity has field (eg node:field-supervisor)
2. Data Comparison
  + equals (negated) 
    + node-unchanged:field-supervisor
    + node.field-supervisor



## Setting a field on a Node or User

I wanted to set a field in a user to point to the node being updated and triggering this rule. In order for this to work you must set a condition that the field that you are setting exists. 

### Event 

1. After saving new content of type Peer Review
2. After updating existing content of type Peer Review

### Condition

1. Set condition field exists 
  + Entities -> Entity has field (eg node:field-peer-review)
     + Entity: [node:field-reviewee-id], Field: field-current-review

### Action

1. Fetch an Entity by ID
   + Entity type: Node, Identifier [node:nid]
   + Provides variable: entity-fetched
1. Set a data value
   + Data [node:field-reviewee-id:field-current-review], Value: [entity-fetched]

## Setting up a Scheduled Task

I'd like to send an email reminder to a user 6 months after they have published a certain content-type. 

1. The custom content-type: Class, has a user reference field: field_student_id, that points to the user to whom we want to send the reminder.
2. The custom content-type: Class, has a custom field: field_completed, that tells whether the Class is complete or inclomplete. If the newly created class is incomplete, we want to set a 6 month reminder to finish the class.
3. The creation of a new Class will trigger a rule, to schedule a reminder for the student in 6 months.

### Create a Rules Component: Send Student Incomplete Class reminder.

#### The first thing you need to do is create a new Rules Component. 

- Go to the rules config page and click on the second tab "COMPONENTS".
- Click "+ Add new component".
- Select "action set".
  - Name it what you like, "Email incomplete reminder".
  - Add a variable
    - Data Type: Node
    - Label: Node
    - machine name: node
    - usage: parament
- Add an action element: System => Send mail.
  -  TO: [node:field-student-id:mail]
  -  SUBJECT: Reminder to finish up incomplete grade
  -  Message:



> Hi [node:field-student-id:name],
>  
> This is a reminder to finish up your incomplete class. You can find it here: [node:url]
>  
> Thanks,
> Robot Teacher


- (continued).
  - Click Save

Great, now we will create a new rule that incorporates this component.

### Create a new Rule: Actions upon saving an Incomplete Class

#### Events

- After saving new content of type Class

#### Conditions

- Entity has field: field_complete
- Data value is empty: [node:field-complete]

#### Action (add component here!)

- click Add action
  - Components (very last subgroup)
  - Email incomplete reminder
- Scheduled Evaluation Date
  - "+6 months"
- Identifier 
This is how each individual reminder will show up in the schedule queue.
  - Email incomplete reminder for user: [node:field-student-id:name] id: [node:field-student-id], triggered by [node:nid]. 
- NODE
  - node
- Click Save

#### Now create a new Class with an incomplete.

After the incomplete class is created, the rule should be triggered. You can go to the rules admin page and click on the SCHEDULE tab. The new reminde should be scheduled 6 months from now. 




