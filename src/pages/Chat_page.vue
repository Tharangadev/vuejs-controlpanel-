<template>
  <v-container>

    <v-layout row>
      <h2 class="mt-3 mb-2 ">
        Chat Page
      </h2>
    </v-layout>
    <v-layout row>
      <v-flex xs12 class="">
        <v-card flat>
          <div class="pa-2">
            <div v-for="(message,index) in messages" :key="index">
              
              <single_chat_p1 v-if="message.owner" :message="message.message"></single_chat_p1>
              <single_chat_p2 v-else :message="message.message"></single_chat_p2>
             
            </div>
          </div>
          <v-card flat class="pl-4 pr-4 pt-2 pb-2" color="#eee">
            <v-text-field append-icon="send" @click:append="addmessage" label="message" v-model="chat_message"></v-text-field>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  ///personal chat blocks
import single_chat_p1 from "../components/chat/single_chat_p1";
import single_chat_p2 from "../components/chat/single_chat_p2";

import store from "@/store/index";

export default {
  name: "Chat_page",
  components: { single_chat_p1, single_chat_p2 },
  data(){
    chat_message=""
  },
  computed:{
    messages(){
      return store.state.chat.messages
    }
  },
  methods: {
    
  }
};
</script>
<style scoped>
.chat_text {
  border: 1px solid #111;
}
</style>
