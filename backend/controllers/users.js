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

})

// Update a user
router.put('/:id', (req, res) => {

})

// Delete a user
router.delete('/:id', (req, res) => {

})

module.exports = router