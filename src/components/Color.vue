<template>
  <div style="border: 1px solid"> 
    <h1 v-if="flag"> i am difffrent component , name is color.vue {{title}} </h1>

    <div style="display:flex;background: red;">
       <Child v-for="(item, key) in dataset" :key="key" :photos="item" @callbackme="getbackName"></Child>
    </div>

 </div>
</template>

<script>
import Child from './Color-Child.vue'
export default {
  data () {
      return {
          flag: true,
          arr: [],
          dataset: [],
          title: ''
      }
  },
  methods : {
    getbackName (item) {
        console.log(item)
        this.title = item
    }
  },
  mounted () {

    this.arr = ['https://images.unsplash.com/photo-1623233954193-b9bceb1426f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max', 'https://images.unsplash.com/photo-1622129993909-7160f364380e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max', 'https://images.unsplash.com/photo-1620611824637-d33a5c34dec8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max']

    this.dataset = [
      {url: this.arr[0], name: 'apple'},
      {url: this.arr[1], name: 'orange'},
      {url: this.arr[2], name: 'pineapple'},
    ]
    console.log(this.dataset)
  },
  components: {
    Child
  }
}
</script>

<style>

</style>