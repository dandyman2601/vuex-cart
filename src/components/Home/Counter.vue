<template>
    <div>
        Counter {{data}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            data: '',
        }
    },
    mounted () {
        // this.data = this.$route.params.name;

        this.data = this.$route.query.age;
    }
}
</script>

<style>

</style>