---
layout: post
title: Creating a Better Print Screen, part I
tags: python webdev
category: Python
description: I created a better print screen. It takes a screenshot with scrot and then uploads the screenshot to my Picasaweb account.
---

After reading Randall Degges excellent post [How I learned to
Program](http://rdegges.com/how-i-learned-to-program), I decided to
give creating a screenshot program a try. It's always a bit of work to
take a screenshot, upload it to the web and then grab its permanent
link. So being a geek, I thought it high time this process was
automated!

 I tried writing the program in python only, so that there were fewer
dependencies, but using the commandline program
[scrot](https://en.wikipedia.org/wiki/Scrot) as the screenshot
snapping program added a lot of flexibility to the options for the
screenshot.

Without further ado, here are the parts of the program.
 
## Take Screenshot with scrot

I start with a bash script that calls [scrot](https://github.com/dreamer/scrot), and passes in my program
as a parameter to scrot.
 
screen-upload.bash

```bash
#!/bin/bash
/usr/local/bin/scrot '%m-%d-%Y-screenshot.png' -d 5 -u -e '/home/bart/projects/screen-upload/screen-upload.py $f' 
```

Next, chmod +x the bash script:

```bash
chmod +x screen-upload.bash
```


### Scrot Options explained

+ __-d 5__: Delays the snap for 5 seconds.
+ __-u__: Use the currently focused window.
+ __-e 'script'__: Execute the following script after the screenshot
  is snapped.
+ __$f__: passes in filename to script.



## On to the Python Picture Uploading Program

Scrot takes a screenshot after a delay of 5 seconds of the currently
active window, it names the file with the current
date-screenshot.png, it then passes the filename into my program,
"screen-upload.py".


## Upload Image to Picasaweb

For uploading the image to Picasaweb, I used the [gdata
module](https://code.google.com/p/gdata-python-client/downloads/list). Installing
it involved the standard: Download the module, extract it and cd into the
directory and  run "sudo python setup.py install". 

In version 2 of screen-upload, I will rewrite the authentication to use Oauth2, so that
the authentication is more secure, for the alpha version, I am just
passing in the users email and password into the __gd_client__ object.

```python
import gdata.photos.service
import gdata.media
import gdata.geo

filename = fname
gd_client = gdata.photos.service.PhotosService()
gd_client.email = username
gd_client.password = passwd
gd_client.source = 'screen-upload-1'
gd_client.ProgrammaticLogin()
print 'uploading',  filename

album_url = '/data/feed/api/user/%s/albumid/%s' % (username, album_id)
photo = gd_client.InsertPhotoSimple(album_url, 'New Photo', 
               'Uploaded using the API', filename, content_type='image/png')
```


## Copy URL into the Clipboard

Copying the URL to the clipboard is easy as long as you are not too
concerned with cross-platform compatibility. I used the gtk module to
gain access to the clipboard on Linux systems.

```python
from gtk import Clipboard

def clip_store(pic_url):
    cb = Clipboard()
    cb.set_text(pic_url)
    cb.store()
```

This can be made more cross-platform with a series of try statements
that load platform specific libraries. 

```python
try:
  import win32

...
try: 
  from gtk import Clipboard
```



## Setting up the Keyboard Shortcut in Gnome 3.

I had a bit of a bother creating a keyboard shortcut in Gnome.  I
created a new shortcut in the keyboard settings configuration, but
nothing happened.

Long story short: I created a shortcut under "Custom Shortcuts".  I
called it "Take Screenshot" and I named the script "screen-upload".
Then I created a symbolic link to the script in /usr/local/bin.

```bash
ln -s ~/projects/screen-upload/screen-upload.bash /usr/local/bin/screen-upload. 
```

This did the trick, now when I press the PrtSc button, a screenshot is
taken of the current window, and its uploaded to Picasa and the URL of
the image is copied in to my clipboard!

!["Screenshot of screen-upload.py in Emacs"](https://lh4.googleusercontent.com/-UNPsuNmMnTI/T7RlkQmmoyI/AAAAAAAACo8/O-vIjTeCtCE/s800/New%252520Photo.png)


## References

+ [Picasa-web Python Developer's Guide for API v1](https://developers.google.com/picasa-web/docs/1.0/developers_guide_python)
+ [Google Data API Authentication Guide](https://developers.google.com/gdata/docs/auth/overview)
+ [Stackoverflow Answer for Taking Screenshot with python only](http://stackoverflow.com/questions/69645/take-a-screenshot-via-a-python-script-linux)
+ [Randall Degges: How I Learned to Program](http://rdegges.com/how-i-learned-to-program)
+ [Scrot's Github Repository](https://github.com/dreamer/scrot)
