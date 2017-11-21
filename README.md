# frontier-qa-project

# to start test: npm test

Overall goal here was to allow for any future additions to the site while also allowing for scalability. 

1. Graphics and images were grabbed using generic class tags or items with background URLs.
2. Concated the span tags from the displayed elements in question and ran them against regex.
3. Checked for error messasge on invalid form submit and checked for new url on valid form submit.
4. Pulled nav links (aux, main, and footer) and redirected browser window. If loaded url matches what was on the anchor's href, it will pass the test. 
5. Grabbed all displayed text on the page. Looped through responses and filtered out numbers and any custom spellings. E.G. The word "FiOS."
6. Check css properties before and after hovering on elements to see if they changed properly.
7. Found groupings of similar elements and pulled the styling of the first element. Then checked remaining elements in the array against the control.

