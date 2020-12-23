/**
 * Date: 12/7/20
 */

import {createApp} from 'vue'
import App from "./App";
import router from "./router";
import store from "./store";
import { NavBar } from 'vant';
import './utils/flexible';
const app = createApp(App);
import "./styles/index.less"

import "./utils/permission";

// support 桌面端
import '@vant/touch-emulator';

app.use(store);
app.use(router);
// vant ui
app.use(NavBar);


app.mount("#app");
