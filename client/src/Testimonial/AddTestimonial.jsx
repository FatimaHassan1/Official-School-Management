import React , {useState} from 'react';
import {AddtestimonialData} from '../Testimonial/TestimonialApi';
import { NavLink} from 'react-router-dom';
import SideNavigation from '../components/SideNavigation';



function AddTestimonial(){

    const [newTestimonial , SetTestimonial] = useState({    
        testithai : "" ,
        testieng : "" ,
        testiupdate : ""
    })

    const onValueChange = (e) => {
        const {name , value} = e.target;
        SetTestimonial({...newTestimonial , [name] : value})
        console.log(newTestimonial)
    }

    const saveTestiominal = async() => {
        await AddtestimonialData(newTestimonial);
    }

    return(
        <>
        <div id='requestforms-container'>
            <SideNavigation />
            <div id='requestforms-content'>
                <form className='form-container' enctype='multipart/form-data'>
                    <div  id='edit-user-first'>

                        <div className='child-1'>
                            <label>Name Thai</label>
                            <input  type='text' onChange={onValueChange} name='testithai'/>
                        </div>

                        <div className='child-1'>
                            <label>Name English</label>
                            <input  type='text' onChange={onValueChange} name='testieng'/>
                        </div>

                    </div>

                    <div className='edit-user-desctiption'>
                        <label>Update</label>
                        <input  type='date' onChange={onValueChange} name='testiupdate'/>
                    </div>

                    <button onClick={saveTestiominal}>Save Changes</button>
                    <NavLink exact to='/Testimonials'><button>Back</button></NavLink>

                </form>
            </div>
        </div>
        </>
    )
}

export default AddTestimonial; 