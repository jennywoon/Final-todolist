import React from "react";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todos";

const Todo = ({todo}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <StTodoContainer>
                <p onClick={() => navigate(`/detail/:${todo.id}`)}>상세보기</p>
                <StTodoTitle>{todo.title}</StTodoTitle>
                <StTodoContent>{todo.content}</StTodoContent>
                <StTodobuttons>
                    <button 
                    onClick={() => {
                        
                        dispatch(deleteTodo(todo.id))
                    }}>삭제하기</button>
                    <button
                    onClick={() => {
                        
                        dispatch(doneTodo(todo.id))
                    }}>
                    {todo.isDone === true ? "취소" : "완료"}
                    </button>
                </StTodobuttons>
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