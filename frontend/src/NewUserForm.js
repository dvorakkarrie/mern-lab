import React from 'react'

const NewUserForm = props => {
    return (
        <div>
            <form onSubmit = { props.handleSubmit } >
                <input type="text" onChange={props.handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewUserForm