/*
Debugging JavaScript Code
Finding Documentation

Sometimes once you’ve tracked down a bug, you might still be confused on how to fix it! Whenever you want to know more about how JavaScript works and what it can do, the best place to go is documentation. You can find the JavaScript documentation at the MDN JavaScript web docs.
https://developer.mozilla.org/en-US/docs/Web/JavaScript
The MDN JavaScript web docs are a powerful resource, but they can be overwhelming because they cover so much information. We encourage you to explore the docs, but often the fastest way to access a specific part of the docs you’re interested in is to Google it.

For example, if we wanted more information on the Number object’s .isNan() method, we could Google “MDN isNan” and then click the link to the MDN page. If we were looking to see a list of all of the String built-in methods, we might Google “MDN String”, click the link to MDN, and then scroll down to the “Methods” section of the documentation.

There are many ways to get to the documentation you are looking for. Find the one that works best for your workflow.
Instructions
1.

In the code editor, we’ve included a function that is supposed to take a string and return a version of that string repeated twice. For example, you can see in the test case at the bottom of the file, we expect doubleString('echo') to return 'echoecho'.

However currently, when we run our file, nothing happens. Clearly we are using the .repeat() method incorrectly. Let’s find the MDN documentation for String.repeat().

Find the link to the documentation for String.repeat() and paste it to the end of the comment on line 1.

Try googling “JavaScript string repeat documentation” and finding the MDN link from the search results.
2.

Now that we’ve found the documentation for String.repeat(), let’s read the documentation to see what we’re doing wrong. Take a look at the parameters section of the documentation. Can you see why our string isn’t getting repeated?

Using this information, fix the .repeat() call in our code.

The documentation notes that there is a required parameter count that must be provided to the .repeat() method. Add the correct value of this argument to the code in the code editor.
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!

=======================================================================================================================
code initial :
// Link to String.repeat() documentation:
function doubleString(string) {
  return string.repeat();
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));

=======================================================================================================================
*/
// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));
