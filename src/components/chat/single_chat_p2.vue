<template>
    <div>
    <div class="d-flex mt-4 mb-4 ml-3 mr-3">
        <v-flex graw>
            <v-card color="rgb(252, 176, 185)" class="pa-2 chat_card mr-3" flat >
                <p class="pa-2">
                    {{message}}
                </p>
                <div class="chat_trangle_right"></div>
            </v-card>
            <v-avatar>
                <img src="https://api.adorable.io/avatars/51/abott@adorable.png" alt="">
            </v-avatar>
        </v-flex>
        </div>
    </div>
</template>

<script>
    export default {
        name: "single_chat_p2",
        props:['message']
    }
</script>

<style scoped>
.chat_trangle_right
{
  width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid rgb(252, 176, 185);
    position: absolute;
    right: -9px;
    top:0px;
}
</style>
