<template>
    <div>
        <Card_home_header :title="header_title" :menu="menu"></Card_home_header>
    <v-card color="transparent">

        <v-flex row>
            <v-list>
                <v-list-tile-content>
                    <v-container class="pa-0 text-xs-center ma-o">
                        <v-layout row>
                            <v-flex xs6 class="pa-2">
                                <div class="subtitle">Sales increase</div>
                                <div class="title mt-2">$ 3211</div>
                                <v-flex>
                                    <linechart class="pl-2 pr-0 pb-0 pt-0" :data="chart_sales" :options="options_sales"></linechart>
                                </v-flex>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex xs6 class="pa-2">
                                <div class="subtitle">Revenue increase</div>
                                <div class="title mt-2">$ 43300.00</div>
                                <barchart :data="chart_reven" :options="options_reven" class="pl-2 pr-0 pb-0 pt-0"></barchart>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-list-tile-content>
            </v-list>
        </v-flex>


    </v-card>
    </div>
</template>

<script>
    import Linechart from "./charts/Line";
    import Barchart from "./charts/Bar";
    import Card_home_header from "./card_home_header";

    export default {
        name: "detailed_block",
        components: {Card_home_header, Barchart, Linechart},
        props: ['header_title','menu'],
        data() {
            return {
                chart_sales: {
                    labels: ["08", "09", "10", "11"],
                    datasets: [{
                        label: 'no of sales',
                        data: [35, 45, 50, 60, 70, 90],
                        backgroundColor: ['#eee'],
                        borderColor: '#f68c98',
                        borderWidth: 1
                    }]
                },
                options_sales: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false
                            },

                            scaleLabel: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: true,
                            }
                        }]
                    }
                },
                chart_reven: {
                    labels: ["08", "09", "10", "11"],
                    datasets: [{
                        label: 'no of sales',
                        data: [25, 23, 23, 25, 24, 30],
                        backgroundColor: ['#eee'],
                        borderColor: '#f68c98',
                        borderWidth: 1
                    }]
                },
                options_reven: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            barThickness: 20,
                            gridLines: {
                                display: false
                            },

                            scaleLabel: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: true,
                            }
                        }]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>