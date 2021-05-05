import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const DeleteButton = (props) => {
    const [deletedGoals, setDeletedGoals] = useState([])
    // const deleteGoal = (e) => {
    //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/goal/${id}`).then((response) => {
    //         deleteGoal(response.data.goal)
    //     })
    // }

    const deleteGoal = async(id) => {
        let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/goal/${props.id}`)
        console.log(response)
    }

    // useEffect(() => {
    //     deleteGoal()
    // },[])
    return (
        <div>
            <button onClick={deleteGoal} className="delete">Delete</button>
        </div>
    )
}

export default DeleteButton
