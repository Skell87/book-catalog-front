import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React, { useContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from './authContext'
import { fetchUser } from './api'

function App() {
  // const auth = { accessToken: '', setAccessToken: () => {}}
  const { auth } = useContext(AuthContext)
  // const { auth } = useContext(AuthContext)

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
