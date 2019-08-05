var express = require('express');
const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()
        .then(users => {

            res.json(users.username)
        }) //return all of the users from the db in json
        .catch(err => {
            res.status(400).json('Error: ' + err);
        })
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
module.exports = router;