import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import { initStore } from './store'
import VueRouter from 'vue-router'
import { scrollToTop } from '@/utils'

Vue.use(VueRouter)

Vue.config.productionTip = false

export let router = null
export let vueInstance = null
const byQianKun = window.__POWERED_BY_QIANKUN__

function render (props = {}) {
  const {
    container,
    postMessage
  } = props
  router = new VueRouter({
    mode: 'hash',
    routes
  })
  router.beforeEach((to, from, next) => {
    scrollToTop()
    next()
  })
  vueInstance = new Vue({
    router,
    store: initStore(props),
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')

  if (byQianKun) {
    Vue.prototype.$postMessage = postMessage
  } else {
    Vue.prototype.$postMessage = () => {}
  }
}

// webpack打包公共文件路径
if (byQianKun && process.env.NODE_ENV === 'development') {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
// 独立运行
if (!byQianKun) {
  render()
}

// 生命周期
export async function bootstrap () {
}
export async function mount (props) {
  props.onGlobalStateChange((state, prevState) => {
  })
  render(props)
}
export async function unmount () {
  vueInstance.$destroy()
  vueInstance.$el.innerHTML = ''
  vueInstance = null
  router = null
}
