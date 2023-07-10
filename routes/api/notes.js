const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/users'

// POST /api/users
router.get('/', notesCtrl.index);

router.post('/', notesCtrl.addNote);

module.exports = router;