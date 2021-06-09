<template>
  <div>
    <h1 v-if="flag"> i am difffrent component , name is color.vue 

        <p>dhgshd</p>
    </h1>
    <h1 v-else> i am difffrent component , else part </h1>
 </div>
</template>

<script>
export default {
  data () {
      return {
          flag: true
      }
  }
}
</script>

<style>

</style>