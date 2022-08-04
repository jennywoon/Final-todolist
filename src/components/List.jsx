import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";
import Todo from './Todo'

const List = () => {
    const todos = useSelector((state) => state.todos)


    return (
        <StListContainer>
            <StTitle>Working.. 🔥</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === false ? (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                // handleDelete={handleDelete}
                                // handleDone={handleDone}
                            />
                    ) : null
                )}

            </StListCard>
            <StTitle>Done..! 🎉</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === true ? (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                // handleDelete={handleDelete}
                                // handleDone={handleDone}
                            />
                    ) : null
                )}
                
            </StListCard>

        </StListContainer>
    )
}

const StListContainer = styled.div`
    /* border: 1px solid #ddd;
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px; */
    padding: 0px 24px;
    /* background-color: red; */

` 

const StTitle = styled.div`
    font-weight: bold;
    margin: 20px 0px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
`

const StListCard = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    min-height: 150px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
`


export default List;
