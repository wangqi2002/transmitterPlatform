import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.css'
import './styles/font.css'
import App from './App.vue'
import echarts from "./units/echarts";

const app = createApp(App)

app.config.globalProperties.$echarts = echarts

app.use(Antd).mount('#app')
