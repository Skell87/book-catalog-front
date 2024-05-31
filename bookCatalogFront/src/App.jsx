
import './App.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authContext'
import { fetchUser } from './api'
import { useNavigate } from 'react-router-dom'

function App() {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  
  
  const submit = () => {
    fetchUser({ auth })
  }

  return (
    <div className="p-5">
      <h1>Home</h1>
      <button onClick={() => submit()}>Fetch Profile</button>
    </div>
  )
}
export default App
