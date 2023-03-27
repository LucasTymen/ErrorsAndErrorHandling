/*
Debugging JavaScript Code
Debugging with console.log()

Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

    Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
    After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
    Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.
Instructions
1.

In the code editor, we have included a broken function for you to debug. This function is supposed to take two strings, compare the first letter of each, and return the string which comes later alphabetically. If the first letters of both strings are the same, it should return null.

At the bottom of the file, we’ve included three test cases and their expected outputs. If you run the code, you will see that they are not working as expected.

Using the console.log() debugging mindset laid out above, walk through the code, locate the three bugs we have included for you, and fix them.

This is a big task, so feel free to consult the hint for suggestions on where to place your console.log() statements and how to fix the code.

Bugs 1 and 2: Print out the starting values of firstLetter1 and firstLetter2 and run the code. Are these actually the first letters of the strings? How can we modify the calls to .charAt() to make them the first letters?

Bug 3: Add print statements to the insides of the if/else blocks and run the code. Are the proper values being returned based on the block being executed? How can we change the conditions to return the proper values?
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!

=======================================================================================================================
corrected code :
*/

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);

  if (firstLetter1 === firstLetter2) {
    return null;

  } else if (firstLetter1 < firstLetter2) {

    return string2;
  } else {

    return string1;
  }
}

 //Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));
