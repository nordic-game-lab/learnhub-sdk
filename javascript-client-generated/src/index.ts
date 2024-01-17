import axios from 'axios';
import sentry from '@sentry/node';

sentry.init({
    dsn: "https://50d8e7d5c25b42a89803e62b07182065@o4505149596303360.ingest.sentry.io/4505150012391424",
    tracesSampleRate: 1.0,
    release: "ngl-api-sdk@" + process.env.npm_package_version
});

export class Client {
    constructor(token: string) {
        this.token = "Bearer" + token;
        if (process.env.node_env == "testing") {
            this.baseURL = "https://api.staging.nordicgamelab.org";
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

}
