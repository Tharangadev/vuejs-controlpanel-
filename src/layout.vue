<template>
    <v-container fluid pa-0 class="back_color">
        <v-layout row>
            <v-flex xs12 md12 lg12>
                <v-navigation-drawer id="drawer_color" fixed v-model="drawer" style="width:300px">
                    <!--logo-->
                    <div class="logo">
                        <img src alt>
                    </div>
                    <!--end logo-->
                    <v-divider></v-divider>
                    <!--///top avatar-->
                    <v-list   class="white--font_color">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title class="drawer-text-color text-capitalize">John Leider
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <!--///end of top avatar-->
                    <v-divider></v-divider>
                    <v-list  class="white--text">
                        <div v-for="(item,num) in list" :key="num">
                            <div v-if="!item.inner_list">
                                <v-list-tile @click="" :to="item.link">
                                    <v-list-tile-action>
                                        <v-icon class="drawer-text-color">{{item.icon}}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content class="drawer-text-color text-capitalize">{{item.name}}
                                    </v-list-tile-content>
                                </v-list-tile>
                            </div>
                            <div v-else>
                                <v-list-group @click="" >
                                    <v-list-tile slot="activator">
                                        <v-list-tile-action>
                                            <v-icon class="drawer-text-color" >{{item.icon}}</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title class="drawer-text-color text-capitalize">{{ item.name
                                                }}
                                            </v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile
                                            v-for="(subitem,number) in item.inner_list"
                                            :key="number"
                                            @click=""
                                            class="inside_drawer">
                                        <v-list-tile-action>
                                            <v-icon class="drawer-text-color">{{subitem.icon}}</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title class="drawer-text-color text-capitalize">
                                                {{subitem.name}}
                                            </v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list-group>
                            </div>
                        </div>
                    </v-list>
                </v-navigation-drawer>

                <div style="margin-left: 300px;" id="margin_contianer">
                    <v-toolbar flat color="transparent" class="toolbar_top" id="toolbar">
                        <v-btn icon @click="drawer = !drawer" class="hidden-lg-and-up">
                            <v-icon icon>view_headline</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon class="btn_toolbar" flat>
                            <v-icon>search</v-icon>
                        </v-btn>
                        <v-menu bottom left z-index="1000">

                        <v-btn icon class="btn_toolbar"  slot="activator" flat>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                            <v-list>
                                <v-list-tile>
                                <v-btn icon class="btn_toolbar" flat>
                                    <v-badge color="red">
                                        <span slot="badge"  class="notification_i" overlap>6</span>

                                        <v-icon>notifications</v-icon>
                                    </v-badge>
                                </v-btn>
                                <span class="ml-3"> New notifications</span>
                            </v-list-tile>
                                <v-list-tile>
                                    <v-btn icon class="btn_toolbar" flat>
                                        <v-badge color="red">
                                            <span slot="badge"  class="notification_i" overlap>5</span>

                                            <v-icon>mail</v-icon>
                                        </v-badge>
                                    </v-btn>
                                    <span class="ml-3"> New Emais</span>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </v-toolbar>
                    <v-divider></v-divider>
                    <router-view class=""></router-view>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "layout",
        data() {

            return {
                drawer: true,
                /////drawer menu
                list: [
                    {
                        name: "Dashboard",
                        icon: "dashboard",
                        link: "/"
                    },
                    {
                        name: "chat",
                        icon: "chat",
                        link: "/chat"
                    },
                    {
                        name: "Todo APP",
                        icon: "format_list_numbered",
                        link: "/todo"
                    },
                    {
                        name: "UI Elements",
                        icon: "arrow_drop_up",
                        inner_list: [
                            {
                                name: "Alarm",
                                icon: "alarm"
                            },
                            {
                                name: "Bookmark",
                                icon: "bookmark"
                            },
                            {
                                name: "Calander",
                                icon: "calendar_today"
                            },
                            {
                                name: "Stats",
                                icon: "donut_large"
                            }
                        ]
                    },
                    {
                        name: "Forms",
                        icon: "format_align_left",
                        link: "/forms"
                    },
                    {
                        name: "apps",
                        icon: "drag_indicator"
                    },
                    {
                        name: "Tables",
                        icon: "trending_up"
                    },
                    {
                        name: "Charts",
                        icons: "timeline"
                    },
                    {
                        name: "map",
                        icon: "trending_up",
                        link:"/map"
                    },
                    {
                        name: "Extras ",
                        icon: "mood"
                    }
                ]
            }
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #f5f6fa;
    }

    .back_color {
        background: #e5e7e6;
    }
    .drawer-text-color
    {
        color: #fff;
    }
    @media screen and (max-width: 1265px) {
        #margin_contianer {
            margin-left: 0px !important;
        }

    }
    #drawer_color
    {
        background: #273444;
    }
    #toolbar
    {
        background: #fff !important;
    }
    .drawer-text-color
    {
        color: #fff !important;
    }


</style>