<template>
    <div id="todo-list">
        <div>
            <div class="container">
                <div class="row">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(todo, index) in todoList" :key="todo.id">
                            {{ todo.todo}}
                            <span class="badge" v-if="todo.done == false">未完成</span>
                            <span class="badge" v-else>已完成</span>
                            <button class="btn tbn-success btn-xs" @click="deleteTodo(index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todoList',
        data () {
            return {
                newTodo : '',
            }
        },
        props: ['msMsg'],
        methods : {
            // 这里我们使用commit 提交删除操作
            deleteTodo (index){
                console.log(index)
                this.$store.commit('deleteTodo',index)
            }
        },
        computed : {
            todoList(){
                // 这里我们获取state的数据进行渲染
                return this.$store.state.todoList
            }
        }
    }
</script>

<style>

</style>