const {
    post,
    get
} = require("axios");
const baseURL = "https://v1.api.amethyste.moe";

class ameApi {

    /****
     * @param {string} token provider api.amethyste.moe
     */
    constructor(apikey) {
        this.apikey = apikey;
    }

    /**
     * return image of an endpoint and data send
     * @param {string} endpoint - Name of the endpoint
     * @param {object} data - Object to send data (url, blur,ect...)
     * @returns {Promise<Object>}
     */
    async generate(endpoint, data = {}) {
        if(!this.apikey) throw 'Missing Api Key';
        if(!endpoint) throw 'Missing endpoint';
        try {
            let image = await post(`${baseURL}/generate/${endpoint}`, data, {
                responseType: 'arraybuffer',
                headers: {
                    'Authorization': `Bearer ${this.apikey}`,
                }
            });
            return image.data;
        } catch (err) {
            throw err;
        }
    }

    /***
     * GET all endpoints of generation
     * @returns {Promise<Array>}
     */
    async getEndpointsGenerate(){
        if(!this.apikey) throw 'Missing Api Key';
        try{
            let info = await get(`${baseURL}/images`);
            if(!info.data) throw "Endpoints not found.";
            return info.data.endpoints;
        }catch (e) {
            throw e;
        }
    }
    /***
     * GET all endpoints of images
     * @returns {Promise<Array>}
     */
    async getEndpointsImage(){
        if(!this.apikey) throw 'Missing Api Key';
        try{
            let info = await get(`${baseURL}/generate`);
            if(!info.data) throw "Endpoints not found.";
            return info.data.endpoints;
        }catch (e) {
            throw e;
        }
    }
}

module.exports = ameApi;
