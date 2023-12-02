const newEle=document.createElement("h2");
const newtxt=document.createTextNode("This is testing text");
const newCom=document.createComment("This is comment part");
newEle.classList.add("single-dot");
newEle.append(newtxt);
const target=document.querySelector("#create");
target.insertBefore(newEle,target.firstElementChild);
// document.querySelector("#create").append(newEle);
var newElem="<h3>This is newlly added h3</h3>";
target.insertAdjacentHTML("afterbegin",newElem);


const nEle=document.createElement("li");
const ntxt=document.createTextNode("This is testing text");
nEle.append(ntxt);
// nele="<li> New Fruits</li>";
var t=document.querySelector("#list");
var olde=t.children[1];
// console.log(olde);
// t.replaceChild(nEle,olde);
t.removeChild(olde);

console.log(newEle);