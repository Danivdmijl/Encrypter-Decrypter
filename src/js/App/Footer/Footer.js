class footer {
    htmlElement;
    view;
    buttonHtmlElement;
    app;

    constructor(view, footerText) {
        this.htmlElement = document.createElement("footer"); 
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked; // zorgt dat als je klikt hij zijn buttonclicked funtie uitvoert
        this.buttonHtmlElement.innerText = footerText; // maakt zijn innertext de tekst die hij meekrijgt
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    buttonClicked = () => {
        this.view.getDataFromBody(); //roept de getdatafunctie aan
    }
}