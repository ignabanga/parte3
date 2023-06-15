import axios from 'axios'
import express from 'express'
import App from '../App'

const cors = require('cors')
const app = express();
app.use(cors());

const baseUrl = 'http://localhost:3001/api/notes'




const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }