import axios from "axios";

export const AddStudentData = async(data) => {
    try {
        await axios.post(`/addstudent`  , data)
    } catch (error) {
        console.log(error);
    }
}

export const getAllStudents = async() => {
    try {
        return await axios.get('/students')
    } catch (error) {
        console.log(error)
    }
}

export const getSingleStudent = async (data) => {
    try{
        return await axios.get(`/getsingle/${data}`)
    }catch(error){
        console.log({message : error.message})
    }
}

export const editStudent = async (user , reqid) => {
    try{
         return await axios.put(`/studentedit/${reqid}` , user)
    }catch(error){
         console.log(error)
    }
 }

 export const deleteStudentRecord = async (id) => {
    try{
        return await axios.delete(`/deletestudent/${id}`)
    }catch(error){
        console.log({message : error.message})
    }
}
