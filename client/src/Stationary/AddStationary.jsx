import SideNavigation from '../components/SideNavigation';
import {NavLink} from "react-router-dom";
import ABP from './images/ABP.jpg';
import Duster from './images/Duster.png';
import Printer from './images/Printer.jpg';
import { addStationaryform } from '../service/stationaryApi';
import { useState } from 'react';
function AddStationary(){
    const [product , setProduct] = useState({
        date : new Date() ,
        backpack : "" ,
        laminating: "" ,
        brush: "" ,
        status : "waiting list"
    })

    const onValueChange = (e) => {
        const {name , value} = e.target;
        setProduct({...product , [name] : value});
        console.log(product)
    }

    const addform = async() => {
        await addStationaryform(product);
    }

    return(
        
        <div className='dashboard-container'>
            <SideNavigation />
            <div className='content'>
                <form>
                    <button onClick={addform}>Save Changes</button>
                    <div className='stationary-container'>
                        

                        <div className='stationary-images'>
                            <img src={ABP}/>
                            <input className='labels-inputs' type="text" value="ABP-001 Backpack Backpack"/>
                            <input type="number" placeholder='QTY' onChange={onValueChange} name='backpack'/>
                        </div>

                        <div className='stationary-images'>
                            <img src={Duster}/>
                            <input className='labels-inputs' type="text" value="Laminating Films ( Sheet)"/>
                            <input type="number" placeholder='QTY' onChange={onValueChange} name='laminating'/>
                        </div>

                        <div className='stationary-images'>
                            <img src={Printer}/>
                            <input className='labels-inputs' type="text" value="Brush remove white board (Eraser) ( Piece)"/>
                            <input type="number" placeholder='QTY' onChange={onValueChange} name='brush'/>
                        </div>

                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStationary;