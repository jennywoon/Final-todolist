import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TodoList from "../pages/TodoList";

const Router = () => {
    return(
        <BrowserRouter>
            <Route>
                <Route path='/' element={<TodoList/>}/>
                {/* <Route path='detail/:id' element={</>}/> */}
            </Route>
        </BrowserRouter>
    )
}

export default Router;