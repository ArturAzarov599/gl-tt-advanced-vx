<template>
    <div class="movie">
        <CustomButton
                label="go back"
                @click="goBack"
        />
        <div class="movie__info">
            <div class="movie__image">
                <img
                        :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2`+movie.poster_path"
                        alt="">
            </div>
            <div class="movie__text">
                <h1 class="movie__title">{{movie.title}}</h1>
                <p class="movie__release">{{movie.overview}}</p>
                <CustomButton
                        label="add to favourite"
                        @click="addToFavourite(movie)"
                />
            </div>
        </div>

    </div>
</template>

<script>
    import {useRouter} from "vue-router";
    import CustomButton from "../components/CustomButton";
    import {useStore} from "vuex";

    export default {
        name: "Movie",
        components: {CustomButton},
        setup() {
            const router = useRouter();
            const store = useStore();
            const movie = JSON.parse(localStorage.getItem("movie"));

            const goBack = () => {
                localStorage.removeItem("movie")
                router.back()
            };

            const addToFavourite = movie => {
                const favouriteMovies = JSON.parse(localStorage.getItem("movies")) || [];
                const findMovieInArray = favouriteMovies.find(localStorageItem => localStorageItem.id === movie.id);

                if (findMovieInArray) {
                    return alert("This movie already in Favorites!!!")
                }

                favouriteMovies.push({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    title: movie.title,
                    release_date: movie.release_date
                })

                store.commit('changeFavouriteMoviesList', favouriteMovies)

                return localStorage.setItem("movies", JSON.stringify(favouriteMovies));
            }

            return {
                goBack,
                movie,
                addToFavourite
            }
        }
    }
</script>

<style scoped>
    .movie {
        max-width: 800px;
        margin: 50px auto;
    }

    .movie__info {
        padding: 30px;
        width: 100%;
        display: flex;
    }

    .movie__image {
        flex: 1 1 100%;
        margin: 0 20px;
    }

    .movie__image img {
        width: 330px;
        height: 330px;
        display: block;
        object-fit: fill;
    }

    .movie__title {
        font-style: oblique;
        font-size: 40px;
        letter-spacing: 1px;
        margin: 10px 0;
        text-align: center;
    }

    .movie__release {
        margin: 0 0 15px 0;
    }

</style>
