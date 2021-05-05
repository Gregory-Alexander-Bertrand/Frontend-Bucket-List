import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UpdateForm = (props) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/goal/${props.id}`, {name, location, date, description}).then((response) => {
            console.log(response)
        })

    }

    return (
        <div>
           <div className="update-form">
               <form onSubmit={submitForm} className="update">
                   <div className="form-control">
                       <label htmlFor="name">Name:</label>
                       <input value={name} onChange={(e) => setName(e.target.value)} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="location">Location:</label>
                       <input value={location} onChange={(e) => setLocation(e.target.value)} />
                   </div>
                   <div className="form-control">
                    <label htmlFor="date">Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="description">Description</label>
                       <input value={description} onChange={(e) => setDescription(e.target.value)} />
                   </div>
                   <div className="form-control">
                       <input type="submit" value="update" />
                   </div>
               </form>
               </div> 
        </div>
    )
}

export default UpdateForm
