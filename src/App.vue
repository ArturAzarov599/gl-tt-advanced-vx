<template>
    <div id="app">
        <Navigationbar/>
        <main class="_container">
            <router-view v-slot="{ Component }">
                <transition name="page" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </main>
    </div>
</template>

<script>

    import Navigationbar from "./components/Navigationbar";

    export default {
        name: 'App',
        components: {Navigationbar}
    }
</script>

<style>
    #app {
        color: #2c3e50;
    }

    .page-enter-active, .page-leave-active {
        opacity: 0;
        transform: translateY(-12em);
    }

    .page-enter, .page-leave-to {
        transition: all .8s ease;
    }


</style>
