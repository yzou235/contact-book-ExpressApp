const path = require('path');

const friends = [
    {
        id: 1,
        name: 'Harry Potter',
        email: 'h.potter@hogwarts.edu',
        phone: '1234567890',
        image: "./images/hp.jpg"
    },
    {
        id: 2,
        name: 'Ron Weasley',
        email: 'r.weasley@hogwarts.edu',
        phone: '2234567890',
        image: "./images/rw.jpg"
    },
    {
        id: 3,
        name: 'Hermione Granger',
        email: 'h.granger@hogwarts.edu',
        phone: '3234567890',
        image: "./images/hg.jpg"
    },
    {
        id: 4,
        name: 'Dobby',
        email: 'dobby@hogwarts.edu',
        phone: '4234567890',
        image: "./images/dobby.jpg"
    },
]

module.exports = friends;


// const mongoose = require('mongoose');
// const friendSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     }, 
//     email: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     created: {
//         type: Date,
//         required: true,
//         default: Date.now,
//     },
// });