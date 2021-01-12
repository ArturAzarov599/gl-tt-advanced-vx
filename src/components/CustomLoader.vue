<template>
    <div class="custom-loader"></div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .custom-loader {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border-top: 3px solid white;
        animation: spin infinite 2s;
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }

    }

</style>
