import store from '@/store'
import { vueInstance } from '@/main'
import router from '@/router'

function toSubA () {
  history.pushState(null, null, '/#/subPageA')
}

function toSubA2 () {
  history.pushState(null, null, '/#/subPageA/page2')
}

function toSubB () {
  history.pushState(null, null, '/#/subPageB')
}

const eventMap = {
  TO_SUB_A: toSubA,
  TO_SUB_A2: toSubA2,
  TO_SUB_B: toSubB
}

/**
 * 接收子模块通知事件
 * @param Object type: 事件类型;data: 参数
*/
export const onMessage = ({ type, data } = {}) => {
  eventMap[type] && eventMap[type](data)
}
