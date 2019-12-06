let buttons = document.getElementsByTagName("button");
let container = document.querySelector("#container");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener( "click", function() {
        let text = this.dataset.text;
        container.innerText = text;
    });
}

