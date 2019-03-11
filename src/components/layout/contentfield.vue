<template>
  <transition name="fade" mode="out-in">
    <keep-alive>
    <!-- <keep-alive :include="cachedViews"> -->
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'contentfield',
  computed: {
    cachedViews () {
      return this.$store.state.tags.cachedViews
    }
  }
}
</script>
