let fs = require('fs');
let arg = process.argv;
let inputData; 
let i = 0, n = 1;
let sum = 0
let entropy = 0
let alph = new Array()

inputData = fs.readFileSync('input.txt');
inputData = inputData.toString();

for (i = 0 ; i<inputData.length; i++)
	alph[inputData.charAt(i)] = 0

for (i = 0 ; i<inputData.length; i++)
	alph[inputData.charAt(i)]++;
console.log(alph);

for (i in alph){
	alph[i]/=inputData.length;
	sum++;
}

if (sum>1){
	for (i in alph)
		entropy-=(alph[i])*(Math.log(alph[i]));
	entropy/=Math.log(sum);
}
console.log(entropy)
