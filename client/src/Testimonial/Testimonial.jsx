import SideNavigation from '../components/SideNavigation';
import './testimonial.css';
import {NavLink} from 'react-router-dom';
import { useEffect , useRef , useState } from 'react';
import {getAlltestimonials , deletetestimonialRecord} from './TestimonialApi';

function Testimonial(){

    const [allTestimonials , SetAllTestimonial] = useState([]);

    useEffect(()=>{
        getAllTestimonialRecords();
        deletetestimonial();
    }, [])
    

    const getAllTestimonialRecords = async() => {
        let response = await getAlltestimonials();
        console.log("Hello This is student Database");
        console.log(response.data);
        SetAllTestimonial(response.data);
    }

    const deletetestimonial = async(id) => {
        try{
            await deletetestimonialRecord(id);
            getAllTestimonialRecords();
        }catch(err){
            console.log(err)
        }
    }



    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <NavLink to='/addtestimonial'><button id='add-student'>Add New Record</button></NavLink>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Name ภาษาไทย</th>
                            <th>Name English</th>
                            <th>Update</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {
                            allTestimonials.map((parameter)=>{
                                return(
                                    <>
                                        <tr key={parameter._id}>
                                            <td>{parameter._id}</td>
                                            <td>{parameter.testithai}</td>
                                            <td>{parameter.testieng}</td>
                                            <td>{parameter.testiupdate}</td>
                                            <td className='action-buttons'>
                                                <button onClick={()=>deletetestimonial(parameter._id)}>Delete</button>
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
        </>
    )
}

export default Testimonial;