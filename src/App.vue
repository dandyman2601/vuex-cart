<template>
  <div id="hellow">
    <div @click="clickMe" :class="[colorset, bgcolor]"> I am Red </div>
    <input type="text" :abcd="bgcolor" v-model="newVal" @focus="iamFocus" :class="focusdata">
   
     <div>{{age}} is odd number </div>
     
   <hr/>
   <br/>
    <i-color-comp></i-color-comp>
    
  </div>
</template>

<script>

import colorComp from './components/Color.vue'

export default {

  data () {
    return {
      name: 'abc',
      age: 22,
      newAge: 0,
      colorset: 'color', // red
      bgcolor: 'bg',
      newVal : 400,
      focusdata: ''
    }
  },
  methods: {
    clickMe () {
      let results = this.colorset;
      this.colorset = results == 'color' ? "colorBlue" : 'color'
     
    },
    iamFocus () {
      this.focusdata = "colorBlue";
    }
  },
  beforeCreate () {
    console.log("beforeCreate")
  },
  created () {
    console.log("created")
  },
  mounted () {
    console.log("mounted")

    setTimeout(() => {
      this.age = 88;
    }, 3000)
  },
  components: {
    'i-color-comp': colorComp
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.color {
  color: red;
}
.colorBlue {
 color: blue
}
.bg {
  background-color: black;
}

</style>
