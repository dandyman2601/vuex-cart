<template>
    <div>
        cart => {{getCounter}}
    <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default { 
    computed: {
        ...mapGetters(['getCounter'])
    },
    created() { 

    }, 
    mounted () {
        
    }
}
</script>

<style scoped>

</style>