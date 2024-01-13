const express = require('express');
const router = express.Router();
const friendsData = require('../data/friends-data');

// router.get('/users', (req, res) => {
//     res.send("All Users");
// });

router.get("/", (req, res) => {
    res.render('index', { title: 'Home Page', friendsData })
    // 'index' is the name of the template or view file to be rendered
    // {} is an object (to be used by the template engine to dynamically generate the HTML) passed to the render method
});

router.get("/add", (req, res) => {
    res.render('add_friend', { title: "Add Friend" });
})

router.get("/gallery", (req, res) => {
    res.render('gallery', { title: "Gallery" });
})


module.exports = router;