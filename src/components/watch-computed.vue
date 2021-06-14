<template>
    <div>testonly 
    <input type="text" v-model="usd">
    <input type="text" v-model="inr">


    <h1>{{getName()}}</h1>

    <p>{{getName()}}</p>

    <h2>{{getName()}}</h2>

     <!-- <h1>{{getNameCom}}</h1>

    <p>{{getNameCom}}</p>

    <h2>{{getNameCom}}</h2> -->
    </div>
</template>

<script>
export default {

    data () {
        return {
            name: "",
            firstname: 'mobiotics',
            lastname: "bangalore",
            usd:0,
            inr:0
        }
    },
    watch: {
        name (newVal) {
            console.log(newVal)
            if (newVal.length < 2) {
                alert(1)
            }
        },
        usd (val) {
            this.inr = val * 72
        },
        inr (val) {
            this.usd = val / 72
        }
    },
    computed: {
        getNameCom() {

            // 30 lines
        //   return this.firstname + ' ' + this.lastname;

         return Math.random();
        }
    },
    methods: {
        getName () {

            // 30 lines

          // return this.firstname + ' ' + this.lastname;

           return Math.random();
        }
    },
    mounted () {
        this.name = "mobiotics";

        console.log(this.name + "tyweywfe")
    }


}
</script>

<style>

</style>