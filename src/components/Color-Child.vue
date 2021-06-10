<template>
  <div style="margin-left: 11px;">
      <img :src="photos.url" width="200px" @click="getMeImageName">
      <img>

      <p style="font-size:27px;"> name: {{photos.name}} </p>
  </div>
</template>

<script>
export default {

    props: ['photos'],
    methods: {
        getMeImageName () {
            this.$emit('callbackme', this.photos.name)
        }
    }
}
</script>

<style>

</style>