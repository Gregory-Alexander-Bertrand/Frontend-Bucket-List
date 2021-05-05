import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useState } from 'react'
import Login from '../Pages/Login'

const Navbar = (props) => {
    
    const logout = () => {
        localStorage.clear()
        props.setUser({})
    }

    return (
        <header>
            <div className="navigation">
        <nav>
           
            {props.user.id ?
            <>
            <Link to="/">Home</Link>
                {   ' - '   }
            <Link to="/Mylist">My List</Link>
            {   ' - '   }
            <Link to="/Create">Create Bucket List</Link>
            {   ' - '   }
            <span onClick={() => logout()}>
                <Link to="/">Logout</Link>
            </span>
            </>
            :
            <>
            <Link to="/">Home</Link>
            {   ' - '   }
            <Link to="/Signup">Signup</Link>
            {   ' - '   }
            <Link to="/Login">Login</Link>
            </>
            }
        </nav>
        </div>
        </header>
    )
}

export default Navbar
