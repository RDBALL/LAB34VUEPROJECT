import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

export default defineNuxtPlugin(nuxtApp => {
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
})
