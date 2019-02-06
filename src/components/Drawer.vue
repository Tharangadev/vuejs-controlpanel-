<template>
    <v-navigation-drawer  id="drawer_color" fixed v-model="drawer">
        <!--logo-->
        <div class="logo">
            <img src="" alt="">
        </div>
        <!--end logo-->
        <v-divider></v-divider>
        <!--///top avatar-->
        <v-list>

            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title  class="drawer-text-color text-capitalize">John Leider</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>

        <!--///end of top avatar-->
        <v-divider></v-divider>
        <v-list>
<!-- menu -->
        <div v-for="(item,num) in list" :key="num">
            <div v-if="!item.inner_list">
                <v-list-tile @click="" :to="item.link">
                    <v-list-tile-action>
                       <v-icon class="drawer-text-color">{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content  class="drawer-text-color  text-capitalize">{{item.name}}</v-list-tile-content>
                </v-list-tile>
            </div>
            <div v-else>
                <v-list-group @click="">
                    <v-list-tile slot="activator">
                        <v-list-tile-action>
                            <v-icon class="drawer-text-color" >{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title  class="drawer-text-color text-capitalize">{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile  v-for="(subitem,number) in item.inner_list"  :key="number" @click="" class="inside_drawer">

                        <v-list-tile-action>
                            <v-icon class="drawer-text-color">{{subitem.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title  class="drawer-text-color text-capitalize">
                                {{subitem.name}}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </div>
        </div>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import store from "@/store/index";
    
    export default {
        name: "Drawer",
        
        data() {
            return { 
                drawer:true,
                list: [
                    {
                        name: 'Dashboard',
                        icon: 'dashboard',
                        link:'/'
                    },
                    {
                        name: 'chat',
                        icon: 'chat',
                        link:'/chat'
                    }, {
                        name: 'Todo APP',
                        icon: 'format_list_numbered',
                        link:'/todo'

                    },
                    {
                        name: 'UI Elements',
                        icon: 'arrow_drop_up',
                        inner_list:[
                            {
                                name: 'Alarm',
                                icon: 'alarm'
                            },
                            {
                                name: 'Bookmark',
                                icon: 'bookmark'
                            },
                            {
                                name: 'Calander',
                                icon: 'calendar_today'
                            },
                            {
                                name: 'Stats',
                                icon: 'donut_large'
                            }
                        ]
                    },
                    {

                        name: 'Forms',
                        icon: 'format_align_left'
                    }, {

                        name: 'apps',
                        icon: 'drag_indicator'
                    },
                    {
                        name: 'Tables',
                        icon: 'trending_up'
                    },
                    {
                        name: 'Charts',
                        icons: 'timeline'
                    },
                    {
                        name: 'map',
                        icon: 'trending_up'
                    },
                    {

                        name: 'Extras ',
                        icon: 'mood'
                    }]
            }
        }
    }
</script>

<style scoped>
#drawer_color
{
    background: #202944;
}
 .drawer-text-color
{
     color: #8d909a !important;
}
    .inside_drawer
    {
        background:#2e3a5fcc;
    }
</style>
