class Main {
    EncypterView;
    DecrypterView;
    htmlElement;
    app;

    constructor(data) {
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.EncypterView = new EncypterView(this);
        this.DecrypterView = new DecrypterView(this);
    }
}


class EncypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main) {
        this.htmlElement = document.createElement("article");
        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new header();
        this.body = new body();
        this.footer = new footer();
    }
}

class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main) {
        this.htmlElement = document.createElement("article");
        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new header();
        this.body = new body();
        this.footer = new footer();
    }
}

class header {

}

class body {

}

class footer {

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
console.log(app);
