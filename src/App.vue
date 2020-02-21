<template>
    <div id="app">
        <top-bar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopBar from "./components/TopBar/TopBar";

    export default {
        name: "App",
        components: {
            TopBar,
        },
    }

</script>

<style>
</style>
