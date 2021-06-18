<template>
    <div>
        cart {{add(800,200)}}

        <h1>{{name | capitalize }}</h1>
        <item></item>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Mixins } from "@/mixins/altMixins"


export default {
    data () {
        return {
            name: "abcdef"
        }
    },
   computed: { 
       ...mapGetters(['getItems'])
   },
   methods: {
       ...mapMutations(['setItems'])
   },
   filters: {

       makeCapital (item) {
           console.log(item);
           return item.toUpperCase();

       }
   },
   mounted () { 
      console.log("cart.vue =====> mounted")

       console.log("this.getItems", this.getItems)
       this.setItems('orange');
       console.log("this.getItems", this.getItems)
       setTimeout(() => {
                  this.setItems('pineapple');

       }, 5000)

   },
   created () {
             console.log("cart.vue =====> created")

   },
   components: {
       'item': ()=>import('@/components/Home/CartItem.vue') 
   },
    mixins: [Mixins]
}

</script>

<style scoped>

</style>