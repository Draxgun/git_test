const container = document.querySelector('#container');

/* Adds text paragraph to htnml */
const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is gloriouse text content!"
container.appendChild(content);

/*Adds element a red p to the html  */
const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent ="Hey I'm red!";
para1.style.color = "red";
container.appendChild(para1)

/*Adds a blue h3*/
const header3 = document.createElement('h3');
header3.classList.add('para1');
header3.textContent ="I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3)

/* div creation */
const div2 = document.createElement('div');
div2.classList.add('div2');
div2.style.background ="pink";
div2.style.border = "2px solid black"

/* Header creation */
const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent ="I'm in a div!";
div2.appendChild(header1);

/* p creation */
const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent ="Me too!";
div2.appendChild(para2);

/* Append of content to the html */
container.appendChild(div2);

/* Button event */
const btn = document.querySelector("#btn");
btn.onclick=() => alert("Hello World!");

/* Button event */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() => {
    alert("Hello World!");
});

let alertFunction = () => alert("Hello World")

/* Button event */
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",function(e) {
    e.target.style.background = "blue";
});

/* Multiple button events */

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        alert(button.id);
    })
}
)