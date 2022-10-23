import SideNavigation from '../components/SideNavigation';
import './banner.css';
import {NavLink} from 'react-router-dom';

function Banner(){
    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <form className='add-testimonial'>
                        <input type='file'/>
                        <button id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Banner</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <td>1</td>
                            <td>About</td>
                            <td>Date</td>
                            <td>
                                <button id='add-student'>Delete</button>
                            </td>
                        </tbody>
                    </table>
                </div>

                
            </div>
        </>
    )
}

export default Banner;