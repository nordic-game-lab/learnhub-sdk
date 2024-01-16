import axios from 'axios';
import sentry from '@sentry/node';

sentry.init({
    dsn: "https://50d8e7d5c25b42a89803e62b07182065@o4505149596303360.ingest.sentry.io/4505150012391424",
    tracesSampleRate: 1.0,
    release: "ngl-api-sdk@" + process.env.npm_package_version
  });
  
  

async function getUser(apikey, email){
    try {
        let response = await axios.get(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
            Headers: {
                'Authorization': apikey
            }
        })
        return response.data
    } catch(e){
        throw e;
    }
} 

async function deleteUser(apikey, email){
    try {
        let response = await axios.delete(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
            Headers: {
                'Authorization': apikey
            }
        })
        return response.data
    } catch(e){
        throw e;
    }
} 

async function createUser(apikey, body){
    try{
        let response = await axios.post(`https://api.nordicgamelab.org/v2/user`, {
            Headers: {
                'Authorization': apikey
            },
            body: body
        })
        return response.data
    } catch(e){
        throw e;
    }
} 

export {
    getUser,
    deleteUser,
    createUser
}