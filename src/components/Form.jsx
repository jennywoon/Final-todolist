import React, { useState } from "react"
import {useDispatch} from "react-redux"
import styled from "styled-components"
import { addTodo } from "../redux/modules/todos"

const Form = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if (title === '' && content === '') return;
        
        dispatch(
            addTodo({
                id: Date.now(),
                title,
                content,
                isDone : false,
            })
        );
    };

    return (
        <StFormContainer onSubmit={onSubmitHandler}>
            <label>제목</label>
            <StInput type="text" value={title} onChange={handleInputTitle}></StInput>
            <label>내용</label>
            <StInput type="text" value={content} onChange={handleInputContent}></StInput>
            <StButton>추가하기</StButton>
        </StFormContainer>
    )

}

const StFormContainer = styled.form`
display: flex;
gap: 24px;
padding: 30px;
background-color: #eee;
border-radius: 10px;
`;

const StInput = styled.input`
border: 1px solid #b0e0e6;
margin: 0 24px;
height: 25px;
width: 300px;
border-radius: 8px;
outline: none;
padding: 0 10px;
`;

const StButton = styled.button`
border: 1px solid #b0e0e6;
background-color: #fff;
height: 25px;
cursor: pointer;
width: 120px;
border-radius: 8px;
&:hover {
background-color: #b0e0e6;
}
`;

export default Form;