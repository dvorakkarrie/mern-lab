// controllers/users.js
const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Get all users
router.get('/', (req, res) => {
    // res.send('Users GET route is working!')
    User.find().then(users => res.json(users))
})

// Get user by Id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
})

// Create a user
router.post('/', (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
})

// Update a user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true})
        .then(updatedUser => res.json(updatedUser))
})

// Delete a user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(deletedUsers => res.json(deletedUsers))
})

router.post('/:userId/new-todo/', (req, res) => {
    User.findById(req.params.userId).then(user => {
        let newTodo = req.body;
        newTodo.done = false
        user.todos.push(newTodo);
        user.save();
        res.json(user);
    })
})

module.exports = router