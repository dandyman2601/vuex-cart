<template>
    <div>
        {{itemlist}}
        <router-view></router-view>
    </div>
</template>

<script>
import { EVENT_BUS } from "@/EventBus/eventBus"

import { interceptor } from "@/InterceptorHub/"
console.log("interceptor", interceptor);

export default {
  
  data () {
      return { 
          itemlist: ''
      }
  },
  created() {
     console.log("app.vue  =====> created")
        var myHeaders = new Headers();
        myHeaders.append("XSSESSION", "4760e559-43f9-46e6-933b-6bc3fd0f4c8f");

        var formdata = new FormData();

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.cloud.altbalaji.com/accounts/profiles/2350706", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


  }, 
  mounted () {
           console.log("app.vue =====> mounted")

        
        setTimeout(() => {
               EVENT_BUS.$on("send-data", (item) => {
                console.log(item)
                this.itemlist = item
            })
            
        }, 1000)
    

  }
}
</script>

<style scoped>

</style>