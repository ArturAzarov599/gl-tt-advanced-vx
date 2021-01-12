import {createWebHistory, createRouter} from "vue-router";
import Movies from "../views/Movies";
import FavouriteMovies from "../views/FavouriteMovies";

const routes = [
    {
        pathname: "/movies",
        name: "Movies",
        component: Movies
    },
    {
        pathname: "/favourites",
        name: "Favourites",
        component: FavouriteMovies
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
