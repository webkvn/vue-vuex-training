<template>
 <div id="app">
    <el-row>
      <el-col :span="12" :offset="6">
        <todo-input></todo-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <todo-list></todo-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import todoList from  './components/todoList'
import todoInput from './components/todoInput'
export default {
  components : { todoList,todoInput },
  name: 'app',
  data () {
      return {

      }
  },
}
</script>

<style>

</style>
