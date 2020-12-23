/**
 * Date: 12/7/20
 */

import axios from 'axios';
import {Toast} from 'vant';

const baseUrl = process.env.VUE_APP_BASE_URL || '';
const apiPath = process.env.VUE_APP_BASE_API || ''; // 本地代理才能使用到的

const service = axios.create({
    baseURL: baseUrl + apiPath, // api的base_url
    timeout: 60 * 1000 // request timeout 60s
});

// request interceptor
service.interceptors.request.use(config => {
    return config;
}, error => {
    // Do something with request error
    console.error(error); // for debug
    Promise.reject(error);
});

service.interceptors.response.use(response => {
    const res = response.data || {};

    if (res.status === 0) {
        return res.data;
    } else {
        return Promise.reject(res.message || 'error');
    }
}, error => {
    let response = error.response || {};
    let message = '网络异常';
    // 断网情况，会没有statusText
    if (response.statusText) {
        message = response.statusText + ':' + response.status
    }
    Toast.fail({
        message: message
    });
    return Promise.reject(error);
});

export default service;
