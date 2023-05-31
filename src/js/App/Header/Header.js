class header {
    htmlElement;
    view;
    headingHtmlElement;

    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headingHtmlElement);
        this.headingHtmlElement.innerText = headingText; // maakt de inntertext de text die hij meekrijgt van headingtext
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}