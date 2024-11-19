
import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesinitial = [
    
  ]
  const [notes, setnotes] = useState(notesinitial)
  // ADD THE NOTES
  const addnote = async(name, email, messsage) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNTYyZTU4Y2Y0NDBjNDMyMTZjMTg4In0sImlhdCI6MTcyNTI2MDU1OX0.cIaWOoqyjz6_h0aEH1hLu8ErF6r4374tYtQNZMTUCos'
    //   },
    //   body: JSON.stringify({title,description,tag})
    })
    const json = await response.json()
    console.log(json)
    const note = {
      "_id": "66d837a2e4232a39033b66f0",
      "user": "66d562e58cf440c43216c188",
      "name": name,
      "email": email,
      "message": message,
    }
    setnotes(notes.concat(note))
  }
  return (
    <noteContext.Provider value={{ notes,  addnote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
