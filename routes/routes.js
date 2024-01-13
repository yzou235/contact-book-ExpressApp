const express = require('express');
const router = express.Router();

// router.get('/users', (req, res) => {
//     res.send("All Users");
// });

router.get("/", (req, res) => {
    res.render('index', { title: 'Home Page' })
    // 'index' is the name of the template or view file to be rendered
    // {} is an object (to be used by the template engine to dynamically generate the HTML) passed to the render method
});

router.get("/add", (req, res) => {
    res.render('add_users', { title: "Add Users" });
})

router.get("/gallery", (req, res) => {
    res.render('gallery', { title: "Gallery" });
})


module.exports = router;