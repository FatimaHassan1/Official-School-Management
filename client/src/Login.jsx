import { useState  } from "react";
import axios from "axios";
import './login.css';
import { useHistory } from "react-router-dom";

function Login(){

    const [seeOu , setOu] = useState("");

    const [username , setUserName] = useState({
        department: "",
        ou: "",
        userdetail : "",
        mypassword: "",
    });


    const history = useHistory();

    const onValueChange = (e) => {
        const {name , value} = e.target;
        setUserName({...username , [name] : value })
    }

    console.log(username)
    // console.log(username.ou)

    const sendData = async() => {
        await axios.post(`/postuser`, username);
        switch (username.ou) {
            case "Executive":
                history.push("/executivedashbaord")
                break;
            case "K1":
                history.push("/studentdashbaord")
                break;
            case "Teacher":
                history.push("/teacherdashboard")
                break;
            case "Finance":
                history.push("/financedashbaord")
                break;
            default:
                history.push("/")
        }
    }

    return(
        <>
        <div className='login_page_container'>
            <div className='login_divider'>
                <div className='login_divider_content'>
                    <h1>Welcome in School System</h1>
                    <h3>Instructions</h3>
                    <ul>
                        <li><h5>Please use following Department</h5></li>
                        <li>1. Staff</li>
                        <li>2. Student</li>
                    </ul>
                    <ul>
                        <li><h5>Please use following Ou</h5></li>
                        <li>1. Teacher</li>
                        <li>2. K1</li>
                        <li>3. Executive</li>
                        <li>4. Finance</li>
                        <p><strong>Student has just K1 Ou and Staff has Teacher , Executive , Finance Ou's</strong></p>
                    </ul>
                </div>
            </div>
            <div className='content loginpage login_page'>
                
                <input placeholder="department" type="text" onChange={onValueChange} name='department'/>
                <input placeholder="ou" type="text" onChange={onValueChange} name='ou'/>
                <input placeholder="userdetail" type="text" onChange={onValueChange} name='userdetail'/>
                <input placeholder="userpassword" type="password" onChange={onValueChange} name='mypassword'/>

                <button onClick={sendData}>Login</button>
            </div>
        </div>

        </>
    )
}

export default Login;