import {createStore} from "vuex";

const store = createStore({
    actions: {
        async changeRequest(context, payload) {
            const {commit, state} = context;
            const {request, currentPage} = state;
            await commit('changeRequest', payload.newRequestData);

            const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=ce6185823155edaea7657f55020b7506&language=en-US&page=${currentPage}`
            const usersRequestData = `https://api.themoviedb.org/3/search/movie?api_key=ce6185823155edaea7657f55020b7506&language=en-US&query=${request}&page=${currentPage}&include_adult=false`
            const url = request ? usersRequestData : popularMovies

            fetch(url)
                .then(response => response.json())
                .then(data => commit('changeMovies', data))
                .catch(error => console.log(error));
        },
        async getGenres(context) {
            const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=ce6185823155edaea7657f55020b7506&language=en-US`;
            fetch(genresUrl)
                .then(response => response.json())
                .then(genres => context.commit("updateGenres", genres.genres))
        }
    },
    mutations: {
        updateShowMenu(state) {
            state.showMenu = !state.showMenu
        },
        showLoading(state) {
            state.loading = true
        },
        hideLoading(state) {
            state.loading = false
        },
        changeRequest(state, string) {
            state.request = string
        },
        changeMovies(state, apiResponse) {
            state.movieList = apiResponse.results;
            state.totalPages = apiResponse.total_pages;
            state.currentPage = apiResponse.results.length ? state.currentPage : 1
        },
        increment(state) {
            state.currentPage += 1
        },
        decrement(state) {
            state.currentPage -= 1
        },
        changeFavouriteMoviesList(state, movies) {
            state.favouriteMovies = movies
        },
        updateGenres(state, genres) {
            state.genres = genres
        }
    },
    state: {
        showMenu: false,
        loading: true,
        request: "",
        movieList: null,
        totalPages: 1,
        currentPage: 1,
        favouriteMovies: JSON.parse(localStorage.getItem("movies")) || [],
        genres: null
    }
})

export default store;
