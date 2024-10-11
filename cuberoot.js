
const cuberoot = (cube, guess = cube, tolerance = 0.001) => {
  if(cube < 0) throw new Error("There are no square roots of negative numbers")

  // check if guess is good enough; this is the base case
  if(Math.abs(guess * guess * guess - cube) < tolerance) return guess;

  // guess is not good enough; improve it by applying newton's formula
  let improvedGuess = (cube / (guess * guess) + (2 * guess)) / 3;

  // iterate
  return cuberoot(cube, improvedGuess, tolerance);
}

console.log(cuberoot(27))