import React, {Component} from 'react';
import './App.css';

import User from './User'
import Users from './Users'
import UserDetail from './UserDetail'
import NewUserForm from './NewUserForm'

import axios from 'axios';
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom';

const backendUrl = "http://localhost:8080/api/users/";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      newUserName: '',
      newUserEmail: '',
      newTodoDescription: ""
    }
  }

  componentDidMount() {
    this.getUsersAxios()
  }

  getUsersAxios() {
    axios({
      method: 'GET',
      url: backendUrl
    })
    .then(users => 
      this.setState({users: users.data}))
  }

  createUserAxios() {
    axios({
      method: 'POST',
      url: backendUrl,
      data: {
        name: this.state.newUserName,
        email: this.state.newUserEmail
      }
    })
    .then(newUser => {
      console.log(newUser)
      this.setState(prevState => ({
        users: [...prevState.users, newUser.data]
      }))
    })
  } 

  deleteAxiosUser = event => {
    event.preventDefault()

    axios({
      method: 'DELETE',
      url: `${backendUrl}${event.target.id}`
    })
    .then(deletedUser => {
      this.getUsersAxios()
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createUserAxios()
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleNewTodoSubmit = event => {
    console.log(event.target.id)
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${backendUrl}${event.target.id}/new-todo/`,
      data: {
        description: this.state.newTodoDescription
      }
    })
    .then(newUser => {
      console.log(newUser)
      this.setState({newTodoDescription: ''})
      this.getUsersAxios()
      this.props.history.push(`/users/${newUser.data._id}`)
    })
  }

  toggleDone = event => {
    event.preventDefault();
    let todoId = event.target.getAttribute('data-todo-id');
    axios({
      method: "PUT",
      url: `${backendUrl}${event.target.id}/update-todo/${todoId}`,
    }).then(user => {
      this.getUsersAxios();
      this.props.history.push(`/users/${user.data._id}`);
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <nav >
          <Link to="/users"><div className='App-header'>All Users</div></Link>
          <Link to="/new-user-form"><div className='App-header'>New User Form</div></Link>
        </nav>
        <Switch>
          <Route exact path="/" render={routerProps => (
            <Users 
              users={this.state.users} 
              handleDelete={this.deleteAxiosUser}
            />
          )} 
        />
        <Route path="/users/:id" render={routerProps => 
          <UserDetail 
            {...routerProps}
            users={this.state.users} 
            newTodoDescription={this.state.newTodoDescription}
            handleChange={this.handleChange}
            handleNewTodoSubmit={this.handleNewTodoSubmit}
            toggleDone={this.toggleDone}
          /> } 
        />
        <Route 
          path="/new-user-form" 
          render={() => (
            <NewUserForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route path="/*" render={() => 
          <Redirect to="/" 
          /> } 
        />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
