import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";


const TodoDetail = () => {
    const param = useParams();
    const navigate = useNavigate();

    const todos = useSelector((state) => state.todos);
    const detailTodo = todos.find((todo) => parseInt(todo.id) === parseInt(param.id))
    // const detailTodo = todos.find((val) => Number(val.id) === Number(param.id))
    // console.log(detailTodo)


    return (
        <StTodoDetailContainer>
            <StDetailTop>
                <StTodoId>ID : {detailTodo.id} </StTodoId>
                <StButton
                    onClick={() => navigate(-1)}
                >이전으로</StButton>
            </StDetailTop>
            <StTitle>{detailTodo.title}</StTitle>
            <StContent>{detailTodo.content}</StContent>

        </StTodoDetailContainer>

    )

}

export default TodoDetail;

const StTodoDetailContainer = styled.div`
    border: 1px solid #ddd;
    width: 600px;
    height: 400px;
    margin: 15% auto;
`

const StDetailTop = styled.div`
    display: flex;
    justify-content: space-between
`
const StTodoId = styled.div`    
`
const StButton = styled.div`    
`
const StTitle = styled.div`
`
const StContent = styled.div`
    
`