import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sitefunctions:{
      drawer:false
    },
    /////state ==> todo list 
    todolistlist: [
      {
        id: 1,
        name: "Go to shops",
        done: true
      },
      {
        id: 2,
        name: "Walk the dog",
        done: false
      },
      {
        id: 3,
        name: "Study chapter 3",
        done: false
      },
      {
        id: 4,
        name: "Clean the room",
        done: true
      }
    ],

    ///State chat list 
    chat:{
      current_chat:{
        time_started:122121
      },
      messages:[
        {
          owner:false,
          message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam deserunt expedit",
        },
        {
          owner:false,
          message:"Lorem ipsum ",
        },
        {
          owner:true,
          message:"ipisicing elit. Accusantium aliquam deserunt expedit",
        },
        {
          owner:false,
          message:"Lorem ip eserunt expedit",
        },
        {
          owner:true,
          message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam deserunt expedit",
        },
        {
          owner:false,
          message:"Lorem ipsum dolordusantium aliquam deserunt expedit",
        }

      ]
    }
  },
  getters: {},
  actions: {
    edittodo() {}
  },
  mutations: {
    addnew_todo(state, new_item) {
      state.todolistlist.push(new_item);
    },
    change_status(state, change_item) { 
      state.todolistlist[change_item].done =! state.todolistlist[change_item].done;
    },
    edit(state,edited_item){
      state.todolistlist[edited_item.item].name=edited_item.name
      state.todolistlist[edited_item.item].done=edited_item.done
    },
   
  }
});
