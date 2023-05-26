class Main {
    EncypterView;
    DecrypterView;
    htmlElement;
    app;

    constructor(data, app) {
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.EncypterView = new EncypterView(this, data.encrypt);
        this.DecrypterView = new DecrypterView(this, data.decrypt);
    }
}


class EncypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new header(this, "Encryper");
        this.body = new body(this, placeholder);
        this.footer = new footer(this, "Encryper");
    }
}

class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new header(this, "DeCrypter");
        this.body = new body(this, placeholder);
        this.footer = new footer(this, "DeCrypter");
    }
}

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
        this.headingHtmlElement.innerText = headingText;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}

class body {
    htmlElement;
    view;
    inputHtmlElement;


    constructor(view, placeholder) {
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input")
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.inputHtmlElement.placeholder = placeholder;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}

class footer {
    htmlElement;
    view;
    buttonHtmlElement;

    constructor(view, footerText) {
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.innerText = footerText;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}

class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter(); // Instantiate Decrypter object
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });
        this.cleaner.clean("body");
    }


}

const app = new App();