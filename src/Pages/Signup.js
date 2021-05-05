import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`, {name, email, password}).then((response) => {
            console.log(response)
            localStorage.setItem('userId', response.data.userId)
            console.log(localStorage)
            props.setUser(response.data.user)
        })
    }
    return (
        <div className="signup-container">
            <p className="inspire-quote">"You're never too old to set another goal or to dream a new dream"- C.S. Lewis</p>
            <div className="signup-form">
                <form onSubmit={submitForm} className="sign-up">
                    <div className="form-control">
                        <label htmlFor="name">Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <input type="submit" value="sign up" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
