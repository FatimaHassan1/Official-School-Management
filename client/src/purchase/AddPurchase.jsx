import SideNavigation from '../components/SideNavigation';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import {addpurchaseform} from '../service/purchaseApi';

function AddPurchase(){

    const [purchase , SetPurchase] = useState({
        date : new Date() ,
        order : 'order' ,
        qty : 'qty' ,
        price : 'price' ,
        status: "waiting list"
    })

    const onValueChange = (e) => {
        const {name , value} = e.target;
        SetPurchase({...purchase , [name] : value})
        console.log(purchase)

    }

    const addpurchase = async() => {
        await addpurchaseform(purchase);
    }


    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>

                    <form>
                        <button id='add-student' onClick={addpurchase}>Save Changes</button>
                        <table id='request-table' className='purchase-table'>
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Qty</th>
                                    <th>Price/Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type='text' onChange={onValueChange} name='order'/></td>
                                    <td><input type='text' onChange={onValueChange} name='qty'/></td>
                                    <td><input type='text' onChange={onValueChange} name='price'/></td>
                                </tr>
                            </tbody>
                        </table>
                            
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddPurchase;