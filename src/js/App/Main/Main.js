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

        this.EncypterView = new EncypterView(this, data.encrypt); // maakt niewe encrypterview aan met de variablen die hij nodig heeft 
        this.DecrypterView = new DecrypterView(this, data.decrypt); // zelfde als hier boven
    }

    cipher(textToCipher, type){
        if(type === "ENCRYPT"){
            this.app.encrypt(textToCipher); // encrypt tekst als het gelijkt staat aan "ENCRYPT"
        }
        else{
            this.app.decrypt(textToCipher); // als de tekst niet gelijk is aan "ENCRYPT" decrypt hij de tekst
        }
    }

    changeEncrypter(encryptedText){
        this.EncypterView.chanceBody(encryptedText); // Verander de tekst in de EncrypterView naar de encrypted tekst
    }

    changeDecrypter(decryptedText){
        this.DecrypterView.chanceBody(decryptedText); //  Verander de tekst in de DecrypterView naar de decrypted tekst
    }
}