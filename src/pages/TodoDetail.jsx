import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const TodoDetail = () => {
    const navigate = useNavigate();

    return(
        <StTodoDetailContainer>
            <StDetailTop>
                <StTodoId>ID : {} </StTodoId>
                <StButton
                onClick={() => navigate(-1)}
                >이전으로</StButton>
            </StDetailTop>

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
`
const StTodoId = styled.div`    
`
const StButton = styled.div`
    
`