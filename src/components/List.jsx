import React from "react";
import styled from "styled-components";

const List = ({todos, handleDelete, handleDone}) => {
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
    
`

const StListCard = styled.div`
    
`


export default List;
