import React , {useState , useEffect} from 'react';
import { NavLink, useParams} from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';
import {editStudent , getSingleStudent} from '../service/studentApi';
import StudentSidebar from '../StudentRedirect/StudentSidebar';


function EditStudents(){

    const [newStudent , SetStudent] = useState({
        stuname  : '',
        stuclass : '',
        stucast : ''
    })

    const { sid } = useParams()
    
    useEffect(()=>{
        getSignleStudentData();
    } , [])

    const getSignleStudentData = async() => {
        let response = await getSingleStudent(sid);
        SetStudent(response.data[0])
        console.log(response.data[0])
    }

    const onValueChange = (e) => {
        const {name , value} = e.target;
        SetStudent({...newStudent , [name] : value})
        console.log(newStudent)
    }

    const updateStudent = async() => {
        await editStudent(newStudent , sid);
    }

    return(
        <>
        <div id='requestforms-container'>
            <StudentSidebar />
            <div id='requestforms-content'>
                <form className='form-container'>
                    <div  id='edit-user-first'>

                        <div className='child-1'>
                            <label>Name</label>
                            <input  type='text' onChange={onValueChange} value={newStudent.stuname}  name='stuname'/>
                        </div>

                        <div className='child-1'>
                            <label>Class</label>
                            <input  type='text' onChange={onValueChange} value={newStudent.stuclass}  name='stuclass'/>
                        </div>

                    </div>

                    <div className='edit-user-desctiption'>
                        <label>Cast</label>
                        <input  type='text' onChange={onValueChange} value={newStudent.stucast} name='stucast'/>
                    </div>

                    <button onClick={updateStudent}>Save Changes</button>
                    <NavLink exact to='/students'><button>Back</button></NavLink>

                </form>
            </div>
        </div>
        </>
    )
}

export default EditStudents; 