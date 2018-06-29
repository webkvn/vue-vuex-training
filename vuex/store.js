import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        message : 'this message from Store ',
        todoList: [
            {id : 1, todo : '学习VUE',done : true},
            {id : 2, todo : '学习laravel',done : false},
            {id : 3, todo : '学习webpack',done : false}
        ]
    },
    // mutations 为唯一可以操作state 数据的方法
    // 下面我们定义两个方法，一个添加todoList，一个删除todoList
    mutations: {
        // 接收两个参数，state 和需要操作的数据payload
        addTodoList (state, payload){
            console.log(state);
            state.todoList.push({id:state.todoList.length + 1,todo:payload,done:false})
        },
        deleteTodo(state,payload){
            state.todoList.splice(payload,1)
        }
    }

})

export default store;