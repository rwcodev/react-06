import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useCrud = () => {

    const [response, setResponse] = useState()

    // Read
    const getApi = (url, withToken) => {
        axios.getApi(url, withToken ? getConfigToken() : {})
            .then(res => setResponse(res.data))
            .catch(res => console.log(err))
    }
    // Create
    const postApi = (url, data, withToken) => {
        axios.post(url, data, withToken ? getConfigToken() : {})
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response. res.data] : [res.data])
        })
        .catch(err => console.log(err))
    }
    // Delete
    const deleteApi = (url, withToken) => {
        axios.delete(url, withToken ? getConfigToken() : {})
        .then(res => {
            console.log(res.data)
            const id = url.split('/').at(-1)
            setResponse(response.filter(e => id !== e.id))
        })
        .catch(err => console.log(err))
    }
    // Update. No se requiere
    const updateApi = () => {

    }
    return[response, getApi, postApi, deleteApi, updateApi]
}

export default useCrud