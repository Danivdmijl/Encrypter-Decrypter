class EncypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;
        this.type = "ENCRYPT";
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new header(this, "Encryper");
        this.body = new body(this, object);
        this.footer = new footer(this, "Encryper");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type);
    }

    chanceBody(encryptedText){
        this.body.chanceBody(encryptedText);
    }
}

// hetzelfde als bij de decrypter maar nu encrypt hij :p