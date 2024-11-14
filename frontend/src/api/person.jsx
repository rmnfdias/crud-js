import api from './api'

//user = {name:'', email: '', senha''}
export const createPerson = async (person) => {
    const response = await api.post('/', person)

    return response.data
}

export const loginPerson = async (email, password) => {
    const body = { email, password}
    const response = await api.post('/login', body)

    return response.data
}

export const getSession = async () => {
    const response = await api.get('/session')

    return response.data
}