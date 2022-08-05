// Write your code here!
document.querySelector('main').remove();
const newHeader = document.createElement("h1");
const textNode = document.createTextNode("YOUR-NAME is the champion");
newHeader.setAttribute("id","victory");
newHeader.appendChild(textNode);