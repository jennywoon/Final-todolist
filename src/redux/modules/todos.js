// src/redux/modules/counter.js
// Action Value

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const DONE_TODO = "DONE_TODO"

// Action Creator

export const addTodo = (todo) => {
    return { type: ADD_TODO, todo }
}

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, id }
}

export const doneTodo = (id) => {
    return { type: DONE_TODO, id }
}

// Initial State

const initialState = [
    {
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 초보 2조",
		content: "열심히 공부중입니다",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "나청운, 정성일, 조수정",
		content: "우리는 2조에요!",
		isDone: false
	},
    {
		id: 3, // id는 모두 고유값이어야 합니다.
		title: "두번째 투두리스트",
		content: "조금만 더 노력하자!",
		isDone: false
	}
];

// Reducer

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case DELETE_TODO:
            const deleteTodo = state.filter((todo) => todo.id !== action.id)
            return deleteTodo

        case DONE_TODO:

            const doneTodo = state.map((todo) =>
                todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo)
            return doneTodo;
        default:
            return state;
    }
}

// export default reducer

export default todos;