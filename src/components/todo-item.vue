<template>
  <div class="card">
    <div class="panel panel-default">
        <div class="alert alert-info">
            {{todo.title}} 
        </div>
        <div class="panel-body">
          {{todo.description}}
        </div>
        <div class="panel-footer">
            <button class="btn btn-success" @click="completed" v-if="!todo.status">標記為完成</button>
            <button class="btn btn-danger" @click="deleteTodo" v-if="!todo.status">刪除</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'todo-item',
 props: ['todo'],
 methods: {
     completed(){
         this.$store.dispatch('COMPLETE_TODO',this.todo);
     },
     deleteTodo(){
         this.$store.dispatch('DELETE_TODO',this.todo);
     }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
