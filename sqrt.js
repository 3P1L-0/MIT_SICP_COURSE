
function newtonSqrt(N, tolerance = 1e-7, maxIterations = 1000) {
  if (N < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }

  let x = N; // Initial guess
  let iteration = 0;

  // Loop until we reach the desired precision or the maximum number of iterations
  while (Math.abs(x * x - N) > tolerance && iteration < maxIterations) {
    x = 0.5 * (x + N / x); // Newton's iteration formula
    iteration++;
  }

  console.log("iteration count: " + iteration);
  return x;
}

// Example usage:
const number = 25;
const result = newtonSqrt(number);
console.log(`Square root of ${number} is approximately: ${result}`);


// recursively
console.log();
let itr = 0;
function newtonSqrtRecursive(N, x = N, tolerance = 1e-7) {
  if (N < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }

  ++itr;
  // Base case: If the guess is close enough to the actual square root, return it
  if (Math.abs(x * x - N) < tolerance) {
    console.log("Iteration count: " + itr);
    return x;
  }

  // Recursive case: Improve the guess using Newton's method formula
  let improvedGuess = 0.5 * (x + N / x);
  return newtonSqrtRecursive(N, improvedGuess, tolerance);
}

// Example usage:
const n = 225;
const r = newtonSqrtRecursive(n);
console.log(`Square root of ${n} is approximately: ${r}`);

// fast-inverse square root calculation; best-fitted for high-performance real-time applications where error margin is highly tolerated
console.log(2);
function fastInverseSqrt(number) {
  const threeHalfs = 1.5;
  const x2 = number * 0.5;

  // Convert the float to an integer bit representation
  const buffer = new ArrayBuffer(4); // 4 bytes for a 32-bit float
  const floatView = new Float32Array(buffer);
  const intView = new Int32Array(buffer);

  floatView[0] = number; // Store the float in the buffer
  let i = intView[0];    // Read its integer representation

  // Apply the magic constant and bit-level manipulation
  i = 0x5f3759df - (i >> 1);

  intView[0] = i;        // Store the modified bits back as a float
  let y = floatView[0];

  // Perform one iteration of Newton's method to refine the result
  y = y * (threeHalfs - (x2 * y * y));

  return y;
}

// Example usage:
const f = 225.0;
const inverseSqrt = fastInverseSqrt(f);
console.log(`Fast inverse square root of ${f}: ${inverseSqrt}`);
console.log(`Approximate square root of ${f}: ${1 / inverseSqrt}`);
