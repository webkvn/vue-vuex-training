<template>
    <div id="todo-input">
        <div style="height:100px;"></div>
        <h1 style="text-align:center;">todolist demo</h1>
        <el-row>
            <el-col :span="22">
                <el-input v-model="newTodo" placeholder="请输入待办事项" @keyup.enter="addTodo"></el-input>   
            </el-col>
            <el-col :span="2">
                <el-button type="success" @click.enter="addTodo">添加</el-button>
            </el-col>                                 
        </el-row>
    </div>
</template>

<script>
    export default({
        name :'todoInput',
        data(){
            return {
                newTodo : '',
            }
        },
        methods : {
            addTodo(){
                this.$store.commit('addTodoList',this.newTodo)
            }
        }
    })
</script>