<template>
  <div id="container">
    <h1>To do list</h1>
    <form @submit="createTodo">
    <div class="col"><label for="">標題</label>
    <input v-model="title" type="text" class="form-control" required></div>
    <div class="col"><label for="">內文</label>
    <textarea rows="2" v-model="description" class="form-control" required></textarea></div>
    <br>
    <button class="btn btn-outline-primary" type="submit">儲存至未完成</button>
    <button class="btn btn-outline-primary" @click="test" type="submit"  >儲存至完成</button>
    </form>
    <br>
    <hr>
    <div class="row">
      <div class="col-md-6">
      <h4>未完成事項</h4>
      <todo-list completed=true></todo-list>
     </div>
     <div class="col-md-6">
      <h4>完成事項</h4>
      <todo-list completed=flase></todo-list>
     </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/todo-list.vue';
export default {
  name: 'app',
  components :{TodoList},
  data(){
    return{
      title:'',
      description:''
    }
  },
  methods: {
    createTodo(e){
      
      e.preventDefault();
      this.$store.dispatch(`ADD_TODO`,this);
      this.title=this.description="";
    },
    test(e) {
      
      e.preventDefault();
      this.$store.dispatch(`ADD_TODO_END`,this);
      this.title=this.description="";
    }

    
  },

}
</script>

<style>

</style>
