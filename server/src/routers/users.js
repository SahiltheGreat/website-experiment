const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')

const Router = new express.Router()

// End point for creating new user i.e signup 
Router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.send(e)
    }
})

// End point for login user
Router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findbyCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
})

// end point to logout the user
Router.delete('/users/logout', auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token })
        await req.user.save()
        res.send()
    } catch(e) {
        res.status(500).send(e)
    }
})

// End point to read the profile data of the user
Router.get('/users/me' , auth, (req, res) => {
        res.send(req.user)
})

module.exports = Router