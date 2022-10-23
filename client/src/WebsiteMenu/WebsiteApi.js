import axios from "axios";

export const Addwebsitemenu = async(data) => {
    try {
        await axios.post(`/websitemenu`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllwebsitemenus = async() => {
    try {
        return await axios.get('/websitemenuget')
    } catch (error) {
        console.log(error)
    }
}


 export const Deletewebsitemenu = async (id) => {
    try{
        return await axios.delete(`/deletewebsitemenu/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
