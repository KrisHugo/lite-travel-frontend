<template>
    <div id="Background" class="hero-wrap bg" style="height: 788px; width: 1920px">
        <!--        <div class="overlay"></div>-->
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left">
                    <h1 class="mb-4" style="opacity: 1.6">Discover <br>A new Place</h1>
                    <p style="opacity: 1.6">Find great places to stay, eat, shop, or visit from local experts</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Background",
        data: function () {
            return {
                screenHeight: document.documentElement.clientHeight,
                screenWidth: document.documentElement.clientWidth,
            }
        },
        created(){
            let _this = this;
            _this.screenWidth = document.documentElement.clientWidth;
            _this.screenHeight = document.documentElement.clientHeight;
        },
        watch: {
            'screenWidth': function (val) { //监听屏幕宽度变化
                let oIframe = document.getElementById("Background");
                oIframe.style.width = (Number(val)) + 'px';
            },
            'screenHeight': function (val) { //监听屏幕高度变化
                let oIframe = document.getElementById("Background");
                oIframe.style.height = (Number(val) + 20) + 'px';
            }
        },
        mounted() {
            let _this = this;

            let oIframe = document.getElementById("Background");
            oIframe.style.width = (Number(document.documentElement.clientWidth) - 16) + 'px';
            oIframe.style.height = (Number(document.documentElement.clientHeight) + 20) + 'px';
            window.onresize = function () { // 定义窗口大小变更通知事件
                _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
                _this.screenHeight = document.documentElement.clientHeight;
            };
        },
    }
</script>

<style scoped>
    @import "../../../public/css/style.css";
    .bg {
        background: url('../../../public/img/bg_1.jpg') center center no-repeat;
        background-size: cover;
        margin-top: -75px;
    }

    @media (max-width: 992px) {
        .bg{
            margin-top: 0;
        }
    }

</style>
