import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react'
import {BrowserRouter as Redirect, Route, Router } from 'react-router-dom'
import axios from 'axios'
import Create from '../Pages/Create'
import DeleteButton from '../Components/DeleteButton'
import UpdateForm from '../Components/UpdateForm'
const Mylist = (props) => {
 
  // const getBucketList = (e) => {
  //   e.preventDefault()
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal`).then((response) => {
  //     console.log(response.data.goals)
  //     setGoals(response.data.goals)
    
  //   })
  // }

  // const getBucketList = async() => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal/alluser`, {
  //       headers: {
  //         authorization: localStorage.getItem('userId')
  //       }
  //     })
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getBucketList()
  // }, [])
  
    return (
        <div className="list-container">
            {/* <button onClick={getBucketList}>Button</button> */}
              {props.goals.length > 0 ?
              <>
              {props.goals.map((goal) => {
                return (
                // <li key={goal.id}>{goal.name}</li>
                <div className="list-items">
                <h1 key={goal.id}>{goal.name}</h1>
                <h2>{goal.location}</h2>
                <h3>{goal.date}</h3>
                <h4>{goal.description}</h4>
                {/* <DeleteButton id={goal.id}/> */}
                <DeleteButton id={goal.id}/>
                <UpdateForm id={goal.id}/>
                </div>
                )
              })}
              </>
              :
              <p>Loading...</p>
            }
        </div>
    )
}

export default Mylist
