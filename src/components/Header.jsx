import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { pink } from '@mui/material/colors';

const Header = () => {

    const navigate = useNavigate();

    return(
        <StHeaderContainer>
            {/* <p
            onClick={() => navigate(`/`)}
            >My Todo List</p> */}
            <OtherHousesIcon
            onClick={() => navigate('/')}
            sx={{ color: pink[500] }}
            ></OtherHousesIcon>
            <p>React</p>
        </StHeaderContainer>
    )
}

const StHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    padding: 0px 20px;
    height: 60px
`


export default Header;
