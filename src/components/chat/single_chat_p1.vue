<template>

<div>
   
    <div class="d-flex mt-4 mb-4 ml-3 mr-3">
         <v-flex>
    <v-avatar>
      <img src="https://api.adorable.io/avatars/51/sam@adorable.png" alt="">
    </v-avatar>
            <v-card color="rgb(69, 115, 155)" class="pa-2 chat_card ml-3 text--white" flat>
                
                    <div class="chat_trangle_left" ></div>
                    <p class="pa-2">
                        {{message}}
                    </p>
                
            </v-card>
         </v-flex>
        </div>
    </div>
</template>

<script>
    export default {
        name: "single_chat_p1",
        props:['message']
    }
</script>

<style scoped>
.chat_trangle_left
{
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid rgb(69, 115, 155);
    position: absolute;
    top: 0px;

    left: -8px;
}
    .chat_card
    {
        /*position: relative;*/
    }
.chat_li
{
    /*height:auto !important;*/
}
</style>
