<template lang="html">
    <v-container>
            <v-layout row>
                <h2 class="mt-3 mb-2 ">
                    Todo
                </h2>
            </v-layout>
    <v-layout row>
        <v-flex xs12 class=" ">
            <v-card >
                <div  class="pa-4 title_header">

                <v-text-field
                        class="text-feild-todo"
                        name="name"
                        label="Todo"
                        id="id"
                        flat
                        v-model="new_add"

                ></v-text-field>
            </div>
                <div  class="pl-4 pr-4 pt-2 pb-4">
                    <v-btn v-if="edit_mode.mode" flat  @click="edit_done" class="edit">edit</v-btn>
                    <v-btn v-else flat class="add" @click="addbtn">Add</v-btn>
                <v-list>
                    <v-list-tile v-for="(item,number) in thelist" :key="number"   >
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-btn icon   @click="todostatuschange(number)">
                                    <v-icon v-if="item.done">check_circle</v-icon>
                                    <v-icon v-else>check_circle_outline</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                            <v-list-tile :class="{done:item.done}">
                                {{item.name}}
                            </v-list-tile>
                            <v-list-tile-content>

                            </v-list-tile-content>
                        </v-list-tile>
                        <v-spacer></v-spacer>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-btn icon @click="edit(number)">
                                    <v-icon>
                                        create
                                    </v-icon>
                                </v-btn>
                            </v-list-tile-action>

                        </v-list-tile>
                    </v-list-tile>
                </v-list>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
import store from "@/store/index";
export default {
  methods: {
    todostatuschange(t) {
      store.commit("change_status", t);
    },
    addbtn() {
      if (this.new_add) {
        store.commit("addnew_todo", {
          id: this.thelist.length + 1,
          name: this.new_add,
          done: false
        });
      }
      this.new_add = "";
    },
    edit(i) {
      this.edit_mode.mode = true;
      this.edit_mode.item = i;
      console.log(i)
      this.new_add = store.state.todolistlist[i].name;
    },
    edit_done() {
      this.edit_mode.mode = false;
        store.commit('edit',{
            item:this.edit_mode.item,
            name:this.new_add ,
            done:false
        })

      this.new_add = "";
    }
  },
  data() {
    return {
      selected: [""],
      new_add: "",
      edit_mode: {
        mode: false,
        item: null
      }
    };
  },
  computed: {
    thelist: () => store.state.todolistlist
  }
};
</script>

<style lang="css" scoped>
.text-feild-todo {
  color: #eee;
}

.add {
  background: rgb(248, 177, 149);
}
.edit {
  background: red;
}
.done {
  position: relative;
  display: inline-block;
}
.done::before,
.done::after {
  content: "";
  width: 100%;
  position: absolute;
  right: 0;
  top: 50%;
}
.done::before {
  border-bottom: 1px solid black;
}
.title_header {
  background: #eee;
}
</style>
