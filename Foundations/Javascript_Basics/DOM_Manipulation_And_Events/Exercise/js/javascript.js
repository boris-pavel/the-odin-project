const para = document.createElement('p');

para.style.color = 'red';
para.textContent = 'Hey I\'m red!';

const headerThree = document.createElement('h3');

headerThree.style.color = 'blue';
headerThree.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');

div.style.cssText = 'border: 1px solid black; background-color: pink;';

const headerOne = document.createElement('h1');

headerOne.textContent = 'I\'m in a div';
div.appendChild(headerOne);

const paraTwo = document.createElement('p');

paraTwo.textContent = 'ME TOO!';
div.appendChild(paraTwo);

const container = document.querySelector('.content');
container.appendChild(para);
container.appendChild(headerThree);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background='blue';
  });

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

