import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Create = (props) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/goal`, {name, location, date, description},
        {headers:{Authorization: props.user.id}}).then((response) => {
            console.log(response)
           
        })
    }

    return (
        <div className="create-container">
            <p className="inspire-quote">"The only thing that will stop you from fulfilling your dreams is you."- Tom Bradley</p>
           <div className="create-form">
               <form onSubmit={submitForm} className="create">
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
                       <label htmlFor="description">Description:</label>
                       <input value={description} onChange={(e) => setDescription(e.target.value)} />
                   </div>
                   <div className="form-control">
                       <input type="submit" value="Create List" />
                   </div>
               </form>
           </div>
           <div className="form-output">
            <h1>name: {name}</h1>
            <h1>location: {location}</h1>
            <h1>Date: {date}</h1>
            <h1>Description: {description}</h1>
           </div>
        </div>
    )
}

export default Create
