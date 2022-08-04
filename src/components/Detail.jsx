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
        <StBackContainer>
            <StTodoDetailContainer>
                <StDetailTop>
                    <StTodoId>ID : {detailTodo.id} </StTodoId>
                    <StButton
                        onClick={() => navigate(-1)}
                    >이전으로</StButton>
                </StDetailTop>
                {/* <StTitle>{detailTodo.title}</StTitle> */}
                <StDetailBottom>
                    <h1>제목 : {detailTodo.title}</h1>
                    <StContent>내용 : {detailTodo.content}</StContent>
                </StDetailBottom>
            </StTodoDetailContainer>
        </StBackContainer>

    )

}

export default TodoDetail;

const StBackContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

const StTodoDetailContainer = styled.div`
    border: 1px solid #fd3e3e;
    width: 600px;
    height: 400px;
    /* margin: 15% auto; */
    display: flex;
    flex-direction: column;
    padding : 30px;
    border-radius: 20px;
    /* margin: auto; */
`

const StDetailTop = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    /* border: 1px solid red; */
`

const StDetailBottom = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const StTodoId = styled.div`    
`

const StButton = styled.div`
background-color: #fd3e3e;
color: white;
height: 40px;
width: 120px;
cursor: pointer;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
`
// const StTitle = styled.div`
// `
const StContent = styled.div`
    
`