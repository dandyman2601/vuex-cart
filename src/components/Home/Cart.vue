<template>
    <div>
        cart {{add(800,200)}}

        <h1>{{name | capitalize }}</h1>
        <item :name="name"></item>


        <div style="display:flex">

                <div v-for="(product, index) in getProducts" :key="index">
                    <img :src="product.image" style="width: 100px;">
                    <p>{{product.title}}</p>
                    <p>{{product.price}}</p>
                    <button type="button" @click="actIncrement(product)">add</button>
                    <hr/>
                </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { Mixins } from "@/mixins/altMixins"


export default {
    data () {
        return {
            name: "abcdef"
        }
    },
   computed: { 
       ...mapGetters(['getItems', 'getProducts', 'getCounter'])
   },
   methods: {
       ...mapMutations(['setItems', 'setProducts', 'setCounter']),
       ...mapActions(['actGetProducts']),
       actIncrement () {
           let flag = this.getCounter;
           this.setCounter(flag + 1)
       }
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

       this.actGetProducts().then((res) => {
           console.log("this.get", res)
           this.setProducts(res.data)
       })

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