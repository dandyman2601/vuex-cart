<template>
    <div>
        Home Component {{numbers}}
    </div>
</template>

<script>
    import { Mixins } from "@/mixins/altMixins"
    export default {
        data () {
            return { 
                numbers: ''
            }
        },
        mounted() {
            this.numbers = this.add(40,5)
        },
        mixins: [Mixins]
    }
</script>