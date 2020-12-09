/**
 * Date: 12/7/20
 */
const routeMap = [
    {path: '/404', component: () => import('../views/errorPage/404')},
    {path: '/502', component: () => import('../views/errorPage/502')},
    {path: '/', component: () => import("../views/index"), meta: {name: '首页'}},
    {path: '/test', component: () => import("../views/test"), meta: {name: "test"}},
];

export default routeMap;
