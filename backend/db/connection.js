// Importing mongoose from node_modules
const mongoose = require('mongoose')

// Set the uri for connecting to our local mongodb
const mongoURI = 'mongodb://localhost/mern-lab'

// connect to database with imported mongoose instance
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(instance => console.log('Connected to db: ${instance.connections[0].name}'))
    .catch(err => console.log('Connection Failed! ', err))

// Mongoose instance has configured connection to local db including its model configuration
module.exports = mongoose