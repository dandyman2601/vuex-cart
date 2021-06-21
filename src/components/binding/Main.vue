<template>
  <div style="border: 1px solid"> 
        <keep-alive>
            <component :is="selected"></component>
        </keep-alive>

        <button type="button" @click="changeLetter('B')" value="changeLetter">changeB</button>
        <button type="button" @click="changeLetter('A')" value="changeLetter">changeA</button>
        <button type="button" @click="changeLetter('C')" value="changeLetter">changeC</button>

 </div>
</template>

<script>
export default {
    data () {
        return {
            selected: ''
        }
    },
    methods: {
        changeLetter (letter) {
              if (letter == "A") {
            this.selected = () => import('./A.vue');
        } else if (letter == "B") {
            this.selected = () => import('./B.vue');
        } else {
            this.selected = () => import('./C.vue');
        }
        }
    },
    mounted () {
        if (this.$route.query.name == "A") {
            this.selected = () => import('./A.vue');
        } else if (this.$route.query.name == "B") {
            this.selected = () => import('./B.vue');
        } else {
            this.selected = () => import('./C.vue');
        }
    },
    components: {
        A: () => import('./A.vue'),
        // B: () => import('./B.vue'),
        // C: () => import('./C.vue')
    }
}
</script>

<style>

</style>