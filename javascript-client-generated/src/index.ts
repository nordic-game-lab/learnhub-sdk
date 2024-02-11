import axios from 'axios';
import sentry from '@sentry/node';
import 'dotenv/config';

sentry.init({
    dsn: "https://50d8e7d5c25b42a89803e62b07182065@o4505149596303360.ingest.sentry.io/4505150012391424",
    tracesSampleRate: 1.0,
    release: "learnHub-Sdk@" + process.env.npm_package_version
});

export class Client {
    token: string;
    baseURL: string;
    constructor(token: string) {
        this.token = "Bearer " + token;
        if (process.env.node_env == "testing") {
            this.baseURL = "http://localhost:3000";
        } else {
            this.baseURL = "https://api.nordicgamelab.org";
        }
    }

    get getuser(){
        return this.getUser;
    }
    get deleteuser(){
        return this.deleteUser;
    }
    get createuser(){
        return this.createUser;
    }

    get getendpoint(){
        return this.getEndpoint;
    }

    get postendpoint(){
        return this.postEndpoint;
    }

    async getUser(email: string){
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

    async createUser(body){
        try{
            let response = await axios.post(`${this.baseURL}/v2/user`, {
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
