import React from "react";
import { useNavigate} from "react-router-dom";
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
            <StTitle>{}</StTitle>
            <StContent>{}</StContent>

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