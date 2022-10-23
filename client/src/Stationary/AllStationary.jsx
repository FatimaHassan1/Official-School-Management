import SideNavigation from '../components/SideNavigation';
import {NavLink} from "react-router-dom";
import { useEffect } from 'react';
import { getallstationary , deletestationaryrecord , approvestaionary , rejectstaionary} from '../service/stationaryApi';
import { useState } from 'react';


function AllStationary(){

    const [stationary , setStationary] = useState([]);

    useEffect(()=>{
        getAllStationaryrecord()
    } , [])
    
    const getAllStationaryrecord = async() => {
        let response = await getallstationary()
        console.log(response.data);
        setStationary(response.data);
    }

    const deletestationary = (id) => {
        deletestationaryrecord(id);
        getAllStationaryrecord()
    }
    const approvestationary = async(id) => {
        await approvestaionary(id)
        await getAllStationaryrecord()

    }
    const rejectstationary = async(id) => {
        await rejectstaionary(id)
        await getAllStationaryrecord()

    }


    return(
        
        <div className='dashboard-container'>
            <SideNavigation />
            <div className='content'>
                <NavLink exact to="/addstationary"><button id='add-student'>Add Stationary Request</button></NavLink>
                <table id='request-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stationary.map((parameter)=>{
                                return(
                                    <>
                                        <tr key={parameter._id}>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.date}</td>
                                            <td> {parameter.backpack ? `= Backpack ${parameter.backpack} , ` : " "} {parameter.laminating ? `= Laminating ${parameter.laminating} ,` : " "} {parameter.brush ? `= Brush ${parameter.brush} ,` : " "}</td>
                                            <td>{parameter.status}</td>
                                            <td className='action-buttons'>
                                                <button onClick={() => deletestationary(parameter._id)}>Delete</button>
                                                <button onClick={() => approvestationary(parameter._id)}>Approve</button>
                                                <button onClick={() => rejectstationary(parameter._id)}>Reject</button>
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

export default AllStationary;