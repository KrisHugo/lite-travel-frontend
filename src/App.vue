<template>
    <div id="app">
        <top-bar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopBar from "./components/TopBar/TopBar";
    // import hello from './components/HelloWorld.vue';
    // import bg from '@/../public/img/bg_1.jpg';



    export default {
        name: "App",
        components: {
            TopBar,
            // hello,
            // bgImg: bg,
        },
        // data(){
        //     return {
        //         // message : 'TestMessage',
        //         // img : bg,
        //     }
        // },
        // methods: {
        //     linkGen(pageNum) {
        //         return pageNum === 1 ? '?' : `?page=${pageNum}`
        //     }
        // }
    }

</script>

<style>
</style>
