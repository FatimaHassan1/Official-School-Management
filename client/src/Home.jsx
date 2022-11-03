import React, { useState , useEffect } from 'react';
import SideNavigation from './components/SideNavigation';
import './App.css';
import userp from './assets/avatar7.png';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";


function Home() {
  const [number1 , Setnumber1] = useState();
  const [number2 , Setnumber2] = useState();
  const [number3 , Setnumber3] = useState();
  const [number4 , Setnumber4] = useState();
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;

  const history = useHistory()

  useEffect(()=>{
      setInterval( () => {
          if(counter1 == 95){
              clearInterval();
          }else{
              counter1 += 1;
              Setnumber1 (counter1 + "%");
          }
      });

      setInterval( () => {
          if(counter2 == 75){
              clearInterval();
          }else{
              counter2 += 1;
              Setnumber2 (counter2 + "%");
          }
      });

      setInterval( () => {
          if(counter3 == 50){
              clearInterval();
          }else{
              counter3 += 1;
              Setnumber3 (counter3 + "%");
          }
      });

      setInterval( () => {
          if(counter4 == 35){
              clearInterval();
          }else{
              counter4 += 1;
              Setnumber4 (counter4 + "%");
          }
      });

  }, 30)
  return (
    <>
      <div class='dashboard-container'>
        <SideNavigation />
        <div class='content'>
          <nav>
            <ul>
              <li>Application </li>
              <li>&nbsp; &gt; Dashboard </li>
            </ul>

            <div className='nav-top-second'>
              
              <div className='search'>
                <input type='search' placeholder='Search...'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide search__icon dark:text-slate-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>

              <div className='bell-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide notification__icon dark:text-slate-500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>

              <button style={{marginTop:'10px'}} onClick={()=>{history.push('/')}}>logout</button>

              <div className='user'>
                <img src={userp}/>
              </div>

            </div>
          </nav>

          <main>
            <header>
              <div className='main-first'>
                <h2>General Report</h2>
                <a href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-4 h-4 mr-3"><path d="M3 2v6h6"></path><path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path><path d="M21 22v-6h-6"></path><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path></svg>
                  Reload Data
                </a>
              </div>


              <div className='cards-container'>
                
                <div className='cards'>
                  <div className='card-box'>
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
              
            <aside>

              <div className="skill-container">
                  <h2 className='h2-color-1'>Admmission</h2>
                  <div class="skill">
                      <div class="outer">
                          <div class="inner">
                              <div id="number">
                                  {number1}
                              </div>
                          </div>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                          <defs>
                          <linearGradient id="GradientColor">
                              <stop offset="0%" stop-color="#e91e63" />
                              <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                          </defs>
                          <circle className='circle-color-1' cx="80" cy="80" r="70" stroke-linecap="round" />
                      </svg>
                  </div>
              </div>

              <div className="skill-container">
                  <h2 className='h2-color-2'>Fees Collection</h2>
                  <div class="skill">
                      <div class="outer">
                          <div class="inner">
                              <div id="number">
                                  {number2}
                              </div>
                          </div>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                          <defs>
                          <linearGradient id="GradientColor">
                              <stop offset="0%" stop-color="#e91e63" />
                              <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                          </defs>
                          <circle className='circle-color-2' cx="80" cy="80" r="70" stroke-linecap="round" />
                      </svg>
                  </div>
              </div>

              <div className="skill-container">
                  <h2 className='h2-color-3'>Syllabus</h2>
                  <div class="skill">
                      <div class="outer">
                          <div class="inner">
                              <div id="number">
                                  {number3}
                              </div>
                          </div>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                          <defs>
                          <linearGradient id="GradientColor">
                              <stop offset="0%" stop-color="#e91e63" />
                              <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                          </defs>
                          <circle className='circle-color-3' cx="80" cy="80" r="70" stroke-linecap="round" />
                      </svg>
                  </div>
              </div>

            </aside>

            

            

          </main>

        </div>

      </div>
    </>
  );
}

export default Home;
