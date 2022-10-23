import axios from "axios";

export const AddSubject = async(data) => {
    try {
        await axios.post(`/subject`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllSubjects = async() => {
    try {
        return await axios.get('/subjectget')
    } catch (error) {
        console.log(error)
    }
}


 export const DeleteSubject = async (id) => {
    try{
        return await axios.delete(`/deletesubject/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
