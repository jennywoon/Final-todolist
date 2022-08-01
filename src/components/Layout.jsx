import styled from "styled-components";
import Form from "./Form";

import Header from "./Header";
import List from "./List";

const Layout = () => {
    return(
        <StLayoutContainer>
            <Header/>
            <Form/>
            <List/>
            {/* {children} */}
        </StLayoutContainer>
    )
}

const StLayoutContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
    box-sizing: content-box;

`

export default Layout;