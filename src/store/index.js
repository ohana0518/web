import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
      todos:[
          {title: 'test1', description: 'hello',status: false},
          {title: 'test4', description: 'work',status: true},
          {title: 'test3', description: 'rest',status: false},
          {title: 'test4', description: 'read ',status: true}
        ]
  },
  actions: {
  
      ADD_TODO({commit},todo){
        let new_todo={
          title:todo.title,
          description: todo.description,
          status: false
        };
        commit("ADD_TODO_MUTATION",new_todo);
      },

      ADD_TODO_END({commit},todo){
        let new_todo={
          title:todo.title,
          description: todo.description,
          status: true
        };
        commit("ADD_TODO_MUTATION",new_todo);
      },

     COMPLETE_TODO({commit},todo){
      commit("COMPLETE_TODO_MUTATION",todo);
     },
     DELETE_TODO({commit},todo){
      commit("DELETE_TODO_MUTATION",todo);
     },
    
  },
  getters:{
    completed: (state)=>{
        return state.todos.filter(todo => !todo.status );
    },
    incompleted: (state)=>{
        return state.todos.filter((todo) => todo.status );
    }
  },
  mutations: {
    ADD_TODO_MUTATION(state,todo){
      state.todos.push(todo);
    },
    COMPLETE_TODO_MUTATION(state,todo){
      state.todos.find(item=>item.title+item.description === todo.title+todo.description).status =true;
    },
    DELETE_TODO_MUTATION(state,todo){
      state.todos=state.todos.filter(item=>item.title + item.description!=todo.title+todo.description);
    }
  },
  modules: {
  }
});
export default store;
