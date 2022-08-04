import React, { useState} from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addTodo } from "../redux/modules/todos"

let nextId = 0;
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

    // const nextId = useRef(0)
    // console.log(nextId)

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (title === '' || content === '') return;

        dispatch(
            addTodo({
                // id: (nextId.current += 1),
                id: nextId += 1,
                title,
                content,
                isDone: false,
            })
        );
        // setTitle('')
        // setContent('')
    };

    return (
        <StFormContainer onSubmit={onSubmitHandler}>
            <StFormContent>
                <Stlabel>제목</Stlabel>
                <StInput type="text" value={title} onChange={handleInputTitle}></StInput>
                <Stlabel>내용</Stlabel>
                <StInput type="text" value={content} onChange={handleInputContent}></StInput>
            </StFormContent>

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
margin-top: 24px;
align-items: center;
justify-content: space-between;
`;

const StFormContent = styled.div`
    display:flex;
    gap: 20px;
    align-items: center;
`

const Stlabel = styled.div`
    font-size: 16px;
    font-weight: 700;
`

const StInput = styled.input`
height: 40px;
width: 240px;
border-radius: 12px;
border: none;
padding: 0 12px;
`;

const StButton = styled.button`
border: none;
background-color: teal;
height: 40px;
cursor: pointer;
width: 140px;
border-radius: 10px;
font-weight: 700;
color: white;
&:hover {
background-color: #b0e0e6;
}
`;

export default Form;