<template>
    <van-nav-bar
            safe-area-inset-top
            :title="title"
            :left-arrow="!isIndex"
            @click-left="onBack"
    />
</template>

<script>
    import {ref, watch, getCurrentInstance} from "vue";
    import {useRoute} from "vue-router"
    import {isIndexView} from "../utils";

    export default {
        name: "NavBar",
        setup() {
            const {ctx} = getCurrentInstance();
            const isIndex = ref(false);
            const title = ref('');
            const route = useRoute();
            //
            const onBack = () => {
                ctx.$router.back();
            };

            watch([() => route.path, () => route.meta], ([to, newMeta]) => {
                isIndex.value = isIndexView(to);
                title.value = (newMeta || {}).name || '';
            }, {
                immediate: true
            });

            return {
                isIndex,
                title,
                onBack
            }
        }
    }
</script>

<style scoped>

</style>
