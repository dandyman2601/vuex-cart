<template>
    <div>
        <h1 id="sm">cartItem</h1> {{name}}
        <h1 v-for="(item, index) in getItems" :key="index" @click="sendData(item)">
            {{item}}
        </h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { EVENT_BUS } from "@/EventBus/eventBus"

export default {
    props: ['name'],
    watch: {
        getItems(val) {
            console.log("val", val)
        }
    },
   computed: { 
       ...mapGetters(['getItems'])
   },
   methods: {
       sendData(item) {
           console.log(item)
           EVENT_BUS.$emit("send-data", item)
       }
   },
   mounted () {
         console.log("cartitem", " =====> mounted")    
           console.log("document.", document.getElementById("sm").innerHTML)


   },
   created () { 

  console.log("cartitem", " =====>created")    

//   console.log("document.", document.getElementById("sm").innerHTML)

     EVENT_BUS.$emit("send-data", 1111)


   } 
}

</script>

<style scoped>

</style>