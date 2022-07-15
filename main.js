import App from './App'
// import axios from './util/http.js'
import loading from './components/loading/loading.vue';
Vue.component('view-loader',loading);

import axios from 'axios'
// #ifndef VUE3
import Vue from 'vue'

const baseURL='https://api.vvhan.com/api/';
Vue.config.productionTip = false

Vue.prototype.$axios = axios;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app,
		baseUrl
	}
}
// #endif
