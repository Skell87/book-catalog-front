import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./authContext"
import { getToken, createUser } from "./api"
import { useNavigate } from "react-router-dom";




const CreateUserInput = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const submit = async () => {
    try {
      const response = createUser({ username, password, first_name: firstName, last_name: lastName })
      console.log('user created succesfully:', response)
    } catch (error){
      console.error('error creating user', error)
    }
  }

  return (
    <div className="p-5">
      <h1>Create User</h1>
      <div>
        <div>Username:</div>
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div>
        <div>Password:</div>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div>
        <div>First Name:</div>
        <input
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div>
        <div>Last Name:</div>
        <input
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => submit()}>Submit</button>
      </div>

    </div>
  )
}


function Login() {
  const { auth } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.accessToken) {
      fetchUser({ auth })
        .then(() => {
          navigate('/')
        })
        .catch(error =>{
          console.log('error')
        })
    }
  }, [auth.accessToken, navigate])

  const submit = async () => {
    try {
      getToken({ auth, username, password }).then (response => {
        
      })
      if (token){
        console.log("login succesful, redirecting to home page")

        navigate("/")
      }
      else{
        console.log('nope, not redirecting.')
      }
    } catch (error) {
      console.error('error logging in', error)
    }
  }

  return (
    <div className="p-5">
      <h1>Login</h1>
      <div>
      <div>Username:</div>
      <input
        onChange={e => setUsername(e.target.value)}
        value={username}
        />
      </div>
      <div>
        <div>Password:</div>
        <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => submit()}>submit</button>
      </div>
      <CreateUserInput />
    </div>
  )
}


export default Login