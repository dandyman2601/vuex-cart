const FetchInterceptor = require('fetch-interceptor');
let status = false
export const interceptor = FetchInterceptor.register({
  onRequestFailure(response) {
    console.log(response)
   if (response.status == 401 && status == false) {
      status = true
       // write here direction code
   } 
  }
});
