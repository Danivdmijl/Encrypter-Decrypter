class API {
    async getData(url) {
        let dataToBeReturned = {};
        await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            dataToBeReturned = data.data;
        })
        return dataToBeReturned;
    }
}


// Haalt de Data op uit json file en laat js wachten tot het geladen is