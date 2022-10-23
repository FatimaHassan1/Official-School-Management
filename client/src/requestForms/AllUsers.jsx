import React , {useEffect}  from 'react';
import { useState } from 'react';
import {getUsers , deleteUserRecord , approveapi , getsingleuser , rejectapi} from '../service/api';
import {NavLink} from 'react-router-dom';
import DatePicker from "react-datepicker";
import StudentSidebar from '../StudentRedirect/StudentSidebar';

const newUsers = [{
    name : '',
    date : '',
    subject : '',
    description : '',
    status : 'Waiting List'
}]

function AllUsers(){

    const [user , setUser] = useState(newUsers);

    const updaterecord = async(id) => {
        try{
            let response = await getsingleuser(id);
            setUser(response.data)
            console.log(response.data)
            await approveapi(user , id);
            getAllUsers();
        }catch(error){
            console.log(error)
        }
    }  

    const rejectrecord = async(id) => {
        try{
            let response = await getsingleuser(id);
            setUser(response.data)
            console.log(response.data)
            await rejectapi(user , id);
            getAllUsers();
        }catch(error){
            console.log(error)
        }
    }  

    useEffect(()=>{
        getAllUsers();
    },[])
    
    const [myusers , setMyUsers] = useState([])
    
    const getAllUsers = async() => {
        let response = await getUsers();
        setMyUsers(response.data)
        console.log(response);
        console.log("Hello This  is Users Database");
    }
    
    const deleteUser = async(id) => {
        try{
            await deleteUserRecord(id);
            getAllUsers();
            console.log("deleted successfully")
        }catch(error){
            console.log(error)
        }
    }  

    return(
        <div id='requestforms-container'>
            <StudentSidebar />
            <div id='requestforms-content'>
                <h2>REQUEST FORMS</h2>
                <NavLink exact to='/add'><button id='add-user-link'>Add Form</button></NavLink>
                <table id='request-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myusers.map((user) => {
                                return(
                                    <>
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td><DatePicker value={user.date}/></td>
                                            <td>{user.subject}</td>
                                            <td>{user.description}</td>
                                            <td>{user.status}</td>
                                            <td className='action-buttons'>
                                                <NavLink to={`/edit/${user._id}`}><button>Edit</button></NavLink>
                                                <button onClick={()=>deleteUser(user._id)}>Delete</button>
                                                <button onClick={()=>updaterecord(user._id)}>Approve</button>
                                                <button onClick={()=>rejectrecord(user._id)}>Reject</button>
                                                <NavLink to={`/pdf/${user._id}`}><button>Print</button></NavLink>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers 