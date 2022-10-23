import React from 'react';
import '../App.css';
import userp from '../assets/avatar7.png';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';
import StudentSidebar from './StudentSidebar';

function StudentRedirect() {

  return (
    <>
      <div class='dashboard-container'>
        <StudentSidebar/>
        <div class='content'>
          <nav>
            <ul>
            <li>Dashboard </li>
              <li>&nbsp; &gt; Student </li>
            </ul>

            <div className='nav-top-second'>
              
              <div className='search'>
                <input type='search' placeholder='Search...'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide search__icon dark:text-slate-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>



              <div className='user'>
                <img src={userp}/>
              </div>

              <div className='logout'>
                <NavLink exact to='/'><button>Logout</button></NavLink>
              </div>

            </div>
          </nav>

          <main>
            <header>
              <div className='main-first'>
                <h2>Student Report</h2>
                <a href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 mr-3"><path d="M3 2v6h6"></path><path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path><path d="M21 22v-6h-6"></path><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path></svg>
                  Reload Data
                </a>
              </div>


              <div className='cards-container'>
                
                <div className='cards'>
                  <div className='card-box'>
                    <NavLink style={{textDecoration:'none'}} exact to='/calendar'>
                        <div className='card-box-child-1'>
                        <i style={{fontSize:'30px', color:'#1E40AF'}} class="fa fa-user" aria-hidden="true"></i>
                        <div className='card-box-child1-percent child1-percent-greater'>
                        33%
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </div>
                        </div>
                        
                        <div className='card-box-title'>
                            Leaves
                        </div>
                        <div className='card-box-line'>
                        Check leaves records
                        </div>
                    </NavLink>
                    <div></div>
                  </div>
                </div>
                
                <div className='cards'>
                  <NavLink style={{textDecoration:'none'}} exact to='/presentforms'>
                    <div className='card-box'>
                      
                      <div className='card-box-child-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-color-2 lucide report-box__icon text-pending"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>                      
                        <div className='card-box-child1-percent child1-percent-lesser'>
                          2%
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 ml-0.5"><polyline points="6 9 12 15 18 9"></polyline></svg>                      
                        </div>
                      </div>
                      
                      <div className='card-box-title'>
                        Present Forms
                      </div>
                      <div className='card-box-line'>
                        present forms in pending
                      </div>

                      <div></div>
                    </div>
                  </NavLink>
                </div>

                <div className='cards'>
                  <NavLink style={{textDecoration:'none'}} exact to='/all'>
                    <div className='card-box'>
                    
                      <div className='card-box-child-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-color-3 lucide report-box__icon text-warning"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>                      
                      <div className='card-box-child1-percent child1-percent-greater'>
                        12%
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </div>
                      </div>
                      
                      <div className='card-box-title'>
                        Request Forms
                      </div>
                      <div className='card-box-line'>
                        Total Products
                      </div>

                      <div></div>
                    </div>
                  </NavLink>
                </div>

                <div className='cards'>
                  <div className='card-box'>
                    
                    <div className='card-box-child-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-color-4 lucide report-box__icon text-success"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>                      
                    <div className='card-box-child1-percent child1-percent-greater'>
                      22%
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </div>
                    </div>
                    
                    <div className='card-box-title'>
                      152.040
                    </div>
                    <div className='card-box-line'>
                      Unique Visitor
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>

            </header>
        
          </main>

        </div>

      </div>
    </>
  );
}

export default StudentRedirect;
