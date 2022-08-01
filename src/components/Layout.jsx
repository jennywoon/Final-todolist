import styled from "styled-components";


import Header from "./Header";


const Layout = () => {
    return(
        <StLayoutContainer>
            <Header/>

            {/* {children} */}
        </StLayoutContainer>
    )
}

const StLayoutContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    box-sizing: content-box;
    border: 1px solid green;

`

export default Layout;