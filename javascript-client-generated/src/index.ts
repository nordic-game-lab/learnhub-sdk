import axios from 'axios';

async function getUser(apikey, email){
    let response = await axios.get(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
        Headers: {
            'Authorization': apikey
        }
    })
    return response.data
} 

async function deleteUser(apikey, email){
    let response = await axios.delete(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
        Headers: {
            'Authorization': apikey
        }
    })
    return response.data
} 

async function createUser(apikey, body){
    let response = await axios.post(`https://api.nordicgamelab.org/v2/user`, {
        Headers: {
            'Authorization': apikey
        },
        body: body
    })
    return response.data
} 