<template>
    <div>
        <Card_home_header :title="header_title" :menu="menu" ></Card_home_header>
        <v-card>
            <v-card-actions  class="pa-0">
                <div style="max-height: 300px;overflow-y: scroll">
                    <single_chat_p1></single_chat_p1>
                    <single_chat_p2></single_chat_p2>
                </div>
            </v-card-actions>
            <v-card-actions class="pa-0">
                <v-text-field
                        style="border-radious:0px;"
                        label="Solo"
                        placeholder="Message Here"
                        solo
                        flat
                        background-color="#f19773"
                        hide-details
                        append-icon="send"
                        @click:append="send"
                ></v-text-field>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import Card_home_header from "./card_home_header";
    import Single_chat_p1 from "./chat/single_chat_p1";
    import Single_chat_p2 from "./chat/single_chat_p2";
    export default {
        name: "home_chat",
        components: {Single_chat_p2, Single_chat_p1, Card_home_header},
        props:['header_title','menu'],
        methods:{
            send(){
                alert("Sdsdsd")
            }
        }
    }
</script>

<style scoped>

</style>