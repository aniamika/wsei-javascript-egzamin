let button1 = document.querySelector("#button-1");
let button2 = document.querySelector("#button-2");
let button3 =document.querySelector("#button-3");
let list = document.querySelector("#shopping-list");

button1.addEventListener( "click", function() {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("chleb"));
    list.appendChild(listItem);
});

button2.addEventListener( "click", function() {
    list.lastChild.remove();
});

button3.addEventListener( "click", function() {
    let secondItem = document.getElementsByTagName("li")[1];
    let listItem = secondItem.cloneNode(true);
    list.appendChild(listItem);
});
