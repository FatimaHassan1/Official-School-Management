import SideNavigation from '../components/SideNavigation';
import './allpage.css';


function addPage(){
    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <h3 className='testinonial-heading'>Testimonial</h3>
                    <form className='add-testimonial'>
                        <input placeholder='Name (ภาษาไทย)' type='file'/>
                        <input placeholder='Name (English)' type='text' />
                        <input placeholder='Title (ภาษาไทย)' type='text'/>
                        <input placeholder='Title (English)' type='text'/>
                        <input placeholder='Tag (ภาษาไทย)' type='text'/>
                        <input placeholder='Tag (English)' type='text'/>
                        <textarea cols='110' rows='10' placeholder='Discreption'></textarea>
                        <button id='add-student'>Submit</button>
                    </form>
                    

                </div>

                
            </div>
        </>
    )
}

export default addPage;