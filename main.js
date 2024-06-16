/*Question 22: Intentional Error: Try to produce an array index error in one of your programs.
 Correct the error before finishing.*/
let friends = ["Muneer", "Puneer", "Juneer", "Luneer"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Juneer"; // Correcting the error by accessing a valid index.
export {};
