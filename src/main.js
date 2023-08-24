import { createApp } from 'vue'
import './style.css'
import './styles/font.css'
import App from './App.vue'
import echarts from "./units/echarts";

const app = createApp(App)

app.config.globalProperties.$echarts = echarts

app.mount('#app')
