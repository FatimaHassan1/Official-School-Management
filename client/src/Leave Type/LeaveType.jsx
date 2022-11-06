import SideNavigation from "../components/SideNavigation"
import { useState , useEffect } from 'react';

function LeaveType (){
    const [levels , setlevels] = useState({
        levelone : "" ,
        leveltwo: "" ,
        l1:"",
        l2:"",
        l3:"",
    })
    
    const [ allLevels , SetAllLevels ] = useState([])

    const onValueChange = (event) => {
        const {name , value} = event.target;
        setlevels({...levels , [name]:value})
        console.log(levels)
    }

    return (
        <>
            <div className='dashboard-container'>
                <SideNavigation />
                <div className='content'>
                    <form className='external'>
                        <input disabled type='text' placeholder='ID'/>
                        <input style={{width:"20%"}}  onChange={onValueChange} type='text' placeholder='Name' name='levelone' />
                        <input style={{width:"20%"}}  onChange={onValueChange} type='text' placeholder='Type' name='leveltwo'/>
                        <select style={{width: "62px" ,height: "30px", marginRight:"10px"}} onChange={onValueChange} name='l1'><option value='yes'>Yes</option><option value='no'>No</option></select>
                        <select style={{width: "62px" ,height: "30px", marginRight:"10px"}} onChange={onValueChange} name='l2'> <option value='yes'>Yes</option> <option value='no'>No</option></select>
                        <select style={{width: "62px" ,height: "30px", marginRight:"10px"}} onChange={onValueChange} name='l3'><option value='yes'>Yes</option><option value='no'>No</option></select>
                        <button id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>L1</th>
                            <th>L2</th>
                            <th>L3</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Asad</td>
                                <td>Sick</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td className='action-buttons'>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LeaveType;