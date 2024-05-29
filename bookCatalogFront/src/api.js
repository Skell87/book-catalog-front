import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000'

export const createUser = ({username, password, firstname, lastname}) => {
    axios({
        method: 'post',
        url: `${baseUrl}/create_user/`,
        data:{
            username,
            password,
            first_name: firstname,
            last_name: lastname,
        }
    })
    .then(response => {
        console.log('CREATE USER RESPONSE: ', response)
    })
    .catch(error => console.log('ERROR: ', error))
}

export const getToken = ({ auth, username, password}) => {
    axios.post(`${baseUrl}/token/`, {
        username,
        password
    }).then(response => {
        console.log('get token response', response)
        auth.setAccessToken(response.data.access)
    })
    .catch(error => console.log('ERROR', error))
}

export const fetchUser = ({ auth }) => {
    axios({
        method: 'get',
        url: `${baseUrl}/profile/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('FETCH USER RESPONES:', response)
    }).catch(error => console.log('ERROR: ', error))
}