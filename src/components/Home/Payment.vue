<template>
    <div>
        Payment.vue
        <router-link :to="{name: 'home'}">abcd</router-link>

        <div @click="sendback()">welcome</div>

        <h1 @click="getData(732127)">GetPin</h1>


        
    </div>
</template>

<script>
import { actGetPin } from '../../service/utils'
export default {
    
    methods: {
        async getData (pin ) {

            // promise


            // actGetPin(pin).then((res) => {
            //     console.log(res.data[0].PostOffice[0].Name)
            // }).catch ( (err) => {
            //     console.log(err)
            // });


            //async await

             var res = await actGetPin(pin);
             console.log(res.data[0].PostOffice[0].Name)


        },
        sendback () {
            // this.$router.push({
            //     name: 'home',
            //     query: { name: 'mob', 'age': 12}
            // })
             this.$router.push({  // http://localhost:8080/counter/delhi/277?name=mob&age=12
                name: 'counter',
                params: {name: 'delhi', id: 277 },
                query: { name: 'mob', 'age': 12}
            })
        }
    }
}
</script>

<style scoped>

</style>