<template>
    <header class="header">
        <nav class="header__body container">
            <h1 class="header__title">
                Movies Vuex
            </h1>

            <ul class="header__menu" :class="{show: !showMenu}">
                <li>
                    <router-link :to="{name:'Movies'}">Movies</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Favourites'}">Favourites</router-link>
                </li>
            </ul>

            <div @click="toggleMenu" class="header__burger" :class="{rotate: !showMenu}">
                <span></span>
            </div>
        </nav>
    </header>
</template>

<script>
    import {useMutation, useState} from "../store/helpers";

    export default {
        name: "Navigationbar",
        setup() {
            const {showMenu} = useState(['showMenu'])
            const {updateShowMenu} = useMutation(['updateShowMenu'])
            const toggleMenu = () => updateShowMenu();

            return {
                toggleMenu,
                showMenu
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .header::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        background: forestgreen;
    }

    .header__body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        z-index: 3;
    }

    .header__title {
        display: block;
        font-size: 30px;
        color: #2c3e50;
        letter-spacing: 1px;
        font-style: oblique;
        text-transform: uppercase;
        font-weight: 700;
        z-index: 3;
    }

    .header__burger {
        display: none;
    }

    .header__menu {
        display: flex;
        z-index: 3;
    }

    .header__menu li {
        margin: 0 0 0 15px;
    }

    .header__menu li a {
        color: white;
        text-transform: uppercase;
        font-style: italic;
        font-size: 20px;
    }

    .header__menu li a.router-link-exact-active {
        color: rebeccapurple;
        text-decoration: underline;
    }

    @media (max-width: 767px) {
        .header__body {
            height: 60px;
        }

        .header__menu {
            position: fixed;
            background: red;
            top: 0;
            left: -100%;
            padding: 70px 20px 30px 20px;
            z-index: 2;
            width: 100%;
            height: 100%;
            flex-direction: column;
            transition: 0.7s;
        }

        .header__menu.show {
            left: 0;
        }

        .header__menu li {
            margin: 0 0 20px 0;
        }

        .header__burger {
            display: block;
            position: relative;
            z-index: 3;
            width: 30px;
            height: 20px;
        }

        .header__burger span {
            position: absolute;
            background: #2c3e50;
            width: 100%;
            height: 2px;
            top: 9px;
        }

        .header__burger::after,
        .header__burger::before {
            content: "";
            position: absolute;
            background: #2c3e50;
            width: 100%;
            height: 2px;
            transition: .5s;
        }

        .header__burger::after {
            bottom: 0;
        }

        .header__burger::before {
            top: 0;
        }

        .header__burger.rotate::before {
            transform: rotate(45deg);
            transition: .5s;
            top: 9px;
        }

        .header__burger.rotate span {
            transform: scale(0);
        }

        .header__burger.rotate::after {
            transform: rotate(-45deg);
            transition: .5s;
            top: 9px;
        }

    }

</style>
