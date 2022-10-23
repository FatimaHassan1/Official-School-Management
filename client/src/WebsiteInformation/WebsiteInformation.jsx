import SideNavigation from '../components/SideNavigation';
import './websiteinformation.css';
import {NavLink} from 'react-router-dom';
import TeacherSidebar from '../TeacherRedirect/TeacherSidebar';

function WebsiteInformation(){
    return(
        <>
            <div className='dashboard-container'>
                <TeacherSidebar />
                <div className='content'>
                    
                   <form>

                    <div className='website-information-div'>
                        <label>ชื่อ ภาษาไทย</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>ชื่อ ภาษาอังกฤษ</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Logo</label>
                        <input type='file' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Domain</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>เลขประจำตัวผู้เสียภาษี</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>ภาษีมูลค่าเพิ่ม</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>วันที่เริ่มต้น</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>วันที่หมดอายุ</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Website</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Facebook</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Google Plus</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Latitude</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Longitude</label>
                        <input type='text' value=''/>
                    </div>

                    <div className='website-information-div'>
                        <label>Keyword ภาษาไทย</label>
                        <input type='text-area'/>
                    </div>

                    <div className='website-information-div'>
                        <label>Keyword ภาษาอังกฤษ</label>
                        <input type='text-area'/>
                    </div>

                    <div className='website-information-div'>
                        <label>Title ภาษาไทย</label>
                        <input type='text-area'/>
                    </div>

                    <div className='website-information-div'>
                        <label>Title ภาษาอังกฤษ</label>
                        <input type='text-area'/>
                    </div>

                    <div className='website-information-div'>
                        <label>Description ภาษาไทย</label>
                        <input type='text-area'/>
                    </div>

                    <div className='website-information-div'>
                        <label>Description ภาษาอังกฤษ</label>
                        <input type='text-area'/>
                   </div>

                    </form>
                   
                </div>

                
            </div>
        </>
    )
}

export default WebsiteInformation;