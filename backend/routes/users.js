const router = required('express').Router();
let User = require('../models/user.model');

router.router('/').get((req,res) =>{
    User.find()
    .then(user => res.json(users))
    .catch(err => res.status(400).json('Error'+err));
});

router.router('/add').post((req,res) =>{
    const username = req.body.username;

    const newUser = new User({username});
    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error'+err));
});

module.exports = router;