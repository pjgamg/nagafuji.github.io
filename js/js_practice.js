'use strict';

{
    // function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    // document.querySelectorAll('p').forEach((p, index) => {
    // p.textContent = `${index}番目のpです。`;
    // });
    // }

    // setTimeout(update, 1000);
    document.querySelector('#button0').addEventListener('click', () => {
        const targetNode = document.getElementById('target');
        // targetNode.textContent = 'Changed!';
        targetNode.title = 'This is title!';
        // targetNode.style.color = 'red';
        // targetNode.style.backgroundColor = 'skyblue';
        // targetNode.className = 'my-color';
        // targetNode.className = 'my-color my-border';
        // targetNode.classList.add('my-color');
        // if (targetNode.classList.contains('my-color') === true) {
        //     targetNode.classList.remove('my-color');
        // } else {
        //     targetNode.classList.add('my-color');
        // }
        targetNode.classList.toggle('my-color');
        targetNode.textContent = targetNode.dataset.translation;


    });
}
{
    document.querySelector('#button1').addEventListener('click', () => {
        const item2 = document.createElement('li');
        item2.textContent = 'item2';
        const ulNode = document.querySelector('ul');
        ulNode.appendChild(item2);

        const item0 = document.querySelectorAll('li')[0];
        const copy = item0.cloneNode(true);
        const item1 = document.querySelectorAll('li')[1];
        ulNode.insertBefore(copy, item1);

        // item1.remove();
        ulNode.removeChild(item1);

    });
}
{
    document.querySelector('#button2').addEventListener('click', () => {
        const ul = document.querySelector('#ul2');
        const li = document.createElement('li');
        const text = document.querySelector('input');
        li.textContent = text.value;
        ul.appendChild(li);
        text.value = '';
        text.focus();
    });
}
{
    document.querySelector('#button3').addEventListener('click', () => {
        const li = document.createElement('li');
        const color = document.querySelector('select');
        li.textContent = `${color.value} - ${color.selectedIndex}`;
        document.querySelector('#ul3').appendChild(li);

    });
}
{
    document.querySelector('#button4').addEventListener('click', () => {
        const colors = document.querySelectorAll('.input4');
        let selectedColor;

        colors.forEach(color => {
            if (color.checked === true) {
                selectedColor = color.value;
            }
        });

        const li4 = document.createElement('li');
        li4.textContent = selectedColor;
        document.querySelector('#ul4').appendChild(li4);

    });
}
{
    document.querySelector('#button5').addEventListener('click', () => {
        const colors = document.querySelectorAll('.input5');
        const selectedColors = [];

        colors.forEach(color => {
            if (color.checked === true) {
                selectedColors.push(color.value);
            }
        });

        const li5 = document.createElement('li');
        // li.textContent = selectedColors.join(',');
        li5.textContent = selectedColors;
        document.querySelector('#ul5').appendChild(li5);

    });
}
{
    document.querySelector('#button6').addEventListener('dblclick', () => {
        console.log('Double Clicked!');
    });

    // document.addEventListener('mousemove', e => {
    //     console.log(e.clientX, e.clientY);
    // });
    document.addEventListener('keydown', e => {
        console.log(e.key);
    });
}
{
    const text = document.querySelector('#textarea7');
    text.addEventListener('focus', () => {
        console.log('focus');
    });
    text.addEventListener('blur', () => {
        console.log('blur');
    });
    text.addEventListener('input', () => {
        console.log('input');
        console.log(text.value.length);
    });
    text.addEventListener('change', () => {
        console.log('change');
    });
}
{
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        console.log('submit');
    });
}
{
    document.querySelector('#ul9').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    });
}