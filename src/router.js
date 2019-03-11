import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import menuRoute from '@/menu'

Vue.use(Router)

const router = new Router({
  routes: menuRoute
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/') {
    next({ path: '/one' })
  } else {
    next()
  }
})

router.afterEach(to => {
  console.log(to)
  NProgress.done()
  window.scrollTo(0, 0)
})

export default router