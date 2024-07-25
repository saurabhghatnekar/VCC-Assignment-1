const express = require('express');
const router = express.Router();
// get users from mongodb
const User = require("../models/user.model");
// connect to mongodb

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", '*');
    const users = await User.find({

    })
    res.send(users);
});

module.exports = router;
