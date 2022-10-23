import axios from 'axios';

export const addUserApi = async (data) => {
    try {
        await axios.post(`/addpresent`, data)
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get('/all')
    } catch (error) {
        console.log(error);
    }
}

export const getsingleuser = async (data) => {
    try{
        return await axios.get(`/${data}`)
    }catch(error){
        console.log({message : error.message})
    }
}

export const editSingle = async (user , reqid) => {
    try{
         return await axios.put(`/${reqid}` , user)
    }catch(error){
         console.log(error)
    }
 }

export const approveapi = async(user , id) => {
    try{
        return await axios.put(`/approve/${id}` , user)
    }catch(error){
        console.log(error)
    }
}

export const rejectapi = async(user , id) => {
    try{
        return await axios.put(`/reject/${id}` , user)
    }catch(error){
        console.log(error)
    }
}


export const getsinglepdf = async (data) => {
    try{
        return await axios.get(`/pdf/${data}`)
    }catch(error){
        console.log({message : error.message})
    }
}

export const deleteUserRecord = async (id) => {
    try{
        return await axios.delete(`/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}

export const addPresentEvent = async(data) => {
    try {
        await axios.post('/calendar' , data)
    } catch(error){
        console.log(error)
    }
}

export const getPresentEvent = async() => {
    try {
        return await axios.get('/getpresent')
    } catch(error){
        console.log(error)
    }
}