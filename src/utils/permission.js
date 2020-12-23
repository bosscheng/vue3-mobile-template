/**
 * Date:2020/12/23
 * Desc:
 */
import router from '../router';

router.beforeEach((to, from, next) => {
    next();
});


// update title
router.afterEach((to) => {

    document.title = (to.meta && to.meta.title) || '';
});
