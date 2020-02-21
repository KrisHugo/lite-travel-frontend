<template>
        <b-navbar id="TopBar" toggleable="lg" class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" style="float: top">
            <b-container>
                <b-navbar-brand class="navbar-brand" to="/">
                    轻旅
                </b-navbar-brand>
                <b-navbar-toggle class="navbar-toggler" type="button" target="nav-collapse">Menu</b-navbar-toggle>
                <b-collapse id="nav-collapse" class="collapse navbar-collapse  ml-auto" is-nav>
                    <b-navbar-nav class="navbar-nav ml-auto">
                        <b-nav-item class="nav-item active" to="/">Index</b-nav-item>
                        <b-nav-item class="nav-item" to="/places">Places</b-nav-item>
                        <b-nav-item class="nav-item" to="/flight">Flight</b-nav-item>
                        <b-nav-item class="nav-item" to="/hotel">Hotel</b-nav-item>
                        <b-nav-item class="nav-item" to="/blog">Blog</b-nav-item>
                        <b-nav-item-dropdown class="nav-item" right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                User
                            </template>
                            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                            <b-dropdown-item to="/orders">Orders</b-dropdown-item>
                            <b-dropdown-item to="/message">Message</b-dropdown-item>
                            <b-dropdown-item to="/signOut">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
</template>

<script>
    export default {
        name: "TopBar",
    }
</script>

<style scoped>
    @import "../../../public/css/style.css";
</style>
