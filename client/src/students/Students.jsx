import SideNavigation from '../components/SideNavigation';
import { NavLink } from 'react-router-dom';
import { useEffect , useRef } from 'react';
import {getAllStudents , deleteStudentRecord} from '../service/studentApi';
import { useState } from 'react';
import Modal from 'react-modal';
import {PDFExport , savePDF} from "@progress/kendo-react-pdf";
import ModalStudent from './ModalStudent';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Students(){
    const [allStudents , SetAllStudents] = useState([]);

    useEffect(()=>{
        getallStudentsRecords();
        deleteStudent();
    }, [])
    

    const getallStudentsRecords = async() => {
        let response = await getAllStudents();
        console.log("Hello This is student Database");
        console.log(response.data);
        SetAllStudents(response.data);
    }

    const deleteStudent = (id) => {
        deleteStudentRecord(id);
        getallStudentsRecords();
    }
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalvalue , SetModalValue] = useState({});

    const viewStudent = (data) => {
        setIsOpen(true)
        SetModalValue(data)
        console.log(modalvalue)
    }
    const closeModal = () => {
        setIsOpen(false)
    }


    const pdfExportComponent = useRef(null);
    const handleExportwithComponenet = (e) => {
      pdfExportComponent.current.save();
    }


    return(

        <>
                        
        <div className='dashboard-container'>
            <SideNavigation />
            <div className='content'>
                <h1>Students Database</h1>
                <NavLink exact to="/addstudents"><button id='add-student'>Add New Student</button></NavLink>
                <table id="request-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Cast</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents.map((students)=>{
                                return(
                                    <>
                                        <tr key={students._id}>
                                            <td>{students._id}</td>
                                            <td>{students.stuname}</td>
                                            <td>{students.stuclass}</td>
                                            <td>{students.stucast}</td>
                                            <td className='action-buttons'>
                                                <NavLink to={`/editstudents/${students._id}`}><button>Edit</button></NavLink>
                                                <button onClick={()=>deleteStudent(students._id)}>Delete</button>
                                                <button onClick={()=>viewStudent(students)}>View</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                        
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{customStyles}}>
                            <button className='studentviewclose' onClick={closeModal}>Close</button>
                            <button className='studentviewclose' onClick={handleExportwithComponenet}>Download</button>
                        <PDFExport ref={pdfExportComponent} paperSize="A4">
                            <div className='student-view-container'>
                                <div className='student-view'>
                                    <div>
                                        <h5>ID: {modalvalue._id}</h5>
                                        <h5>Name: {modalvalue.stuname}</h5>
                                    </div>
                                    <div>
                                        <h5>Class: {modalvalue.stuclass}</h5>
                                        <h5>Cast: {modalvalue.stucast}</h5>
                                    </div>
                                </div>
                                <p>The student is came from High Public School and certified from CCA Computer Course Acedmy.</p>
                            </div>
                        </PDFExport>
                    </Modal>
                            
            </div>
        </div>
        </>
    )
}

export default Students;