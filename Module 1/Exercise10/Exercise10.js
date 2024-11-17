const numofDice = parseInt(prompt("Enter the number of dice:"));
const sumofDice = parseInt(prompt("Enter a sum:"));

const hitlimit = 10000;
let hitno = 0;

for (let i = 0; i < hitlimit; i++) {
    let sum = 0;
    for (let j = 0; j < numofDice; j++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        sum += dice;
        }
        if (sum === sumofDice) hitNo ++;
        console.log(sum, sumofDice)
    }

const probability = (hitNo/hitlimit) * 100;
