'use strict';
console.log('Hello World again!');
console.log('it\'s me!');
console.log('hel\nlo wor\tld');
console.log('hello' + 'world');

console.log(10 + 3);//13
console.log(10 - 3);//7
console.log(10 * 3);//30
console.log(10 / 3);//3.333...
console.log(10 % 3);//1
console.log(10 ** 3);//1000

console.log(2 + 10 * 3);//32
console.log((2 + 10) * 3);//36

let price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170;
console.log(price * 140);
console.log(price * 160);

price = 500;
price += 100;
price *= 2;
price++;
price--;
console.log(price);

console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log('5' + 3);
console.log(parseInt('5', 10) + 3);
console.log(parseInt('hello', 10));

console.log(price > 1000);
console.log(price < 1000);
console.log(price >= 1000);
console.log(price <= 1000);
console.log(price === 1000);
console.log(price !== 1000);

console.log(Boolean(0));
console.log(Boolean('hello'));

const score = 85;

if (score >= 80) {
    console.log('Great!');
} else if (score >= 60) {
    console.log('Good');
} else {
    console.log('OK...');
}

score >= 80 ? console.log('Great!') : console.log('OK...');

const Score = 60;
const name = 'Nagafuji';

if (Score >= 50 && name === 'Nagafuji') {
    console.log('Good job!');
}

const signal = 'pink';

switch (signal) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Caution!');
        break;
    case 'blue':
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Wrong signal!');
        break;
}