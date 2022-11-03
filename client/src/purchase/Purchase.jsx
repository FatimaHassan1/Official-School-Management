import SideNavigation from '../components/SideNavigation';
import {NavLink} from 'react-router-dom';
import {getpurchaseform , deletepurchaserecord , approvepurchase , rejectpurchase} from '../service/purchaseApi';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from "universal-cookie/cjs/Cookies";
const cookie = new Cookies();

function Purchase(){
    const user_role = cookie.get("user_role");

    const [getpurchase , setGetPurchase] = useState([])

    useEffect(()=> {
        getAllPurchases()
    } , [])

    const getAllPurchases = async() => {
        let response = await getpurchaseform();
        setGetPurchase(response.data)
        console.log(response.data)
    }

    const deletePurchase = (id) => {
        deletepurchaserecord(id);
        getAllPurchases()
    }
    const approvePurchase = async(id) => {
        await approvepurchase(id)
        await getAllPurchases()

    }
    const rejectPurchase = async(id) => {
        await rejectpurchase(id)
        await getAllPurchases()

    }

    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <NavLink exact to="/addpurchase"><button id='add-student'>Add Stationary Request</button></NavLink>
                    <table id='request-table' className='purchase-table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Order</th>
                                    <th>Qty</th>
                                    <th>Price/Qty</th>
                                    <th>Status</th>
                                    {user_role === "Admin" && ( 
                                        <th>Actions</th>
                                    )}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getpurchase.map((parameter)=>{
                                        return(
                                            <tr>
                                                <td>{parameter._id}</td>
                                                <td>{parameter.date}</td>
                                                <td>{parameter.order}</td>
                                                <td>{parameter.qty}</td>
                                                <td>{parameter.price}</td>
                                                <td>{parameter.status}</td>
                                                {user_role === "Admin" && ( 
                                                    <td className='action-buttons'>
                                                        <button onClick={() => deletePurchase(parameter._id)}>Delete</button>
                                                        <button onClick={() => approvePurchase(parameter._id)}>Approve</button>
                                                        <button onClick={() => rejectPurchase(parameter._id)}>Reject</button>
                                                    </td>
                                                )}

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

export default Purchase;