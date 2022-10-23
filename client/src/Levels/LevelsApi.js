import axios from "axios";

export const AddLevel = async(data) => {
    try {
        await axios.post(`/level`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllLevels = async() => {
    try {
        return await axios.get('/levelget')
    } catch (error) {
        console.log(error)
    }
}


 export const DeleteLevel = async (id) => {
    try{
        return await axios.delete(`/deletelevel/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
