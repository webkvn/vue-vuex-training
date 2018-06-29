<template>
    <div id="todo-list">
        <div>
                <el-table
                :data="todoList"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="序号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="todo"
                    label="明细"
                    width="180">
                </el-table-column>
                 <el-table-column
                    prop="done"
                    label="状态"
                    width="180">
                    <template slot-scope="scope">
                        <span class="badge" v-if="scope.row.done == false">未完成</span>
                        <span class="badge" v-else>已完成</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        type="danger"
                        @click="deleteTodo(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
                </el-table>
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
            deleteTodo (index){
                console.log(index)
                this.$store.commit('deleteTodo',index)
            }
        },
        computed : {
            todoList(){    
                return this.$store.state.todoList
            }
        }
    }
</script>

<style>

</style>