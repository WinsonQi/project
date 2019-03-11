import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import tags from './modules/tags'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    tags
  }
})

export default store
