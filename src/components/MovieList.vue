<template>
    <div>
        <h1 v-if="!movieList.length">No items in List!!! To add movies <span @click="goToMovies">go here</span></h1>
        <ul v-else class="movie-list">
            <SingleMovie
                    v-for="movie of movieList"
                    :key="movie.id"
                    :movie="movie"
                    :type="type"
            />
        </ul>
    </div>

</template>

<script>
    import SingleMovie from "./SingleMovie";
    import {useRouter} from "vue-router";

    export default {
        name: "MovieList",
        components: {SingleMovie},
        props: ['movieList', 'type'],
        setup() {
            const router = useRouter();

            const goToMovies = () => router.push("/movies");

            return {
                goToMovies
            }
        }
    }
</script>

<style scoped>
    .movie-list {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0 0 0;
    }

    h1 {
        font-size: 50px;
        text-align: center;
        margin: 20px;
    }

    span {
        color: blue;
        text-decoration: underline;
    }

</style>
