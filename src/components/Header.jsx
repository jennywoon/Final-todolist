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
            <Stp>
            <OtherHousesIcon
            onClick={() => navigate('/')}
            sx={{ color: pink[500] }}
            ></OtherHousesIcon>
            Jenny's Todo List
            </Stp>
            <Stp>React</Stp>
        </StHeaderContainer>
    )
}

const StHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid #fd8e94;
    padding: 0px 20px;
    height: 60px;
    border-radius: 10px;
`

const Stp = styled.div`
    display: flex;
    align-items: center;
    gap : 12px;
    font-weight: bold;
`


export default Header;
