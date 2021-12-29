const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('Database is connected ')
})

conn.on('disconnected', () => {
    console.log('Database is disconnect successfully')
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;
