<template>
    <div class="page-switcher">
        <CustomButton
                label="prev"
                @click="decrementPage"
        />
        <span class="page-switcher__page">{{currentPage}} of {{totalPages}}</span>
        <CustomButton
                label="next"
                @click="incrementPage"
        />
    </div>
</template>

<script>
    import CustomButton from "./CustomButton";
    import {useStore} from "vuex";
    import {useState} from "../store/helpers";

    export default {
        name: "PageSwitcher",
        components: {CustomButton},
        setup() {
            const store = useStore();
            const {currentPage} = useState(['currentPage']);
            const {totalPages} = useState(['totalPages']);
            const incrementPage = () => {
                if (currentPage.value !== totalPages.value) {
                    return store.commit('increment')
                }

            }
            const decrementPage = () => {
                if (currentPage.value > 1) {
                    return store.commit('decrement')
                }
            }

            return {
                incrementPage,
                decrementPage,
                currentPage,
                totalPages
            }
        }
    }
</script>

<style scoped>
    .page-switcher {
        margin: 20px 0 0 0;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>
