import axios from 'axios';

export class Client {
    token: string;
    baseURL: string;
     /**
    * @param {string} token - Defaults to process.env['LEARNHUB_SDK_BEARER_TOKEN'].
    */
    constructor(token: string) {
        if(!token){
          token = process.env['LEARNHUB_SDK_BEARER_TOKEN'];  
          if(token == undefined){
            throw new Error(
                "The LEARNHUB_SDK_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Learnhub client with an token option, like new Learnhub('My Bearer Token').",
              );
          }
        }
        this.token = "Bearer " + token;
        if (process.env.node_env == "testing") {
            this.baseURL = "http://localhost:3000";
        } else {
            this.baseURL = "https://api.nordicgamelab.org";
        }

    }

    /**
     * Email is a required string
     * @param email - Email is a required string
     * @returns 
     */
    async getUser(email: string){
        if(email == null){
            throw new Error("Email is required");
        }
        try {
            let response = await axios.get(`${this.baseURL}/v2/user?email=${email}`, {
                headers: {
                    'Authorization': this.token
                }
            })
            return response.data
        } catch(e){
            throw e;
        }
    } 

     /**
     * Email is a required string
     * @param email - Email is a required string
     * @returns 
     */
    async deleteUser(email: string){
        try {
            let response = await axios.delete(`${this.baseURL}/v2/user?email=${email}`, {
                headers: {
                    'Authorization': this.token
                }
            })
            return response.data
        } catch(e){
            throw e;
        }
    } 

     /**
     * Email is a required string
     * @param {Required} email - Email is used in the creation of a user to determin factors shuch as the Organization the user is assigned to.
     * @param {Required} name - Used in the UI and Emails. Required
     * @returns {object}
     */
    async createUser(email: string, name: string){
        if(!email || !name){
            throw new Error("Email and Name are both required")
        }
        try{
            let response = await axios.post(`${this.baseURL}/v2/user`, {
                headers: {
                    'Authorization': this.token
                },
                body: {
                    name: name,
                    email: email
                }
            })
            return response.data
        } catch(e){
            throw e;
        }
    } 

    async getEndpoint(endpoint: string){
        try {
            let response = await axios.get(`${this.baseURL}/${endpoint}`, {
                headers: {
                    'Authorization': this.token
                }
            })
            return response.data
        } catch(e){
            throw e;
        }
    }

    async postEndpoint(endpoint: string, body){
        try {
            let response = await axios.post(`${this.baseURL}/${endpoint}`, {
                headers: {
                    'Authorization': this.token
                },
                body: body
            })
            return response.data
        } catch(e){
            throw e;
        }
    }

}
