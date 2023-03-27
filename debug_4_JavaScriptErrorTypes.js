/*

Debugging JavaScript Code
JavaScript Error Types

Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

Here are three common error types:

    SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
    ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
    TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

Instructions
1.

Fill in the answer to the question on line 2.

Was myVariable defined anywhere in the code? What type of error gets thrown when an undefined variable is used?
2.

Fill in the answer to the question on line 6.

What type of data type is currently stored in myString? What type of error gets thrown when you try to use a data type as if it were a different data type?

If you want to check what the .substring() method does, check out the MDN documentation on .substring().
3.

Fill in the answer to the question on line 9.

Can you find the typo on line 8? What type of error gets thrown when a line of code contains a typo?


=======================================================================================================================

myVariable++;
// 1 - What type of error will be thrown on the line above:

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above:

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above:

=======================================================================================================================

The example below shows this for two methods that would otherwise fail with similar errors (doFailSomeWay() and doFailAnotherWay()):
*/
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      handleFailSomeWay(err.cause);
      break;
    case "Failed in another way":
      handleFailAnotherWay(err.cause);
      break;
  }
}

/*
*/
