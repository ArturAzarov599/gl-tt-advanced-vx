import {createWebHistory, createRouter} from "vue-router";
import Movies from "../views/Movies";
import FavouriteMovies from "../views/FavouriteMovies";
import Movie from "../views/Movie";

const routes = [
    {
        path: "/movies",
        name: "Movies",
        component: Movies
    },
    {
        path: "/favourites",
        name: "Favourites",
        component: FavouriteMovies
    },
    {
        path: "/movies/:id",
        name: "Movie",
        component: Movie
    },
    {
        path: "/",
        redirect: "/movies"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
