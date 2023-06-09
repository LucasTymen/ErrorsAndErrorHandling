/*
Debugging JavaScript Code
Stack Overflow

At this point, you might be thinking to yourself, documentation is good and all, but there’s no way it will solve all of my issues! And we totally agree. All programming languages have difficult problems and strange edge cases that appear unexpectedly and are sometimes impossible to solve alone.

If you are ever stuck trying to solve a coding problem, we strongly encourage you to Google for a solution. One of the best sites you will see appear in the search results is Stack Overflow.

Stack Overflow is a question and answer forum where frustrated programmers post issues and other programmers discuss and vote for solutions. Almost always if you have an issue, Stack Overflow has an answer.

For example, say you are stumped trying to write an alphabetize function. If you search “alphabetize string JavaScript” on Google, this Stack Overflow search result will appear. You can quickly scan through the answers on it to see which ones work for you.

If you are ever programming and a problem is becoming so insurmountable that you want to quit, Stack Overflow is a great place to go to get unstuck.
Instructions
1.

In the code editor, we’ve included an unfinished function, containsCake(). It takes a string and checks if that string contains the substring 'cake' inside of it. If so, it should return true. If not, it should return false.

Using the information in this Stack Overflow post, implement the functionality of this function.

If you’re stuck on how to translate the answer from this forum into working code, check out the hint.

This function is looking to see if a string contains a specific substring. The answers in the Stack Overflow post all use a generic substring. In order to check specifically for "cake" you will need to change any reference to a substring to "cake" in your code. Other than that, any of the answers in the Stack Overflow post should work.
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
=======================================================================================================================
initial state :

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {

}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

=======================================================================================================================
resolved code :
*/
// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes("cake")
  console.log(string.includes(substring)); // true
  }

  // Should return true
  console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

  // Should return false
  console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));
