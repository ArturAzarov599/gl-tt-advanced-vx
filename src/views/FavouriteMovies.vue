<template>
    <div class="favourite-movies">
        <MovieList
                :movieList="favouriteMovies"
                type="favourite"
        />
    </div>
</template>

<script>
    import MovieList from "../components/MovieList";
    import {useState} from "../store/helpers";

    export default {
        name: "FavouriteMovie",
        components: {MovieList},
        setup() {

            const {favouriteMovies} = useState(['favouriteMovies'])

            return {
                favouriteMovies
            }
        }
    }
</script>

<style scoped>

</style>
