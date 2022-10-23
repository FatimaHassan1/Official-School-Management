import axios from "axios";

export const AddExternal = async(data) => {
    try {
        await axios.post(`/external`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllExternals = async() => {
    try {
        return await axios.get('/externalget')
    } catch (error) {
        console.log(error)
    }
}


 export const DeleteExternal = async (id) => {
    try{
        return await axios.delete(`/deleteexternal/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
