import axios from "axios" ;

export const addpurchaseform = async(data) => {
    await axios.post(`/addpurchase` , data)
}

export const getpurchaseform = async() => {
    return await axios.get(`/getpurchase`)
}

export const deletepurchaserecord = async(id) => {
    return await axios.delete(`/deletepurchase/${id}`)
}

export const approvepurchase = async(id) => {
    return await axios.put(`/approvepurchase/${id}`)
}

export const rejectpurchase = async(id) => {
    return await axios.put(`/rejectpurchase/${id}`)
}