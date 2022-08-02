import React from "react";
import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    // const navigate = useNavigate()

    return (
        <StTodoContainer>
            <Link to={`/detail/${todo.id}`}>상세보기</Link>
            {/* <p onClick={() => navigate(`/detail/${todo.id}`)}>상세보기</p> */}
            <StTodoTitle>{todo.title}</StTodoTitle>
            <StTodoContent>{todo.content}</StTodoContent>
            <StTodobuttons>
                <button
                    onClick={() => {
                        dispatch(deleteTodo(todo.id))
                    }}
                    style = {{
                        border: "1px solid red",
                        borderRadius: "12px",
                        width: "120px",
                        height: "40px",
                        }}
                    >삭제하기</button>
                <button
                    onClick={() => {
                        dispatch(doneTodo(todo.id))
                    }}
                    style = {{
                        border: "1px solid green",
                        borderRadius: "12px",
                        width: "120px",
                        height: "40px"
                    }}
                    >
                    {todo.isDone === true ? "취소" : "완료"}
                </button>
            </StTodobuttons>
        </StTodoContainer>
    );
};

const StTodoContainer = styled.div`
/* display: flex; */
gap: 12px;
margin-top: 5px;
width: 270px;
min-height: 150px;
padding: 30px;
border: 4px solid teal;
border-radius: 12px;
flex-wrap: wrap;
`;

const StTodoTitle = styled.div`
font-size: 1.5em;
font-weight: bold;
margin: 0.83em 0 0.83em 0;

`;
const StTodoContent = styled.div``;
const StTodobuttons = styled.div`
display: flex;
justify-content: center;
padding: 10px;
gap: 12px;
`;

export default Todo;