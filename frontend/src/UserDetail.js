import React from 'react'

const UserDetail = props => {
    
    let userDetail = props.users.find(
        user => user._id === props.match.params.id)

    console.log(userDetail.todos)

    return(
        <div>
            <h1>User Details!</h1>
            <h2>{userDetail.name}</h2>
            <em>{userDetail.email}</em>

            <h2>TODOS</h2>
            <ul>
                {userDetail.todos.map(todo => {
                    if(!todo.done) {
                        return <li> {todo.description}</li>
                    }
                })}
            </ul>

            <h2>COMPLETED TODOS</h2>
            <ul>
                {userDetail.todos.map(todo => {
                    if (todo.done) {
                        return <li>{todo.description}</li>
                    }
                })}
            </ul>
        </div>
    )
}

export default UserDetail