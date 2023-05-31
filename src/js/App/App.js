class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then((data) => { //Haal gegevens op van de data.json door de API class
            this.main = new Main(data, this);
        });
    }

    encrypt(textToEncrypt){
        const encrypted = this.encrypter.encrypt(textToEncrypt); // encrypt de tekst met de encrypter
        this.main.changeEncrypter(encrypted); // veranderd de tekst in de encrypted tekst
    }

    decrypt(textToDecrypt){
        const decrypted = this.decrypter.decrypt(textToDecrypt); // decrypt de tekst met de decrypter
        this.main.changeDecrypter(decrypted); // veranderd de tekst in de decrypted tekst
    }
}