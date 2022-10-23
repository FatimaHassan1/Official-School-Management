import axios from "axios" ;

export const addStationaryform = async(data) => {
    await axios.post("/addstationary" , data)
}

export const getallstationary = async() => {
    return await axios.get("/getstationary")
}

export const deletestationaryrecord = async(id) => {
    return await axios.delete(`/deletestationary/${id}`)
}

export const approvestaionary = async(id) => {
    return await axios.put(`/approvestationary/${id}`)
}

export const rejectstaionary = async(id) => {
    return await axios.put(`/rejectstationary/${id}`)
}