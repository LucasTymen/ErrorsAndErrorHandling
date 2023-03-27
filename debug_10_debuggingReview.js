/*
elopers work through their issues, so don’t give up, and you’ll be an expert in no time.

Congratulations again on learning all of these new techniques. Let’s give them one more round of practice so you can see how much progress you’ve made!
Instructions
1.

In the code editor, we have provided you a broken implementation of a function called isStringPerfectLength(). This function takes a string (string), a minimum string length (minLength), and a maximum string length (maxLength). It should return whether the provided string is within the range of the two lengths. More specifically, if it is longer than the minLength and shorter than the maxLength.

We have provided three example test cases at the bottom of the file. The first checks if the string 'Dog' is in the length range of 2 and 4. In this case, the function should return true because the length of the string is 3 which is between those two values. The next two examples fail. The first fails because the string is too long. The second fails because the string is too short.

Using the debugging process you learned in this lesson, outlined above, find and fix all the bugs in this code.

The code will throw errors at you right off the bat, but remember, this is a good thing! We believe you have all the skills now to debug this code. Don’t give up and show us what you’ve learned! We know you can do it.

=======================================================================================================================
initial state :
function isStringPerfectLength(string, minLength, maxLength {
  const stringLength = string.length;

  if (stringLenth > minLength) {
    return false;
  } else if (stringLenth < maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));

=======================================================================================================================
resolved code :
*/
function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
