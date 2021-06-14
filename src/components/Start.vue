<template>
  <div id="hellow">
    <div @click="clickMe" :class="[colorset, bgcolor]"> I am Red </div>
    <input type="text" :abcd="bgcolor" v-model="newVal" @focus="iamFocus" :class="focusdata">
   
     <div>{{age}} is odd number </div>
     
   <hr/>
   <br/>
    <i-color-comp></i-color-comp>

     <hr/>
    <br/>
    <watch-com></watch-com>

      <el-button>Default</el-button>
       <el-button type="primary">Primary</el-button>

       
<el-dropdown>
  <el-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>

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
    'i-color-comp': colorComp,
    'watch-com': () => import('./components/watch-computed.vue')
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

  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }


</style>
