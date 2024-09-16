const express = require('express')
const router = express.Router()
const {
    authUser,
    registerUser,
    getUserProfile,
    logOutUser,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser} = require('../controllers/userController')

    router.route('/').post(registerUser).get(getUsers);
    router.post('/login', authUser);
    router.post('/logout', logOutUser); 
    router.route('/profile').get(getUserProfile).put(updateUserProfile);
    
    router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router