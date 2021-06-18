<template>
    <div>
        cart
        <item></item>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
   computed: { 
       ...mapGetters(['getItems'])
   },
   methods: {
       ...mapMutations(['setItems'])
   },
   mounted () { 
       console.log("this.getItems", this.getItems)
       this.setItems('orange');
       console.log("this.getItems", this.getItems)
       setTimeout(() => {
                  this.setItems('pineapple');

       }, 5000)

   },
   components: {
       'item': ()=>import('@/components/Home/CartItem.vue') 
   }
}

</script>

<style scoped>

</style>