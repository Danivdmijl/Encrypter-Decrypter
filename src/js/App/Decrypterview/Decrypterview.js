class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder, app) {
        this.htmlElement = document.createElement("article"); 
        this.htmlElement.classList.add("view");

        this.main = main;
        this.type = "DECRYPT"; // stelt type in op "decrypt" 
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement); //renderd elements
        this.header = new header(this, "DeCrypter"); // Maak een nieuwe header  en geeft mee de titel "DeCrypter"
        this.body = new body(this, placeholder); // maakt nieuwe body en geeft decrypterview en json object mee.
        this.footer = new footer(this, "DeCrypter"); // zelfde als hierboven
    }

    getDataFromBody(){
        this.main.cipher(this.body.text,this.type); // Haal de tekst op en roept de "cipher" functie aan met de tekst en het type
    }
    
    chanceBody(decryptedText){
        this.body.chanceBody(decryptedText); //decrypt de huidige tekst
    }
}