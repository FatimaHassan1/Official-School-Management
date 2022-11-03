import SideNavigation from '../components/SideNavigation';
import './external.css';
import {AddExternal , getAllExternals , DeleteExternal} from './ExternalApi';
import { useState , useEffect } from 'react';

function ExternalLinks(){

    const [Externals , setExternals] = useState({
        th : "" ,
        en: "" ,
        url: "" ,
    })
    
    const [ allExternals , SetAllExternals ] = useState([])

    useEffect(()=>{
        getAllExternalsData();
    } , [])

    const getAllExternalsData = async() => {
        let response = await getAllExternals()
        SetAllExternals(response.data)
    }

    const onValueChange = (event) => {
        const {name , value} = event.target;
        setExternals({...Externals , [name]:value})
        console.log(Externals)
    }

    const sendData = async() => {
        await AddExternal(Externals)
    }

    const deleteExternalRecords = async(id) => {
        try{
            await DeleteExternal(id);
            getAllExternalsData();
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
                        <input onChange={onValueChange} name='th' type='text' placeholder='External Link Th' />
                        <input onChange={onValueChange} name='en' type='text' placeholder='External Link En' />
                        <input onChange={onValueChange} name='url' type='text' placeholder='External Link URL' />
                        <button onClick={sendData} id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>External Link Th</th>
                            <th>External Link En</th>
                            <th>External URL</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {
                                allExternals.map((parameter)=>{
                                    return(
                                        <tr>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.th}</td>
                                            <td>{parameter.en}</td>
                                            <td>{parameter.url}</td>
                                            <td>
                                                <button onClick={() => {deleteExternalRecords(parameter._id)}}>Delete</button>
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

export default ExternalLinks;