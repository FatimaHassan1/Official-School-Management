import SideNavigation from '../components/SideNavigation';
import './mywebsite.css';
import TeacherSidebar from '../TeacherRedirect/TeacherSidebar';


function AddMyWebsite(){
    return(
        <>
            <div className='dashboard-container'>
                <TeacherSidebar />
                <div className='content'>
                    
                    <h3 className='testinonial-heading'>Add Website</h3>
                    <form className='add-testimonial'>
                        <input placeholder='Name' type='file'/>
                        <input placeholder='Category' type='text' />
                        <input placeholder='Tag' type='text'/>
                        <input placeholder='Views' type='text'/>
                        <input placeholder='Update' type='text'/>
                        <button id='add-student'>Submit</button>
                    </form>
                    

                </div>

                
            </div>
        </>
    )
}

export default AddMyWebsite;