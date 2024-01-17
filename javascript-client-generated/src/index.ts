import axios from 'axios';
import sentry from '@sentry/node';

sentry.init({
    dsn: "https://50d8e7d5c25b42a89803e62b07182065@o4505149596303360.ingest.sentry.io/4505150012391424",
        tracesSampleRate: 1.0,
            release: "ngl-api-sdk@" + process.env.npm_package_version
              });

              export class Client {
               constructor(token) {
                 this.token = "Bearer" + token;
                  }

                  async getUser(email){
                      try {
                              let response = await axios.get(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
                                          headers: {
                                                          'Authorization': this.token
                                                                      }
                                                                              })
                                                                                      return response.data
                                                                                          } catch(e){
                                                                                                  throw e;
                                                                                                      }
                                                                                                      } 

                                                                                                      async deleteUser(email){
                                                                                                          try {
                                                                                                                  let response = await axios.delete(`https://api.nordicgamelab.org/v2/user?email=${email}`, {
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
                                                                                                                                                                                                      let response = await axios.post(`https://api.nordicgamelab.org/v2/user`, {
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
