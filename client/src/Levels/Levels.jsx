import './level.css';
import SideNavigation from '../components/SideNavigation';
import {AddLevel , getAllLevels , DeleteLevel} from './LevelsApi'
import { useState , useEffect } from 'react';
import TeacherSidebar from '../TeacherRedirect/TeacherSidebar';

function Levels(){

    const [levels , setlevels] = useState({
        levelone : "" ,
        leveltwo: "" ,
    })
    
    const [ allLevels , SetAllLevels ] = useState([])

    useEffect(()=>{
        getAllLevelsData();
    } , [])

    const getAllLevelsData = async() => {
        let response = await getAllLevels()
        SetAllLevels(response.data)
    }

    const onValueChange = (event) => {
        const {name , value} = event.target;
        setlevels({...levels , [name]:value})
        console.log(levels)
    }

    const sendData = async() => {
        await AddLevel(levels)
    }

    const deleteLevels = async (id) => {
        try{
          await  DeleteLevel(id);
            getAllLevelsData();
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
                        <input onChange={onValueChange} type='text' placeholder='Level One' name='levelone' />
                        <input onChange={onValueChange} type='text' placeholder='Level Two' name='leveltwo'/>
                        <button id='add-student' onClick={sendData}>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Level One</th>
                            <th>Level Two</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {
                                allLevels.map((parameter)=>{
                                    return(
                                        <tr>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.levelone}</td>
                                            <td>{parameter.leveltwo}</td>
                                            <td>
                                                <button onClick={() => {deleteLevels(parameter._id)}}>Delete</button>
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

export default Levels;