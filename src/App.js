import './App.css';
import './index.css'
// import {BrowserRouter as Redirect, Route, Router } from 'react-router-dom'
import { Redirect, Route, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Mylist from './Pages/Mylist'
import Update from './Pages/Update'
import Navbar from './Components/Navbar'

function App() {
  const [user, setUser] = useState({})
  const [goals, setGoals] = useState({})

  
  const getUserInfo = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/verify`, {
        headers: {
          authorization: userId
        }
      })
      console.log(response)
      setUser(response.data.user)
      setGoals(response.data.user.goals)

    } catch (error) {
      console.log(error, 'unable to find')
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div className="App">
      <Navbar user={user}
      setUser={setUser}/>
      <Route 
      exact path="/"
      render={() => {
        return <Home />
      }}
      />
    
      <Route 
      path="/Signup"
      render={() => {
        if (user.id) {
          return <Redirect to="/" />
        } else {
          return <Signup setUser={setUser} />
        }
      }}
      />
      
      <Route 
      path="/Login"
      render={() => {
        console.log(user.id)
        if (user.id) {
          return <Redirect to="/" />
        } else {
          return <Login setUser={setUser} />
          console.log(user.id)
        }
      }}
      />
      {/* <Route 
      path="/Create"
      render={() => {
        return <Create user={user}/>
      }}
      /> */}
      <Route 
      exact path="/Create"
      render={() => {
        if(user.id) {
          return <Create user={user}/>
        } else {
          return <Redirect to="/Login"/>
        }
      }}
      />
      <Route
      path="/Mylist"
      render={() => {
        return <Mylist goals={goals}/>
      }}
      />

    </div>
  );
}

export default App;
