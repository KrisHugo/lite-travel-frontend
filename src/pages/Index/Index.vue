<template>
    <div id="Index" >
        <BG/>
        <section class="ftco-section justify-content-end ftco-search">
            <div class="container-wrap ml-auto">
                <div class="row no-gutters">
                    <div class="col-md-12 nav-link-wrap">
                        <div class="nav nav-pills justify-content-center text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link" v-bind:class="{'active' : vPills1}" v-on:click="activePills1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Flight</a>

                            <a class="nav-link" v-bind:class="{'active': vPills2}" v-on:click="activePills2" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a>

                            <a class="nav-link" v-bind:class="{'active': vPills3}" v-on:click="activePills3" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Car Rent</a>
                        </div>
                    </div>
                    <div class="col-md-12 tab-wrap">

                        <div class="tab-content p-4 px-5" id="v-pills-tabContent">

                            <div class="tab-pane fade" v-bind:class="{'show active' : vPills1}" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                <form action="#" class="search-destination">
                                    <div class="row">
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">From</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-my_location"></span></div>
                                                    <input type="text" class="form-control" placeholder="From">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Where</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control" placeholder="Where">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check In</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkin_date" placeholder="Check In">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check Out</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkout_date" placeholder="From">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Travelers</label>
                                                <div class="form-field">
                                                    <div class="select-wrap">
                                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" class="form-control">
                                                            <option value="">1</option>
                                                            <option value="">2</option>
                                                            <option value="">3</option>
                                                            <option value="">4</option>
                                                            <option value="">5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-self-end">
                                            <div class="form-group">
                                                <div class="form-field">
                                                    <input type="submit" value="Search" class="form-control btn btn-primary">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="tab-pane fade" v-bind:class="{'show active' : vPills2}" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                                <form action="#" class="search-destination">
                                    <div class="row">
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check In</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkin_date" placeholder="Check In">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check Out</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkout_date" placeholder="From">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Guest</label>
                                                <div class="form-field">
                                                    <div class="select-wrap">
                                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" class="form-control">
                                                            <option value="">1</option>
                                                            <option value="">2</option>
                                                            <option value="">3</option>
                                                            <option value="">4</option>
                                                            <option value="">5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-self-end">
                                            <div class="form-group">
                                                <div class="form-field">
                                                    <input type="submit" value="Search" class="form-control btn btn-primary">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="tab-pane fade" v-bind:class="{'show active' : vPills3}"  id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-effect-tab">
                                <form action="#" class="search-destination">
                                    <div class="row">
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Where</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control" placeholder="Where">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check In</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkin_date" placeholder="Check In">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-items-end">
                                            <div class="form-group">
                                                <label for="#">Check Out</label>
                                                <div class="form-field">
                                                    <div class="icon"><span class="icon-map-marker"></span></div>
                                                    <input type="text" class="form-control checkout_date" placeholder="From">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md align-self-end">
                                            <div class="form-group">
                                                <div class="form-field">
                                                    <input type="submit" value="Search" class="form-control btn btn-primary">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import BG from "../../components/BG/Background.vue"
    export default {
        name: "Index",
        data(){
            return{
                vPills1:true,
                vPills2:false,
                vPills3:false,
            }
        },
        components:{
            BG
        },
        mounted(){

        },
        methods: {
            activePills1 : function () {
                this.vPills1 = true;
                this.vPills2 = false;
                this.vPills3 = false;
            },
            activePills2 :function () {
                this.vPills1 = false;
                this.vPills2 = true;
                this.vPills3 = false;
            },
            activePills3: function () {
                this.vPills1 = false;
                this.vPills2 = false;
                this.vPills3 = true;
            }
        }
    }

</script>

<style scoped>
    @import "../../../public/css/style.css";
</style>
