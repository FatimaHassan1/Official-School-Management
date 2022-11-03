import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const cookie = new Cookies();

function Login() {
  const [seeOu, setOu] = useState("");

  const [username, setUserName] = useState({
    department: "Staff",
    ou: "Teacher",
    userdetail: "",
    mypassword: "",
  });

  const history = useHistory();

  const onValueChange = (e) => {
    const { name, value } = e.target;
    if (name === "department" && value === "Student") {
      setUserName({ ...username, [name]: value, ou: "K1" });
    } else if (name === "department" && value === "Staff") {
      setUserName({ ...username, [name]: value, ou: "Teacher" });
    } else {
      setUserName({ ...username, [name]: value });
    }
  };

  const sendData = async () => {
    if (
      username.ou === "Admin" &&
      username.userdetail === "admin@admin.com" &&
      username.mypassword === "admin123"
    ) {
      cookie.set("user_role", "Admin");
      history.push("/home");
    } else {
      try {
        const res = await axios.post(`/postuser`, username);
        cookie.set("user_role", res.data?.ou);
        switch (username.ou) {
          case "Executive":
            history.push("/home");
            break;
          case "K1":
            history.push("/home");
            break;
          case "Teacher":
            history.push("/home");
            break;
          case "Finance":
            history.push("/home");
            break;
          default:
            history.push("/");
        }
      } catch (err) {
        alert(err?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <div className="login_page_container">
        <div className="login_divider">
          <div className="login_divider_content">
            <h1>Welcome in School System</h1>
            <h3>Instructions</h3>
            <ul>
              <li>
                <h5>Please use following Department</h5>
              </li>
              <li>1. Staff</li>
              <li>2. Student</li>
            </ul>
            <ul>
              <li>
                <h5>Please use following Ou</h5>
              </li>
              <li>1. Teacher</li>
              <li>2. K1</li>
              <li>3. Executive</li>
              <li>4. Finance</li>
              <p>
                <strong>
                  Student has just K1 Ou and Staff has Teacher , Executive ,
                  Finance Ou's
                </strong>
              </p>
            </ul>
          </div>
        </div>
        <div className="content loginpage login_page">
          <select
            name="department"
            value={username.department}
            onChange={onValueChange}
          >
            <option value="Staff">Staff</option>
            <option value="Student">Student</option>
          </select>
          <select name="ou" value={username.ou} onChange={onValueChange}>
            {username.department === "Staff" ? (
              <>
                <option value="Teacher">Teacher</option>
                <option value="Executive">Executive</option>
                <option value="Finance">Finance</option>
                <option value="Admin">Admin</option>
              </>
            ) : (
              <option value="K1">K1</option>
            )}
          </select>
          {/* <input
            placeholder="ou"
            type="text"
            onChange={onValueChange}
            name="ou"
          /> */}
          <input
            placeholder="userdetail"
            type="text"
            onChange={onValueChange}
            name="userdetail"
          />
          <input
            placeholder="userpassword"
            type="password"
            onChange={onValueChange}
            name="mypassword"
          />

          <button onClick={sendData}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
