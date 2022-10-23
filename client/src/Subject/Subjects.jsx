import './subject.css';
import SideNavigation from '../components/SideNavigation';
import {AddSubject , getAllSubjects , DeleteSubject} from './SubjectApi'
import { useState , useEffect } from 'react';
import TeacherSidebar from '../TeacherRedirect/TeacherSidebar';

function Subject(){

    const [Subject , setSubject] = useState({
        thai : "" ,
        english : "" ,
        subjecttype: "" ,
    })
    
    const [ allSubject , SetAllSubject ] = useState([])

    useEffect(()=>{
        getAllSubjectData();
    } , [])

    const getAllSubjectData = async() => {
        let response = await getAllSubjects()
        SetAllSubject(response.data)
    }

    const onValueChange = (event) => {
        const {name , value} = event.target;
        setSubject({...Subject , [name]:value})
        console.log(Subject)
    }

    const sendData = async() => {
        await AddSubject(Subject)
    }

    const deleteSubjectrecord = async(id) => {
        try{
            await DeleteSubject(id);
            getAllSubjectData();
        }catch(err){
            console.log(err)
        }
    } 

    return(
        <>
            <div className='dashboard-container'>
                <TeacherSidebar />
                <div className='content'>
                    <form className='external'>
                        <input onChange={onValueChange} name='thai' type='text' placeholder='Subject Name (Thai)' />
                        <input onChange={onValueChange} name='english' type='text' placeholder='Subject Name (English)' />
                        <input onChange={onValueChange} name='subjecttype' type='text' placeholder='Type' />
                        <button onClick={sendData} id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Subject Name Thai</th>
                            <th>Subject Name English</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {
                                allSubject.map((parameter)=>{
                                    return(
                                        <tr>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.thai}</td>
                                            <td>{parameter.english}</td>
                                            <td>{parameter.subjecttype}</td>
                                            <td>
                                                <button onClick={() => {deleteSubjectrecord(parameter._id)}}>Delete</button>
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

export default Subject;