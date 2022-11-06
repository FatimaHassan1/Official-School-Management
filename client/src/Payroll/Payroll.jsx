import SideNavigation from "../components/SideNavigation"
import { useState , useEffect } from 'react';

function Payroll (){
    const [levels , setlevels] = useState({
        levelone : "" ,
        leveltwo: "" ,
        payroll:"",
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
                        <select style={{outline : "none" , width: "15%" ,height: "30px", marginRight:"10px"}} onChange={onValueChange} name='payroll'><option value='income'>Income</option><option value='deduct'>Deduct</option></select>
                        <button id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Payroll</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Asad</td>
                                <td>Provident fund</td>
                                <td>Income</td>
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

export default Payroll;