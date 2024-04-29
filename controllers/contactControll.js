//@get Contact By ID
//@Type Get
//@Scope Public
const Contact = require('../models/contactModal');
const asyncHandler = require('express-async-handler');
const getContact =asyncHandler(async (req, res) => {
    
    const contact = await Contact.findOne({
      $and: [
          { _id: req.params.id }
      ]
    });
    res.status(200).json({
      message: `Get contact by id ${contact}`})
});
//@get All Contacts 
//@Type Get
//@Scope Public
const getContacts =asyncHandler(async(req, res) => {
  console.log('in Get Contacts');
  const contacts =await Contact.find()
    res.status(200).json({
      message: contacts})
});
//@get All Contacts 
//@Type Get
//@Scope Public
const MakeContact =asyncHandler(async(req, res) => {
    console.log('Contact Data to Build',req.body);
    const {name , age , email} = req.body;
    if(!name || !email){
        res.status(400).json('Name and Age is requried');
        
        throw new Error('All Fields Are Requried');
    }
    const contact = await Contact.create({
      name : req.body.name,
      age : req.body.age,
      email : req.body.email
    });
    res.status(201).json({
      message: `Creating Contacts ${contact}`})
});
//@get Contact By ID
//@Type Get
//@Scope Public
const deleteContact = asyncHandler(async (req, res) => {
  const data = await Contact.deleteOneById(req.params.id, (err, doc) => {
      if (err) {
          res.status(500).json({ message: `Error deleting contact: ${err}` });
      } else {
          if (doc) {
              res.status(200).json({ message: `Contact with ID ${req.params.id} deleted successfully` });
          } else {
              res.status(404).json({ message: `Contact with ID ${req.params.id} not found` });
          }
      }
  });
});

module.exports ={getContact,getContacts,deleteContact,MakeContact};