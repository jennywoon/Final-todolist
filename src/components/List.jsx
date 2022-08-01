import React from "react";
import {useSelector} from "react-redux"
import styled from "styled-components";
import Todo from './Todo'

const List = ({ handleDelete, handleDone }) => {
    const todos = useSelector((state) => state.todos)


    return (
        <StListContainer>
            <StTitle>working.. 🔥</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === false ? (
                        <div>
                            <Todo
                                todo={todo}
                                key={todo.id}
                                handleDelete={handleDelete}
                                handleDone={handleDone}
                            />
                        </div>
                    ) : null
                )}
            </StListCard>
            <StTitle>Done..! 🎉</StTitle>
            <StListCard>
                {todos.map((todo) =>
                    todo.isDone === true ? (
                        <div>
                            <Todo
                                todo={todo}
                                key={todo.id}
                                handleDelete={handleDelete}
                                handleDone={handleDone}
                            />
                        </div>
                    ) : null
                )}
            </StListCard>
        </StListContainer>
    )
}

const StListContainer = styled.div`
    border: 1px solid #ddd;
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px;
`

const StTitle = styled.div`
    font-weight: bold;
`

const StListCard = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`


export default List;
