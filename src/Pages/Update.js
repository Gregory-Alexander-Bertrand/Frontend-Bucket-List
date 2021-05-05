import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Update = (props) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    
    return (
        <div>
            <form>
            <div>
                       <label htmlFor="name">Name:</label>
                       <input value={name} onChange={(e) => setName(e.target.value)} />
                   </div>
                   <div>
                       <label htmlFor="location">Location:</label>
                       <input value={location} onChange={(e) => setLocation(e.target.value)} />
                   </div>
                   <div>
                       <label htmlFor="date">Date:</label>
                       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                   </div>
                   <div>
                       <label htmlFor="description">Description:</label>
                       <input value={description} onChange={(e) => setDescription(e.target.value)} />
                   </div>
                   <div>
                       <input type="submit" value="Create List" />
                   </div>
            </form>
        </div>
    )
}

export default Update
