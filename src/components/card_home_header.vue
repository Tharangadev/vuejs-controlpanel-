<template>
    <div class="pa-2 pb-0">
        <span class="card_header text-uppercase">{{title}}</span>

        <v-menu bottom left  transition="slide-y-transition">
            <v-btn icon slot="activator" ><v-icon>more_vert</v-icon></v-btn>
            <v-list class="pa-0">
                <v-list-tile
                        v-for="(item, i) in menu"
                        :key="i"
                        @click=""  class="list-single"
                >
                    <router-link tag="li" :to="item.link"> <v-list-tile-title  class="list-single">{{ item.name }}</v-list-tile-title></router-link>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: "card_home_header",
        props:['title','menu'],


    }
</script>

<style scoped>
    .list-single a
    {
        font-size: 14px;
        height: 25px;
    }
    .card_header
    {
        font-size: 18px;
        font-weight:600;
    }
</style>