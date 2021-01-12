<template>
    <div class="movies">
        <Finder/>
        <div v-if="loading" class="movies-loader">
            <Loader/>
        </div>

        <div v-else class="movies-list">

        </div>
    </div>
</template>

<script>
    import Finder from "../components/Finder";
    import Loader from "../components/CustomLoader";
    import {useMutation, useState} from "../store/helpers";
    import {watchEffect} from "vue";

    export default {
        name: "Movies",
        components: {Loader, Finder},
        setup() {
            const {loading} = useState(['loading']);
            const {showLoading} = useMutation(['showLoading']);
            const {hideLoading} = useMutation(['hideLoading']);

            watchEffect(() => {
                console.log("watchEffect");
                showLoading()
                setTimeout(() => {
                    hideLoading()
                }, 2000)
            })

            return {
                loading
            }
        }
    }
</script>

<style scoped>
    .movies {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .movies-loader {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
