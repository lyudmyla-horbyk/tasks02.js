// Task 3 - https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR0zmeRnxl0b8UP3YUzvpfTYAUnkz0q-v9UtSpBl7XSsvLB2kK0iM0PaimI

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace (/T/g, 'U');
}
