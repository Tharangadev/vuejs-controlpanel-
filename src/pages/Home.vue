<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs4><Home_top_cards class="ma-2" :options="topcards_details.new_accounts"></Home_top_cards></v-flex>
            <v-flex xs4><Home_top_cards class="ma-2" :options="topcards_details.sales_headline"></Home_top_cards></v-flex>
            <v-flex xs4><Home_top_cards class="ma-2" :options="topcards_details.stats"></Home_top_cards></v-flex>
        </v-layout>
        <v-layout row wrap>

            <v-flex xs12>
                <card-home color="#fff" v-bind:dataset="linechart_data" type="line" class="homecard"
                           :header_title="sales.title" :menu="sales.menu"></card-home>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md4>
                <card-home color="#fff" v-bind:dataset="barchart_data" type="bar" class="homecard"
                           :header_title="click_rate.title" :menu="click_rate.menu"></card-home>
            </v-flex>
            <v-flex xs12 md4>
                <cardtable class="mt-0 ml-2 mr-2 mb-2 homecard" :header_title="user_points.title"
                           :menu="user_points.menu"></cardtable>
            </v-flex>
            <v-flex xs12 md4>
                <Todo :header_title="todo.title" :menu="todo.menu"></Todo>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md4>
                <card-home color="#fff" v-bind:dataset="piechat_data" type="pie" class="homecard"
                           :header_title="Market_Values.title" :menu="Market_Values.menu"></card-home>
            </v-flex>
            <v-flex xs12 md4>
                <Detailed_block class="ma-2" :header_title="detailed_block.title"
                                :menu="detailed_block.menu"></Detailed_block>
            </v-flex>
            <v-flex xs12 md4>
                <Home_chat  class="ma-2" :header_title="chat_block.title"
                            :menu="chat_block.menu"></Home_chat>
            </v-flex>
        </v-layout>


    </v-container>
</template>
<script>
    import CardHome from "../components/Card-home";
    import {linechart_data, barchart_data, piechat_data} from '@/data'
    import Cardtable from "../components/cardtable";
    import Todo from "../components/todo";
    import Detailed_block from "../components/detailed_block";
    import Home_top_cards from "../components/Home_top_cards";
    import Home_chat from "../components/home_chat";

    export default {
        name: "Home",
        components: {Home_chat, Home_top_cards, Detailed_block, Todo, Cardtable, CardHome},
        computed: {
            linechart_data: () => linechart_data,
            barchart_data: () => barchart_data,
            piechat_data: () => piechat_data
        },
        data() {
            return {
                topcards_details: {
                    new_accounts: {
                        color:"#f8b195",
                        icon:"people",
                        header:"3250",
                        header2:"New Accounts"
                    },
                    sales_headline: {
                        color:"#f47482",
                        icon:"shopping_cart",
                        header:"23320",
                        header2:"Items sold"
                    },
                    stats: {
                        color:"#bd6981",
                        icon:"trending_up",
                        header:"$325,005",
                        header2:"Profit increase"
                    }
                },
                todo: {
                    title: "Todo",
                    menu: [
                        {
                            name: "Go to todo page",
                            link: "/todo",
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        }
                    ]
                },
                sales: {
                    title: "Sales Differences",
                    menu: [
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        },
                        {
                            name: 'test Link',
                            link: ""
                        }]
                },
                click_rate: {
                    title: "Sales",
                    menu:
                        [{
                            name: 'test Link',
                            link: ""
                        },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            }
                        ]
                },
                Market_Values: {
                    title: "Market share",
                    menu:
                        [{
                            name: 'test Link',
                            link: ""
                        },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            }
                        ]
                },
                detailed_block: {
                    title: "Sales vs Revenue",
                    menu:
                        [{
                            name: 'test Link',
                            link: ""
                        },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            }
                        ]
                },
                user_points: {
                    title: "User points",
                    menu:
                        [{
                            name: 'test Link',
                            link: ""
                        },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            }
                        ]
                },
                chat_block: {
                    title: "Chat",
                    menu:
                        [{
                            name: 'test Link',
                            link: ""
                        },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            },
                            {
                                name: 'test Link',
                                link: ""
                            }
                        ]
                }


            }
        }
    }
</script>

<style scoped>
    .home_container {
        margin-top: -30px;
        display: flex;
        flex-wrap: wrap;
    }

    .homecard {
        box-shadow: none;
    }
</style>