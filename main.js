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
{
    const scores = [80, 90, 40, 70];

    scores[2] = 44;
    console.log(scores);
    console.log(scores.length);

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i + 1}: ${scores[i]}`);
    }

    scores.push(60, 50);
    scores.shift();
    scores.splice(0, 1, 40, 50);
    console.log(scores);

}
{
    const otherScores = [10, 20];
    const scores = [80, 90, 40, 70, ...otherScores];
    console.log(scores);

    function sum(a, b) {
        console.log(a + b);
    }
    sum(...otherScores);
}
{
    const scores = [80, 90, 40, 70];
    const [a, b, ...others] = scores;
    console.log(a);
    console.log(b);
    console.log(others);

    let x = 30;
    let y = 70;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);

    scores.forEach((score, index) => {
        console.log(`Score ${index}: ${score}`);
    })

    const prices = [180, 190, 200];
    // const updatedPrices = prices.map((price) => {
    //     return price + 20;
    // });
    const updatedPrices = prices.map(price => price + 20);
    console.log(updatedPrices);

    const numbers = [1, 4, 7, 8, 10];
    // const evenNumbers = numbers.filter((number) => {
    //     if (number % 2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(evenNumbers);

    // const point = {x: 100, y:180};
    const point = {
        x: 100,
        y: 180,
    };
    console.log(point);
    console.log(point.x);
    console.log(point['y']);
    point.z = 90;
    delete point.y;
    console.log(point);


}
{
    const otherProps = {
        r: 4,
        color: 'red',
    };
    const point = {
        x: 100,
        y: 180,
        ...otherProps,
    };
    console.log(point);

    const { x, r, ...others } = point;
    console.log(x);
    console.log(r);
    console.log(others);

}
{
    const point = {
        x: 100,
        y: 180,
    };
    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log(`Key: ${key} Value: ${point[key]}`);
    });

    const points = [
        { x: 30, y: 20 },
        { x: 10, y: 50 },
        { x: 40, y: 40 },
    ];
    console.log(points[1].y);

    // let x = 1;
    // let y = x;
    // x = 5;
    // console.log(x);
    // console.log(y);

    // let x = [1, 2];
    // let y = x;
    // x[0] = 5;
    // console.log(x);
    // console.log(y);
    let x = [1, 2];
    let y = [...x];
    x[0] = 5;
    console.log(x);
    console.log(y);
}
{
    const str = 'hello';
    console.log(str.length);
    console.log(str.substring(0, 4));
    console.log(str[4]);

    const d = [2019, 11, 14];
    console.log(d.join('/'));

    const t = '17:08:24';
    console.log(t.split(':'));
    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);
}
{
    const scores = [10, 3, 9];
    let sum = 0;
    scores.forEach(score => {
        sum += score;
    });
    const avg = sum / scores.length;
    console.log(sum);
    console.log(avg);

    console.log(Math.floor(avg));//小数点以下切り捨て
    console.log(Math.ceil(avg));//小数点以下切り上げ
    console.log(Math.round(avg));//小数点以下四捨五入
    console.log(avg.toFixed(3));//小数点以下３桁

    console.log(Math.random());

}