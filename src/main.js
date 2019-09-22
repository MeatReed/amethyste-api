const {
    post
} = require("axios")

class ameApi {

    constructor(client, apikey) {
        if (!client) return;
        this.client = client;
        this.apikey = apikey;
    }
    async generate(endpoint, data = {}) {
        try {
            let image = await post('https://v1.api.amethyste.moe/generate/' + endpoint, data, {
                responseType: 'arraybuffer',
                headers: {
                    'Authorization': 'Bearer ' + this.apikey,
                }
            });
            return image.data;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ameApi;