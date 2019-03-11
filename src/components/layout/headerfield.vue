<template>
  <div class="bg">
    <div class="left-group">
      <div class="logo">
        <svg-icon name="esquel_logo" scale="15" style="color: #B60034;"></svg-icon>
        <span style="font-size: 22px; padding-left: 10px;">Sales F01</span>
      </div>
<!--      <div class="menu">
        <i class="iconfont icon-menu" @click="toggleMenu" style="cursor: pointer;"/>
      </div>-->
    </div>
    <div class="right-group">

    </div>
  </div>
</template>

<script>

export default {
  name: 'headerfield',
  components: {

  },
  methods: {
    toggleMenu () {
      this.$store.commit('SET_TOGGLE_MENU')
    }
  }
}
</script >

<style scoped>
.bg {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.left-group {
  display: flex;
  height: 100%;
}
.logo {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
}
.right-group {
  display: flex;
  width: 160px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
}
</style>
