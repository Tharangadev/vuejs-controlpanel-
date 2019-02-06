<template>
    <div>
    <card_home_header :title="header_title" :menu="menu"></card_home_header>
    <v-card class="mt-0 ml-2 mr-2 mb-2 " flat >

        <v-card-actions class="pa-0">
            <v-flex>
                <v-list>
                    <v-list-tile @click="todostatuschange(itemno)" v-for="(item,itemno) in thelist" :key="itemno">
                        <v-list-tile-action>
                            <v-btn icon  >
                                <v-icon v-if="item.done">check_circle</v-icon>
                                <v-icon v-else>check_circle_outline</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title :class="{done:item.done}">{{item.name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>
            </v-flex>
        </v-card-actions>
        <v-card-actions color="red">
            <v-text-field flat class="background_text"
                          placeholder="Placeholder"
                          :append-icon="'add'"
                          solo
                          background-color="#f7bea8"
                          v-model="new_add"
                          @click:append="alertbb"
            ></v-text-field>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
    import Card_home_header from "./card_home_header";
    import store from "@/store/index";

    export default {
        name: "todo",
        components: {Card_home_header},
        props: ['header_title','menu'],
        methods:{
            todostatuschange(t) {
                store.commit("change_status", t);
            },
            alertbb(){
                if (this.new_add) {
                    store.commit("addnew_todo", {
                        id: this.thelist.length + 1,
                        name: this.new_add,
                        done: false
                    });
                }
                this.new_add = "";
            }
        },
        computed: {
            thelist: () => store.state.todolistlist
        },
        data(){
            return{
                new_add:""
            }
        }
    }
</script>

<style scoped>
    .add-shadow {
        box-shadow: rgb(238, 238, 238) 0px 0px 2px 1px;
    }
    .done {
        position: relative;
        display: inline-block;
    }
    .done::before,
    .done::after {
        content: "";
        width: 80%;
        position: absolute;
        left: 0;
        top: 50%;
    }
    .done::before {
        border-bottom: 1px solid black;
    }
    .background_text
    {
        background:#f19773;
    }


</style>