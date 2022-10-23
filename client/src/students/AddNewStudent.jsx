import React , {useState} from 'react';
import {AddStudentData} from '../service/studentApi';
import { NavLink} from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';
import StudentSidebar from '../StudentRedirect/StudentSidebar';



function AddNewStudent(){

    const [newStudent , SetStudent] = useState({    
        stuname : "" ,
        stuclass : "" ,
        stucast : "",
        file: ""
    })

    const onValueChange = (e) => {
        const {name , value} = e.target;
        SetStudent({...newStudent , [name] : value})
        console.log(newStudent)
    }

    const saveStudent = async(e) => {
        try{
            await AddStudentData(newStudent);
            console.log("Hello Students")
        }catch(err){

        }
    }

    return(
        <>
        <div id='requestforms-container'>
            <StudentSidebar />
            <div id='requestforms-content'>
                <form className='form-container' enctype='multipart/form-data'>
                    <div  id='edit-user-first'>

                        <div className='child-1'>
                            <label>Name</label>
                            <input  type='text' onChange={onValueChange} name='stuname'/>
                        </div>

                        <div className='child-1'>
                            <label>Class</label>
                            <input  type='text' onChange={onValueChange} name='stuclass'/>
                        </div>

                    </div>

                    <div className='edit-user-desctiption'>
                        <label>Cast</label>
                        <input  type='text' onChange={onValueChange} name='stucast'/>
                    </div>

                    <div className='edit-user-desctiption'>
                        <label>File</label>
                        <input  type='file' onChange={onValueChange} name='file'/>
                    </div>

                    <button onClick={saveStudent}>Save Changes</button>
                    <NavLink exact to='/students'><button>Back</button></NavLink>

                </form>
            </div>
        </div>
        </>
    )
}

export default AddNewStudent; 