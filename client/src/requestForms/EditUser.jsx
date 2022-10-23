import React , {useState , useEffect} from 'react';
import {getsingleuser , editSingle} from '../service/api';
import { NavLink , useParams} from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';

const newUsers = [{
    date : '',
    subject : '',
    description : '',
    status : 'Waiting List'
}]


function EditUser(){

    const [user , setUser] = useState(newUsers);
    const { reqid } = useParams();
    
    useEffect(()=>{
        getsingleUserData();
    } , [])

    const getsingleUserData = async() => {
        let response = await getsingleuser(reqid);
        setUser(response.data[0])
    }

    const onValueChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
        console.log(user)
    }

    const editUserDetails = async () => {
        await editSingle(user , reqid)
    }

    return(
        <div id='requestforms-container'>
            <SideNavigation />
            <div id='requestforms-content'>
                <form className='form-container'>
                        <div id='edit-user-first'>

                            <div className='child-1'>
                                <label>Date</label><br/>
                                <input onChange={(e) => onValueChange(e)} value={user.date}  type='text' name='date'/>
                            </div>

                            <div className='child-1'>
                                <label>Subject:</label><br/>
                                <input onChange={(e) => onValueChange(e)}  value={user.subject}  type='text' name='subject'/>
                            </div>

                        </div>
                        
                        <div className='edit-user-desctiption'>
                            <label>Description:</label><br/>
                            <input onChange={(e) => onValueChange(e)} value={user.description}  type='text' name='description'/>
                        </div>

                        <button onClick={editUserDetails}>Save Changes</button>
                        <NavLink exact to='/all'><button>Back</button></NavLink>

                    
                </form>
            </div>
        </div>
    )
}

export default EditUser 