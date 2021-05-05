import React from 'react'
import {Link} from 'react-router-dom'

const AllGoals = (props) => {
    return (
        <div>
            <ul>
                {props.goals.map((goals) => {
                    return (
                        <li key={goals.id}></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllGoals
