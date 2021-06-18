<template>
    <div>
        <h1>cartItem</h1>
        <h1 v-for="(item, index) in getItems" :key="index">
            {{item}}
        </h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    watch: {
        getItems(val) {
            console.log("val", val)
        }
    },
   computed: { 
       ...mapGetters(['getItems'])
   },
//    methods: {
//        ...mapMutations(['setItems'])
//    },
   mounted () { 

    console.log("this.getItems=cartItems", this.getItems)

   } 
}

</script>

<style scoped>

</style>