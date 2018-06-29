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
    mutations: {
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