//Relatively prime: When two numbers have no common factors other than 1.
//In other words there is no value that you could divide them both by exactly (without any remainder).
//Also called "coprime" or "mutually prime".

const assert = require("chai").assert;

function areRelativelyPrime(a, b) {
  const max = Math.max(a, b);
  let facCount = 0;

  for (let i = 1; i <= max; i++) {
    if (a % i == 0 && b % i == 0) {
      facCount++;

      if (facCount > 1) break;
    }
  }

  return facCount === 1;
}

assert.equal(areRelativelyPrime(21, 22), true, "21 and 22 are coprime");
assert.equal(areRelativelyPrime(21, 24), false, "21 and 24 are not coprime");
