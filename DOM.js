// var ele=document;
// var ele=document.all[10];
// window.onload = (function () {
    // const ele = document.getElementById('menu');
    // const ele = document.getElementsByClassName('list')[1];
//     const ele = document.getElementsByTagName('ul');
//     console.log(ele);
// });

// const ele = document.getElementsByTagName('ul');
// const ele1 = document.getElementById('menu');
// console.log(ele);
// console.log(ele1);


/////GET DOM Value

// const header = document.getElementById('header').innerText;
// console.log(header);
// const content = document.getElementById('content').innerText;
// console.log(content);

// const header = document.getElementById('header').innerHTML;
// console.log(header);

// const content = document.getElementById('content').innerHTML;
// console.log(content);
// const header = document.getElementById('header').getAttribute('onclick');
// const header = document.getElementById('header').getAttributeNode('style');
// const header = document.getElementById('header').attributes[3];
// const header = document.getElementById('header').attributes[2].value;
// console.log(header);

/////SET DOM Value

// const header = document.getElementById('header').innerText='<h1>Bhushan Baraik</h1>';
// document.getElementById('header').innerHTML='<h1>Bhushan Baraik</h1>';
// const header = document.getElementById('header').getAttribute("class");
// console.log(header);

// document.getElementById('header').setAttribute("class","xyz");
// document.getElementById('header').setAttribute("style","border:5px dotted yellow");

// document.getElementById('header').removeAttribute('style');
// document.getElementById('header').removeAttribute('class');

// const header1 = document.getElementById('header').getAttribute("class");
// console.log(header1);

//New DOM Target Method querySelector

// document.querySelector('#header').innerHTML='<h1>Bhushan Baraik</h1>';

// const header1 = document.querySelector('#header').getAttribute("class");
// const header1 = document.querySelector('.list');
const header1 = document.querySelectorAll('.list');
console.log(header1);

