<template>
    <div class="movies">
        <Finder/>

        <PageSwitcher/>

        <div v-if="loading" class="movies-loader">
            <Loader/>
        </div>

        <div v-else>
            <MovieList
                    :movieList="movieList"
            />
        </div>
    </div>
</template>

<script>
    import Finder from "../components/Finder";
    import Loader from "../components/CustomLoader";
    import {useMutation, useState} from "../store/helpers";
    import {watchEffect} from "vue";
    import {useStore} from "vuex";
    import MovieList from "../components/MovieList";
    import PageSwitcher from "../components/PageSwitcher";

    export default {
        name: "Movies",
        components: {PageSwitcher, MovieList, Loader, Finder},
        setup() {
            const store = useStore();
            const {loading} = useState(['loading']);
            const {showLoading} = useMutation(['showLoading']);
            const {hideLoading} = useMutation(['hideLoading']);
            const {movieList} = useState(['movieList'])

            watchEffect(() => {
                showLoading()

                store.dispatch({
                    type: 'getGenres'
                })

                store.dispatch({
                    type: 'changeRequest',
                    newRequestData: ""
                })

                setTimeout(() => {
                    hideLoading()
                }, 1000)
            })

            return {
                loading,
                movieList
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
