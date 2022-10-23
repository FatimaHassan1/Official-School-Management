import React , {useState} from 'react';
import axios from "axios";


function TestApiComponent(){

    const [newStudent , SetStudent] = useState({    
        testString : "" ,
        testBoth : "" ,
    })

    const onValueChange = (e) => {
        const {name , value} = e.target;
        SetStudent({...newStudent , [name] : value})
        console.log(newStudent)
    }

    const saveStudent = async(e) => {
        try {
            e.preventDefault();
            await axios.post(`/testapi`  , newStudent)
            console.log("Hello World")
        } catch (error) {
            console.log(error);
        }    
    }

    return(
        <>

            <form>
                <input type="text" onChange={onValueChange} name='testString'></input>
                <input type="text" onChange={onValueChange} name='testBoth'></input>
                <input onClick={saveStudent} type='submit'/>
            </form>

        </>
    )
}

export default TestApiComponent; 