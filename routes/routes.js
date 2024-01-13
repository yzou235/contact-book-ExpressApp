const express = require('express');
const router = express.Router();
const friendsData = require('../data/friends-data');
const path = require('path');

// router.get('/users', (req, res) => {
//     res.send("All Users");
// });

router.get("/", (req, res) => {
    res.render('index', { title: 'Home Page', friendsData })
    // 'index' is the name of the template or view file to be rendered
    // {} is an object (to be used by the template engine to dynamically generate the HTML) passed to the render method
});

// New route to get friend details by ID
router.get("/friends/:id", (req,res) => {
    const friendId = parseInt(req.params.id);
    const friend = friendsData.find((f) => f.id === friendId)
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({error:'Friend not fount'});
    }
})

router.get("/add", (req, res) => {
    res.render('add_friend', { title: "Add Friend" });
})

router.get("/gallery", (req, res) => {
    res.render('gallery', { title: "Gallery" });
})

// download image
router.get('/download', (req, res) => {
    res.download("./images/squad.jpg");
});


module.exports = router;