import SideNavigation from "../components/SideNavigation"
import { useState , useEffect } from 'react';

function Group (){
    const [levels , setlevels] = useState({
        levelone : "" ,
        leveltwo: "" ,
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
                        <input onChange={onValueChange} type='text' placeholder='Group One' name='levelone' />
                        <input onChange={onValueChange} type='text' placeholder='Group Two' name='leveltwo'/>
                        <button id='add-student'>Submit</button>
                    </form>

                    <table >
                        <thead>
                            <th>ID</th>
                            <th>Group One</th>
                            <th>Group Two</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>One</td>
                                <td>Two</td>
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

export default Group;