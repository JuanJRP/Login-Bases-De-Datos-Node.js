const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: 'http://www.automaticaycontrol.com/',
    failureRedirect: '/',
    passReqToCallback: true
}));

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/redirect', (req, res, next) => {
    location.href = "http://www.automaticaycontrol.com/";
});

module.exports = router;