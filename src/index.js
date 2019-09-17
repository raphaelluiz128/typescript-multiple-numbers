"use strict";
//generation of numbers
//Verification of multiple numbers of 35 (Nama Team), then of 7 (Team) and last of 5 (Nama)
exports.__esModule = true;
var multiples = function (n, m) { return n % m === 0; };
var generateNumbers = function () {
    return new Array(100).fill(0).map(function (e, i) {
        return multiples(i + 1, 35) ? 'Nama Team'
            : multiples(i + 1, 7) ? 'Team'
                : multiples(i + 1, 5) ? 'Nama'
                    : (i + 1);
    });
};
console.log(generateNumbers().join(', '));
exports["default"] = generateNumbers();
