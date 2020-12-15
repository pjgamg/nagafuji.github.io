'use strict';
{



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

    for (let i = 1; i <= 10; i++) {
        console.log(`hello ${i}`);
    }

    // let hp = 100;
    // while (hp > 0) {
    //     console.log(`${hp} HP left!`);
    //     hp -= 15;
    // }

    let hp = -50;
    do {
        console.log(`${hp} HP left!`);
        hp -= 15;
    } while (hp > 0);

    for (let i = 1; i <= 10; i++) {
        if (i === 4) {
            continue;
        }
        console.log(i);
    }

    for (let i = 1; i <= 10; i++) {
        // if (i === 4) {
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
    }

    for (let i = 1; i <= 10; i++) {
        if (i === 4) {
            break;
        }
        console.log(i);
    }

    function showAd(message = 'Ad') {
        console.log('----------');
        console.log(`--- ${message} ---`);
        console.log('----------');
    }

    showAd('Header Ad');
    console.log('Tom is great!');
    console.log('Bob is great!');
    showAd();
    console.log('Steve is great!');
    console.log('Richard is great!');
    showAd('Footer Ad');

    // function sum(a, b, c) {
    //     return a + b + c;
    // }
    const sum = function (a, b, c) {
        return a + b + c;
    };
    // sum(1, 2, 3);
    // sum(3, 4, 5);
    const total = sum(1, 2, 3) + sum(3, 4, 5);
    console.log(total);

    // const double = function(a) {
    //     return a * 2;
    // };
    const double = a => a * 2;
    console.log(double(12));

    const x = 2;
    function f() {
        const x = 1;
        console.log(x);
    }
    f();
    console.log(x);



}