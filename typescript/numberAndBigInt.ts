let num1: number = 14.0; // number
let num2: number = 0x37CF; // hexadecimal
let num3: number = 0o377; // octal 
let num4: number = 0b111001; // binary


// bigint só funciona a partir do es2020
let big1: bigint = 32013921039233721893712n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000000000011n;

console.log(typeof big1);