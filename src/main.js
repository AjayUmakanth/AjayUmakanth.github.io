import Vue from 'vue'
import App from './App.vue'

// — AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// — moment (for your date formatting helper)
import moment from 'moment'

// — Ant Design Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

// make moment available in all components as this.$moment
Vue.prototype.$moment = moment

// register all Antd components (you can also do on‑demand imports if you prefer)
Vue.use(Antd)

new Vue({
  render: h => h(App),
  mounted() {
    // initialize AOS after the app has mounted
    AOS.init({ once: true /* only animate once per element */ })
  }
}).$mount('#app')
