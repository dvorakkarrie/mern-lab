import React from 'react'

const UserDetail = props => {
    
    let UserDetail = props.users.find(
        user => user._id === props.match.params.id)

    return(
        <div>
            <h1>User Details!</h1>
            <h2>{UserDetail.name}</h2>
            <em>{UserDetail.email}</em>
        </div>
    )
}

export default UserDetail