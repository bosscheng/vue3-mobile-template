/**
 * Date: 12/7/20
 */
import {createRouter, createWebHashHistory} from "vue-router";
import routeMap from "./routeMap";

const router = createRouter({
    scrollBehavior: () => ({y: 0}),
    history: createWebHashHistory(),
    routes: routeMap
});

export default router
