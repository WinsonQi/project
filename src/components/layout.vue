<template>
  <el-container class="container">
    <el-header class="header">
      <headerfield/>
    </el-header>
    <el-container>
      <el-aside width="200px" style="min-width: 200px; background-color: #304156; transition: all 0.4s;" :class="{isCollapse: isCollapse}">
        <sidebarfield/>
      </el-aside>

      <el-container class="content">
        <tagsView/>
        <el-main class="main">
          <contentfield/>
        </el-main>
        <el-footer style="background: #fff; height: 0px; min-height: 0px;">
          <!-- <footerfield/> -->
          <!-- <footerfield v-if="this.$route.path=='/home/index'"/> -->
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import contentfield from './layout/contentfield'
import headerfield from './layout/headerfield'
import sidebarfield from './layout/sidebarfield'
import footerfield from './layout/footerfield'
import tagsView from './layout/tagsView'
import { mapState } from 'vuex'

export default {
  name: 'layout',
  components: {
    contentfield,
    headerfield,
    sidebarfield,
    footerfield,
    tagsView
  },
  data () {
    return {
      msg: 'i am layout'
    }
  },
  computed: mapState({
    isCollapse: state => { return !state.common.isCollapse }
  })
}
</script>

<style scoped>
.container {
  height: 100vh;
}
.header {
  padding: 0;
  z-index: 100;
  /* box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1); */
}
.content {
  background: #f0f2f5!important;
}
.main {
  background: #fff;
}
.isCollapse {
  width: 64px!important;
  min-width: 64px!important;
}
</style>
