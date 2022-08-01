// src/redux/modules/counter.js
// Action Value

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETO_TODO"
const DONE_TODO = "DONE_TODO"

// Action Creator

export const addTodo = (todo) => {
    return {type: ADD_TODO, todo}
}

export const deleteTodo = (id) => {
    return {type: DELETE_TODO, id}
}

export const doneTodo = (id) => {
    return {type: DONE_TODO, id}
}

// Initial State

const initialState = [];

// Reducer

const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.todo]
        case DELETE_TODO:
            const completedTodo = state.filter((todo) => todo.id !== action.id)
            return completedTodo
        case DONE_TODO:
            const doneTodo = state.map((todo) => 
            todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo)
            return doneTodo;
        default:
            return state;
    }
}

// export default reducer

export default todos;