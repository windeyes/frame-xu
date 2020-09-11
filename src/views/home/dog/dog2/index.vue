<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.mustKeep"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.mustKeep"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
