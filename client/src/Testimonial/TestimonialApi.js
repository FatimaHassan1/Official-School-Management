import axios from "axios";

export const AddtestimonialData = async(data) => {
    try {
        await axios.post(`/addtestimonial`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAlltestimonials = async() => {
    try {
        return await axios.get('/testimonials')
    } catch (error) {
        console.log(error)
    }
}

export const getSingletestimonial = async (data) => {
    try{
        return await axios.get(`/getsingletestimonial/${data}`)
    }catch(error){
        console.log({message : error.message})
    }
}

export const edittestimonial = async (user , reqid) => {
    try{
         return await axios.put(`/testimonialedit/${reqid}` , user)
    }catch(error){
         console.log(error)
    }
 }

 export const deletetestimonialRecord = async (id) => {
    try{
        return await axios.delete(`/deletetestimonial/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
