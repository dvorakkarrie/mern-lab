import React from 'react'

const NewUserForm = props => {
    return (
        <div>
            <form onSubmit = { props.handleSubmit} onChange={props.handleChange} >
                <input type="text" name='newUserName' />
                <input type="text" name='newUserEmail' />
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewUserForm