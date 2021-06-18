<template>
    <div>
        {{itemlist}}
        <router-view></router-view>
    </div>
</template>

<script>
import { EVENT_BUS } from "@/EventBus/eventBus"

export default {
  
  data () {
      return { 
          itemlist: ''
      }
  },
  created() {
     console.log("app.vue  =====> created")
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