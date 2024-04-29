const express = require('express');
const router = express.Router();
const {getContact,getContacts,deleteContact,MakeContact} = require("../controllers/contactControll")

router.route('/:id').get(getContact).delete(deleteContact);

router.route('/').get(getContacts).post(MakeContact);


module.exports = router; 