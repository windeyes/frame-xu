<template>
  <div>
    列表<button @click="()=>{num++}">add</button>
    <router-link to="/home/dog2/detail">详情</router-link>
    {{num}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style>
</style>
