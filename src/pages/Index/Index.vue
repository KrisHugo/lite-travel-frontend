<template>
    <div id="Index" class="hero-wrap bg" style="height: 788px; width: 1290px">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left text-cus">
                    <h1 class="mb-4">Discover <br>A new Place</h1>
                    <p>Find great places to stay, eat, shop, or visit from local experts</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data: function () {
            return {
                screenHeight: document.documentElement.clientHeight,
                screenWidth: document.documentElement.clientWidth,
            }
        },
        watch: {
            'screenWidth': function (val) { //监听屏幕宽度变化
                let oIframe = document.getElementById("Index");
                oIframe.style.width = (Number(val)) + 'px';
            },
            'screenHeight': function (val) { //监听屏幕高度变化
                let oIframe = document.getElementById("Index");
                oIframe.style.height = (Number(val) + 20) + 'px';
            }
        },
        mounted() {
            let _this = this;
            _this.screenWidth = document.documentElement.clientWidth;
            _this.screenHeight = document.documentElement.clientHeight;
            window.onresize = function () { // 定义窗口大小变更通知事件
                _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
            };
        },/*
        destroyed() {
            window.removeEventListener('resize', function () {
                this.contentStyleObj.height = window.innerHeight + 'px';
            });//去除监听
        },*/
    }
</script>

<style scoped>
    @import "../../../public/css/style.css";

    .bg {
        background: url('../../../public/img/bg_1.jpg') center center no-repeat;
        background-size: cover;
        transform: translateY(-75px); /**上移元素**/
    }

    @media (max-width: 992px) {
        .bg{
            transform: translateY(0px); /**恢复元素位移**/
        }
    }

</style>
