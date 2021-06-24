<template>
    <div>
        <div style="display:flex">
            <div id="product_component" v-for="(product, index) in getProducts" :key="index">
                <img :src="product.image">
                <p>{{product.title}}</p>
                <p>{{product.price}}</p>
                <button type="button" @click="actIncrement(product)">add</button>
                <button type="button" @click="actDecrement(product)">remove</button>
                <hr/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    
   computed: {
       ...mapGetters(['getProducts', 'getCounter'])
   },
   methods: {
       //spread operaters to get the mutators and actions from vuex store
       ...mapMutations(['setProducts', 'setCounter']),
       ...mapActions(['actGetProducts']),
        
        actIncrement () {
            let flag = this.getCounter;
            this.setCounter(flag + 1)
        },
        actDecrement () {
            let flag = this.getCounter;
            this.setCounter(flag - 1) 
            if(flag<0){
              alert("Can't go less than 0")
              this.setCounter(0)
            }
            
        }
   },   
   mounted () {
        console.log("cart.vue =====> mounted") 

        this.actGetProducts().then((res) => {
        console.log("this.get", res)
        this.setProducts(res.data)
        })

   },
   created () {
        console.log("cart.vue =====> created")
   },
   components: {
     
   },   
}

</script>

<style scoped>

#product_component{
    border: 1px solid black;
    text-align: center;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    height: 100%;
    
}
#product_component img{
    width: 100%;
}
</style>