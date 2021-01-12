<template>
    <div class="finder">
        <span class="finder__label">
            Find film:
        </span>

        <label>
            <input
                    type="text"
                    @input="changeRequestDataHandler($event.target.value)"
            >
            <span class="finder__icon">&#x26B2;</span>
        </label>
    </div>
</template>

<script>
    import {useStore} from "vuex";

    export default {
        name: "Finder",
        setup() {
            const store = useStore();

            const changeRequestDataHandler = newRequestData => {
                store.dispatch({
                    type: 'changeRequest',
                    newRequestData
                })
            }

            return {
                changeRequestDataHandler,
            }
        }
    }
</script>

<style scoped>
    .finder {
        display: flex;
        align-items: center;
    }

    .finder__label {
        text-transform: uppercase;
        font-size: 25px;
        font-style: oblique;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .finder span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 25px;
        margin: 0 10px 0 0;
    }

    .finder label {
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        padding: 0 3px;
        align-items: center;
    }

    .finder input {
        background: transparent;
        outline: none;
        border: 0;
    }

    .finder__icon {
        transform: rotate(-45deg);
    }
</style>
