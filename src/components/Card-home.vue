<template>
    <div>

        <Card_home_header :title="header_title" :menu="menu"></Card_home_header>
        <v-card class="pb-4 pl-4 pr-4 pt-1 add-shadow mt-0 mb-3 ml-2 mr-2" :color="color">
            <v-card-actions>
                <v-flex>
                    <!-- rendering the graph format as required -->
                    <barchart v-if="types==='bar'" v-bind:data="planetChartData"
                              v-bind:options="chart_options.bar_options"
                              style="height:250px;padding-top:20px;"></barchart>
                    <Piechart v-else-if="types==='pie'" v-bind:data="planetChartData"
                              v-bind:options="chart_options.pie_options"
                              style="height:215px;"></Piechart>
                    <Linechart v-else-if="types==='line'" v-bind:data="planetChartData"
                               v-bind:options="chart_options.line_options"
                               style="height:215px;"></Linechart>
                </v-flex>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

    import Barchart from "./charts/Bar";
    import Piechart from "./charts/Pie";
    import Linechart from "./charts/Line";

    import {bar_options, line_options, pie_options} from "../chart_options";

    import Card_home_header from "./card_home_header";


    export default {
        name: "Card-home",
        components: {Card_home_header, Piechart, Barchart, Linechart},
        props: ['color', 'dataset', 'type', 'header_title', 'menu'],
        data() {
            return {
                planetChartData: this.dataset,
                options: {},

            }
        },
        computed: {
            types() {
                return this.type
            },
            chart_options() {
                return {
                    bar_options, line_options, pie_options
                }
            }
        }
    }
</script>

<style scoped>
    .add-shadow {
        box-shadow: 0px 0px 2px 1px #eee;
        border: 1px solid #aaa;
    }

    .card_header {
        font-size: 15px;
    }

</style>