<template>
    <div>
            <Drawer></Drawer>
            <v-toolbar flat color="transparent">
                <!--<v-toolbar-title><h1 class="headline text-uppercase black&#45;&#45;text">Main menu goes here</h1></v-toolbar-title>-->
                <v-spacer></v-spacer>
                <v-btn icon><v-icon>search</v-icon></v-btn>
                <v-btn icon><v-icon>more_vert</v-icon></v-btn>
            </v-toolbar>


        <router-view class="pa-2"></router-view>
    </div>
</template>

<script>
    // import Breadcrumbs from "./Breadcrumbs";
    import Drawer from '@/components/Drawer'
    export default {
        name: "Topbanner",
        // components: {Breadcrumbs}
       
        
    }
</script>

<style scoped>
    .topbanner
    {
        background: linear-gradient(#6a6ce5,#825ee4);
    }
    .header-color
    {
        color: #fff;
    }

</style>