import './classroom.css';
import SideNavigation from '../components/SideNavigation';
import { useState , useEffect} from 'react';
import {AddClassroom , getAllClasses , DeleteClass} from './classroomApi'

function Classrooms(){

    const [classroom , setClassroom] = useState({
        level : "" ,
        classroomone: "" ,
        classroomtwo: "" ,
    })
    
    const [ allClassrooms , SetAllClassrooms ] = useState([])

    useEffect(()=>{
        getallClassRooms();
    } , [])

    const getallClassRooms = async() => {
        let response = await getAllClasses()
        SetAllClassrooms(response.data)
    }


    const onValueChange = (event) => {
        const {name , value} = event.target;
        setClassroom({...classroom , [name]:value})
        console.log(classroom)
    }

    const sendData = async() => {
        await AddClassroom(classroom)
    }


    const deleteClassRoom = async(id) => {
        try{
         await  DeleteClass(id);
                getallClassRooms();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    <form className='external'>
                        <input onChange={onValueChange} type='text' placeholder='Level' name='level'/>
                        <input onChange={onValueChange} type='text' placeholder='ภาษาไทย' name='classroomone'/>
                        <input onChange={onValueChange} type='text' placeholder='ภาษาอังกฤษ' name='classroomtwo'/>
                        <button onClick={sendData} id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Level</th>
                            <th>ภาษาไทย</th>
                            <th>ภาษาอังกฤษ</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {
                                allClassrooms.map((parameter)=>{
                                    return(
                                        <tr>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.level}</td>
                                            <td>{parameter.classroomone}</td>
                                            <td>{parameter.classroomtwo}</td>
                                            <td>
                                                <button onClick={() => deleteClassRoom(parameter._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                
            </div>
        </>
    )
}

export default Classrooms;