import React from 'react'

const UserDetail = props => {
    console.log(props)
    
    let userDetail = props.users.find(
        user => user._id === props.match.params.id)

    return(
        <div>
            <h1>User Details!</h1>
            <h2>{userDetail.name}</h2>
            <em>{userDetail.email}</em>
        </div>
    )
}

export default UserDetail