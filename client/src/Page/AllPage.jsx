import SideNavigation from '../components/SideNavigation';
import './allpage.css';
import {NavLink} from 'react-router-dom';

function AllPage(){
    return(
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    
                    <NavLink to='/addpage'><button id='add-student'>Add New Record</button></NavLink>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Name ภาษาไทย</th>
                            <th>Name English</th>
                            <th>Views</th>
                            <th>Update</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <td>1</td>
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

export default AllPage;