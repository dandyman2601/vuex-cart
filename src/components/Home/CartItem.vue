<template>
    <div>
        <h1>cartItem</h1>
        <h1 v-for="(item, index) in getItems" :key="index" @click="sendData(item)">
            {{item}}
        </h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { EVENT_BUS } from "@/EventBus/eventBus"

export default {
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

   },
   created () { 

  console.log("cartitem", " =====>created")    

     EVENT_BUS.$emit("send-data", 1111)


   } 
}

</script>

<style scoped>

</style>