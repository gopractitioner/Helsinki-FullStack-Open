import axios from 'axios';

const baseURL = 'http://localhost:3001/notes'

const getAll = () => {
    return axios.get(baseURL).then(response => response.data)
}

const create = (newObject) => {
    return axios.post(baseURL, newObject).then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject).then(response => response.data)
}
//let noteService = { getAll, create, update }
export default {
    getAll: getAll,
    create: create,
    update: update
}
//export default noteService