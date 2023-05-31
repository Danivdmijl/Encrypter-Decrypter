class body {
    htmlElement;
    view;
    inputHtmlElement;
    text;

    constructor(view,object) {
        this.htmlElement = document.createElement("section"); // maakt een sectiona an
        this.htmlElement.classList.add("view__body"); // voegt class toe
        this.inputHtmlElement = document.createElement("textarea"); // maakt een text area
        this.inputHtmlElement.classList.add("view__input") // add class
        this.htmlElement.appendChild(this.inputHtmlElement); // voegt inputhtmlelement aan htmlelement
        this.inputHtmlElement.placeholder = object.placeholder; // stelt placeholder text in van Json
        this.inputHtmlElement.value = object.value; //slaat value op in een variable
        this.text = object.value; // maakt text de value uit json

        this.inputHtmlElement.oninput = this.typed; // per edit word inputhtmlelement een nieuwe waarde
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement); //renderd 
    }

    typed = (event) =>{
        this.text = event.target.value; // edit de text naar de value
    }

    chanceBody(newText){
        this.inputHtmlElement.value = newText; // maakt de waarde naar nieuwe text
    }
}