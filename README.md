# WTF site

This site is a small little event site for a friend who is turning 50.

## Editing

In order to edit the text, go to the [mainPage.yml](/src/_data/mainPage.yml) file. There, you'll find the main page data structure.

`browserTabTitle` is for changing the text that goes in the browser tab.

`titleSection` is for changing the text in the above-the-fold section of the page. It has backgroundText - which controls the fat WTF behind the foregroundText, which is a list of each word in the foreground. I did it this way in case we want to add any animation or styling. Just some hooks there.

`sections` is for the normal sections of the page. They each have the following:

1. heading
1. image
1. paragraphs - list of plain text paragraphs, I suppose you could write html in there.
1. id - section id to help add styling to particular sections if need be

## After editing

Once you've made the edits, scroll to the bottom of the editing page, and hit the commit button (maybe let me know breifly what you changed in the comments).

After you're done editing, let me know. I can kick off the build process. If you want to kick it off yourself, I can probably hook it up to netlify to have netlify automatically build when changes are committed to this repo.
