<template>
  <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" class="menu"  background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <template v-for="item in rules">
      <!-- 一级菜单 -->
      <router-link v-if="item.path==='index'" :to="item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.children[0].path">
          <i :class="'iconfont icon-' + item.children[0].meta.icon"/>
          <span class="item-title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!-- 包含子菜单（暂时最多二级） -->
      <el-submenu v-else :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="'iconfont icon-' + item.meta.icon"/>
          <span class="item-title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="child.path!='index'">
          <router-link :to="item.path+'/'+child.path" :key="child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              <i :class="'iconfont icon-' + child.meta.icon"/>
              <span class="item-title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import menuRoute from '@/menu'

export default {
  name: 'sidebarfield',
  data () {
    return {
      rules: menuRoute
    }
  },
  computed: mapState({
    isCollapse: state => { return !state.common.isCollapse }
  })
}
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
  width: 200px;
}
.item-title {
  padding-left: 5px;
}

.el-submenu__title i {
  color: #fff;
}
.el-menu {
  border-right: solid 0px #fff
}
.el-menu-item i {
  color: #fff;
}

.el-menu-item.is-active i {
  color: rgb(64, 158, 255);
}

</style>
