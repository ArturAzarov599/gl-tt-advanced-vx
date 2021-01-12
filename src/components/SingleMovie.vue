<template>
    <li class="single-movie">
        <router-link
                :to="{name:'Movie', params:{id: movie.id}}"
        >
            <div @click="pushToLS(movie)"
                 class="single-movie__image">
                <img
                        :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2`+movie.poster_path"
                        alt="">
            </div>

            <h4>{{shortestTitle}}</h4>
        </router-link>
        <p>release date: {{movie.release_date}}</p>
        <ul v-if="getMoviesGenre" class="single-movie__genre">
            Genres:
            <li v-for="movieGenre of getMoviesGenre" :key="movieGenre.id"> {{movieGenre.name}}</li>
        </ul>

        <div v-if="type">
            <CustomButton
                    label="remove"
                    @click="removeFromFavourites(movie.id)"
            />
        </div>
    </li>
</template>

<script>
    import {computed, ref} from "vue";
    import CustomButton from "./CustomButton";
    import {useStore} from "vuex";
    import {useState} from "../store/helpers";

    export default {
        name: "SingleMovie",
        components: {CustomButton},
        props: ['movie', 'type'],
        setup(props) {
            const store = useStore();
            const shortestTitle = computed(() => {
                if (props.movie.title.length < 20) {
                    return props.movie.title
                } else {
                    return props.movie.title.substring(0, 20) + ".."
                }
            });
            const {genres} = useState(['genres'])
            console.log(genres);

            const pushToLS = (movie) => {
                localStorage.setItem("movie", JSON.stringify(movie))
            };

            const removeFromFavourites = id => {
                const favoriteMovies = ref(JSON.parse(localStorage.getItem("movies")));
                const findMovieIndex = favoriteMovies.value.findIndex(favoriteMovie => favoriteMovie.id === id);
                favoriteMovies.value.splice(findMovieIndex, 1);
                store.commit('changeFavouriteMoviesList', favoriteMovies.value)
                return localStorage.setItem("movies", JSON.stringify(favoriteMovies.value))
            }

            const getMoviesGenre = computed(() => {
                if (props.movie.genre_ids) {
                    return props.movie.genre_ids.map(genreId => genres.value.filter(genre => genre.id === genreId)).flat();
                }
                return []
            })

            return {
                pushToLS,
                shortestTitle,
                removeFromFavourites,
                getMoviesGenre
            }
        }
    }
</script>

<style scoped>
    .single-movie {
        flex: 0 0 23%;
        border: 1px solid white;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
    }

    .single-movie__image {
        position: relative;
        padding: 0 0 100% 0;
        overflow: hidden;
    }

    .single-movie__image img {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }

    .single-movie__image:hover img {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .single-movie__genre {
        /*display: flex;*/
    }

    .single-movie__genre li {
        margin: 0 5px 0 0;
        text-decoration: underline;
        color: silver;
    }

    .single-movie__genre li::after {
        content: ",";
    }

    .single-movie__genre li:last-child::after {
        content: ".";
    }

    @media (max-width: 767px) {
        .single-movie {
            flex: 0 0 45%;
        }
    }

    @media (max-width: 500px) {
        .single-movie {
            flex: 0 0 90%;
        }
    }
</style>
