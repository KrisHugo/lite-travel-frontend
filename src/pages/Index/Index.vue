<template>
    <div id="Index">
        <div class="hero-wrap bg" :style="contentStyleObj">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                    <div class="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left text-cus">
                        <h1 class="mb-4">Discover <br>A new Place</h1>
                        <p>Find great places to stay, eat, shop, or visit from local experts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function getHeight(){
        console.log(this.contentStyleObj.height);
        this.contentStyleObj.height = window.innerHeight - 210 + 'px'//设置高度方法
    }

    getHeight();
    export default {
        name: "Index",
        data() {
            return new {
                contentStyleObj: {
                    height: ''
                },
            }
        },
        created() {
            this.getHeight();
            window.addEventListener('resize', this.getHeight);//设置监听
        },
        destroyed() {
            window.removeEventListener('resize', this.getHeight)//去除监听
        },
    }

</script>

<style scoped>
    @import "../../../public/css/style.css";

    .bg{
        background: url('../../../public/img/bg_1.jpg') center center no-repeat;
    }

</style>
