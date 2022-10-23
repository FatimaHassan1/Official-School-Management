import React, { useRef , useState , useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import {PDFExport , savePDF} from "@progress/kendo-react-pdf";
import {getsinglepdf} from '../service/api';
import logo from '../assets/logo.png';

const newUsers = [{
  date : '',
  subject : '',
  description : '',
  status : '',
  employee : '',
  requestName : ""
}]

const SinglePDF = () => {
  
  const [user , setUser] = useState(newUsers)

  const {id} = useParams();

  const getsingleUserPDF= async() => {
    let response = await getsinglepdf(id);
    setUser(response.data[0])
    console.log(response.data[0])
    console.log(user)
  }



  useEffect(()=>{
    getsingleUserPDF();
  } , [])
  
  const pdfExportComponent = useRef(null);

  const handleExportwithComponenet = (e) => {
    pdfExportComponent.current.save();
  }

  return (
    <div className='main-pdf-containers'>
        <div className='pdfcontent'>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div className='first-container'>

                  <div className='pdfcontent-first'>
                    <img src={logo}/>
                    <div>
                      <span>International Pioneers School</span>
                      <span>20 Charoen Nakorn 14 Charoen Nakorn Klongtonsai Klongsan Bangkok 10600</span>
                      <span>Phone. 028623030, 024384741, Fax. 028623029</span>
                    </div>
                  </div>

                  <div className='pdfcontent-second'>
                    <span>Request ID: {user._id} </span>
                    <span>Date: {user.date}</span>
                  </div>

                </div>

                <div className='second-container'>
                    <h1>REQUEST FORM</h1>
                    
                    <div className='ul-container'>
                      <ul>
                        <li>
                          <label className='labels'>Employee : </label>
                          <label className='values'>{user.employee}</label>
                        </li>
                        <li>
                          <label className='labels'>ID : </label>
                          <label className='values'>{user._id}</label>
                        </li>
                        <li>
                          <label className='labels'>Subject : </label>
                          <label className='values'>{user.subject}</label>
                        </li>
                      </ul>
                      
                      <ul>
                        <li>
                          <label className='labels'>Request Name : </label>
                          <label className='values'>{user.requestName}</label>
                        </li>
                        <li>
                          <label className='labels'>Date : </label>
                          <label className='values'>{user.date}</label>
                        </li>
                        <li>
                          <label className='labels'>Status : </label>
                          <label className='values'>{user.status}</label>
                        </li>
                      </ul>
                    </div>

                    <div className='description'>{user.description}</div>
                    
                    <div className='sign-container'>

                        <div className='approval-container'>
                            <div>Approve By : Mrs. Alka Pandey</div>
                            <label>Head of Department</label>
                            <span>Date............................................................</span>
                        </div>

                        <div className='approval-container'>
                            <div>Approve By : Mrs. Alka Pandey</div>
                            <label>Request By Asad</label>
                        </div>

                    </div>
                </div>
            </PDFExport>

            <button onClick={handleExportwithComponenet}> Download Form</button>
        </div>
    </div>
  );
};

export default SinglePDF;