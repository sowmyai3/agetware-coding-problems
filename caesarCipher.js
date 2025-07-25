function caesarEncrypt(text, shift) {
  return text
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - (shift % 26));
}

function shiftChar(char, shift) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
}

// Example 
const message = "Hello, World!";
const shift = 3;

const encoded = caesarEncrypt(message, shift);
const decoded = caesarDecrypt(encoded, shift);

console.log("Original:", message);
console.log("Encoded :", encoded);
console.log("Decoded :", decoded);
