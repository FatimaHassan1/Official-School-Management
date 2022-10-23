import SideNavigation from '../components/SideNavigation';
import './mywebsite.css';
import {NavLink} from 'react-router-dom';
import TeacherSidebar from '../TeacherRedirect/TeacherSidebar';

function MyWebsite(){
    return(
        <>
            <div className='dashboard-container'>
                <TeacherSidebar />
                <div className='content'>
                    
                    <NavLink to='/addmywebsite'><button id='add-student'>Add New Record</button></NavLink>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Tag</th>
                            <th>Views</th>
                            <th>Update</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <td>1</td>
                            <td>About</td>
                            <td>About</td>
                            <td>About</td>
                            <td>25</td>
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

export default MyWebsite;