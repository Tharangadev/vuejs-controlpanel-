<template>
    <div>
        <Card_home_header  :title="header_title" :menu="menu"></Card_home_header>
    <v-card >

        <v-data-table
                :headers="headers"
                :items="clicks"
                hide-actions
        >
            <template slot="items" slot-scope="props">
                <td style="border: none">
                    <div class="d-inline-flex">
                        <div>
                            {{props.item.user}}
                        </div>
                    </div>
                </td>
                <td class="text-xs-right">
                    <div class="">{{props.item.values}} </div>
                </td>
            </template>
        </v-data-table>
    </v-card>
    </div>
</template>

<script>
    import Card_home_header from "@/components/card_home_header";
    export default {
        name: "cardtable",
        props: ['header_title','menu'],
        components:{
            Card_home_header
        },
        data() {
            return {
                headers: [
                    {
                        text: 'USER',
                        align: 'left',
                        sortable: false,
                        value: 'user'
                    },
                    {text: 'Click rate', value: 'values'},
                ],
                clicks: [
                    {
                        user: "james may",
                        values: 214
                    }, {
                        user: "Richard Hamand",
                        values: 421
                    },
                    {
                        user: "Some guy from Chesure",
                        values: 22
                    },
                    {
                        user: "Stiggy",
                        values: 886
                    },
                    {
                        user: "Brian anderson",
                        values: 224
                    },
                    {
                        user: "Dooda dooda doo",
                        values: 311
                    }
                ]

            }
        }
    }
</script>

<style scoped>
    .box-blue
    {
        background: #365d7e;
        color: #fff;
        -webkit-border-radius: 20%;
        -moz-border-radius: 20%;
        border-radius: 20%;
        width: 40px;
        height:40px;
        margin: 0px auto;
        line-height: 40px;
        font-weight: 800;
        text-align: center;
        -webkit-box-shadow:1px 1px 3px 1px #1111111a;
        -moz-box-shadow:1px 1px 3px 1px #1111111a;
        box-shadow:1px 1px 3px 1px #1111111a;
    }
    table
    {
        border:none !important;
    }
</style>