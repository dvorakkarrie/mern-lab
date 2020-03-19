import React from 'react'

const UserDetail = props => {
    
    let userDetail = props.users.find(
        user => user._id === props.match.params.id)

    console.log(userDetail.todos)

    return(
        <div>
            <form
                onSubmit={props.handleNewTodoSubmit}
                onChange={props.handleChange}
                id={userDetail._id}
      >
                <input
                    type="text"
                    name="newTodoDescription"
                    placeholder="New Todo! Get er done!"
                    value={props.newTodoDescription}
            />
                <input type="submit" />
            </form>

            <h2>TODOS</h2>
            <ul>
                {userDetail.todos.map(todo => {
                    if(!todo.done) {
                        return (
                            <li>
                              {todo.description}{" "}
                              <button
                                id={userDetail._id}
                                data-todo-id={todo._id}
                                onClick={props.toggleDone}
                              >
                                done
                              </button>
                            </li>
                          );
                    }
                })}
            </ul>

            <h2>COMPLETED TODOS</h2>
            <ul>
                {userDetail.todos.map(todo => {
                    if (todo.done) {
                        return (
                            <li>
                              {todo.description}{" "}
                              <button
                                id={userDetail._id}
                                data-todo-id={todo._id}
                                onClick={props.toggleDone}
                              >
                                not done
                              </button>
                            </li>
                          );
                    }
                })}
            </ul>
        </div>
    )
}

export default UserDetail