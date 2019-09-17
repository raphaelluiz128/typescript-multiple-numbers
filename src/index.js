"use strict";
//generation of numbers
//Verification of multiple numbers of 35 (Nama Team), then of 7 (Team) and last of 5 (Nama)
const multiples = (n, m) => n % m === 0;
const generateNumbers = () => {
    return new Array(100).fill(0).map((e, i) => multiples(i + 1, 35) ? 'Nama Team'
        : multiples(i + 1, 7) ? 'Team'
            : multiples(i + 1, 5) ? 'Nama'
                : (i + 1)).join(', ');
};
/*
function generateNumbers(): any {
  var numbers: Array<any> = new Array(100).fill(0).map((e, i) => (i + 1));
  for (var i = 0; i < 100; i++) {
    if (multiples(numbers[i], 35))  numbers[i] = 'Nama Team';
    if (multiples(numbers[i], 7))   numbers[i] = 'Team';
    if (multiples(numbers[i], 5))   numbers[i] = 'Nama';
    }
  const numbersSpace = numbers.join(', ');
  console.log (numbersSpace);
};

*/
console.log(generateNumbers());
