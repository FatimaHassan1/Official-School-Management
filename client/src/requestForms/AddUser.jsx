import React , {useState} from 'react';
import {addUserApi} from '../service/api';
import { NavLink} from 'react-router-dom';
import SideBar from '../components/SideNavigation';

function AddUser(){

    const [user , setUser] = useState({
        date : '',
        subject : '',
        description : '',
        status : 'Waiting List',
        employee : '500345',
        requestName : "Asad Khan"
    });

    const onValueChange = (e) => {
        // console.log(e.target.name , e.target.value)
        setUser({...user , [e.target.name] : e.target.value})
    }

    const addUserDetails = async (e) => {
        await addUserApi(user)
        console.log(user)
    }

    return(
        <>
        <div id='requestforms-container'>
            <SideBar />
            <div id='requestforms-content'>
                <form className='form-container'>
                    <div  id='edit-user-first'>
                        
                        <div className='child-1'>
                            <label>Date</label>
                            <input onChange={onValueChange} type='date' name='date'/>
                        </div>

                        <div className='child-1'>
                            <label>Subject</label>
                            <input onChange={onValueChange} type='text' name='subject'/>
                        </div>

                    </div>

                    <div className='edit-user-desctiption'>
                        <label>Description</label>
                        <input onChange={onValueChange} type='text' name='description'/>
                    </div>

                    <button onClick={addUserDetails}>Save Changes</button>
                    <NavLink exact to='/all'><button>Back</button></NavLink>

                </form>
            </div>
        </div>
        </>
    )
}

export default AddUser 