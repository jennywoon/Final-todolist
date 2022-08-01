import React, {useDispatch, useSelector} from "react";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todos";
// import todos from "../redux/modules/todos";

const Todo = (id) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch;

    return (
        <StTodoContainer>
            <Todo>
                <StTodoTitle>{todos.title}</StTodoTitle>
                <StTodoContent>{todos.content}</StTodoContent>
                <StTodobuttons>
                    <button 
                    onClick={() => {
                        dispatch(deleteTodo(id))
                    }}>삭제하기</button>
                    <button
                    onClick={() => {
                        dispatch(doneTodo(id))
                    }}>완료</button>
                </StTodobuttons>
            </Todo>
        </StTodoContainer>
    );
};

const StTodoContainer = styled.div`
display: flex;
gap: 12px;
margin-top: 5px;
width: 300px;
padding: 30px;
border: 3px solid #b0e0e6;
border-radius: 8px;
background-color: #fff;
`;

const StTodoTitle = styled.div``;
const StTodoContent = styled.div``;
const StTodobuttons = styled.div``;

export default Todo;