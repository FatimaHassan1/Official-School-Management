import SideNavigation from '../components/SideNavigation';
import './website.css';
import {Addwebsitemenu , getAllwebsitemenus , Deletewebsitemenu} from './WebsiteApi';
import { useState , useEffect } from 'react';

function WebsiteMenu(){

    const [WebsiteMenu , setWebsiteMenu] = useState({
        menuth : "" ,
        menuen: "" ,
    })
    
    const [ allWebsiteMenu , SetAllWebsiteMenu ] = useState([])

    useEffect(()=>{
        getAllWebsiteMenuData();
    } , [])

    const getAllWebsiteMenuData = async() => {
        let response = await getAllwebsitemenus()
        SetAllWebsiteMenu(response.data)
    }

    const onValueChange = (event) => {
        const {name , value} = event.target;
        setWebsiteMenu({...WebsiteMenu , [name]:value})
        console.log(WebsiteMenu)
    }

    const sendData = async() => {
        await Addwebsitemenu(WebsiteMenu)
    }

    const deletewebsitemenurecord = async(id) => {
        try{
            await Deletewebsitemenu(id);
            getAllWebsiteMenuData();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <form className='websitemenu'>
                        <input onChange={onValueChange} name='menuth' type='text' placeholder='Menu Th' />
                        <input onChange={onValueChange} name='menuen' type='text' placeholder='Menu En' />
                        <button onClick={sendData} id='add-student'>Submit</button>
                    </form>

                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Menu Th</th>
                            <th>Menu En</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {
                                allWebsiteMenu.map((parameter)=>{
                                    return(
                                        <tr>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.menuth}</td>
                                            <td>{parameter.menuen}</td>
                                            <td>
                                                <button onClick={() => {deletewebsitemenurecord(parameter._id)}}>Delete</button>
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

export default WebsiteMenu;