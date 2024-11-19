const express = require('express');
const router = express.Router();
const User =require('../models/User')
const app=express()
app.use(express.json())

// Example route
router.post('/createuser',async (req, res) => {
    try{
    // Your logic here
    console.log(req.body)
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user);
    res.send(req.body)}
    catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error",error})
    }
});

// const addnote = async(name,email,message) => {
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: 'post',
//       body: JSON.stringify({title,description,tag})
//     })
//     const json = await response.json()
//     console.log(json)
//     const note = {
//       "_id": "66d837a2e4232a39033b66f0",
//       "user": "66d562e58cf440c43216c188",
//       "title": title,
//       "description": description,
//       "tag": tag,
//       "date": "1725446050391",
//       "__v": 0
//     }
//     setnotes(notes.concat(note))
// }
module.exports = router;
