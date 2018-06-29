<template>
 <div id="app">
    <div class="container">
      <div class="header clearfix">
      <todo-input></todo-input>
      </div>
      <div class="container theme-showcase">
      <todo-list></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import todoList from  './components/todoList'
import todoInput from './components/todoInput'
export default {
  components : { todoList,todoInput },// 注册组件
  name: 'app',
  data () {
      return {

      }
  },
}
</script>

<style>

</style>
