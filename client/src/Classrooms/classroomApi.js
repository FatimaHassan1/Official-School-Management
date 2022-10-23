import axios from "axios";

export const AddClassroom = async(data) => {
    try {
        await axios.post(`/classroom`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllClasses = async() => {
    try {
        return await axios.get('/classroomget')
    } catch (error) {
        console.log(error)
    }
}


 export const DeleteClass = async (id) => {
    try{
        return await axios.delete(`/deleteClass/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
