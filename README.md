
# A few comments/questions:

I noticed that you did everything in a single component. Do you have any specific reasons why? Are there any reasons why it might be better or worse to break it out into different components?

Hooks! Very nice. Might you be able to talk about advantages of using hooks over other state management techniques?

If you were teaching someone JavaScript, would you recommend that they use semicolons or not use semicolons? Why?

You've imported lodash for mapping, filtering, and determining if collections are empty. What are some reasons to use lodash over the native Array methods? Also, did you decide not to use lodash for checking for an empty list on line 39? (i.e., in the `doesSearchMatchAnyDocuments` helper function)

If you weren't using a styling framework, what are some other techniques that you prefer? What would you do differently if you were styling a website that didn't use JavaScript? (i.e., just HTML and CSS)

Regarding the curried function `handleListItemChange`, would you change anything about this function if you broke the app into a component hierarchy?