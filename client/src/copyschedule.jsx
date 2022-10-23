import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, {useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Modal from 'react-modal';
import SideNavigation from './components/SideNavigation';
import { useEffect } from "react";
import {addPresentEvent, getPresentEvent} from './service/api';


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

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const BackgroundEvent = [
    {
        title: "timedae",
        start: new Date(),
        end: new Date() , 
        allDay: false,
    },
]


function Schedule() {
    
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(BackgroundEvent);

      const handleAddEvent = async (e) => {
        setAllEvents([...allEvents, newEvent]);
        e.preventDefault();
        setIsOpen(false);

        const evenewForm = {
          title: newEvent.title,
          start: newEvent.start,
          end: newEvent.end,
        }
        addPresentEvent(evenewForm)
    }
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    const handleSelectSlot = (event) => {
      setIsOpen(true);
      setNewEvent(event);
    }

   useEffect(()=>{
    getallEvents();
   }, [])

   const getallEvents = async() => {
      let response = await getPresentEvent()
      console.log(response)
   }
    


    return (
        <div id='requestforms-container'>
          <SideNavigation />
          <div id='requestforms-content'>
            <div className="App">

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={{customStyles}}
                >
                <div>
                  <form className="schedule-calendar-form" onSubmit={handleAddEvent}>
                    <div className="schedule-modal-container">
                      <h1>Create New Event</h1>
                      <i onClick={closeModal} class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    
                    <label>Start Time</label>
                    <DatePicker className="schedule-input" disabled dateFormat="MMMM d, yyyy h:mm aa" showTimeSelect placeholderText="Start Date"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start : start.target.value })} style={{ marginRight: "10px" }}/>
                    
                    <label>End Time</label>
                    <DatePicker className="schedule-input" disabled dateFormat="MMMM d, yyyy h:mm aa" showTimeSelect placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end : end.target.value })} />
                    
                    <label>Event Title</label>
                    <input className="schedule-input" type="text" placeholder="Add Title"  value={newEvent.title} onChange={(title) => setNewEvent({ ...newEvent, title: title.target.value })} style={{ width: "20%", marginRight: "10px" }}/>
                    
                    <div className="schedule-button-container">
                      <button className="calendar-close-button" onClick={closeModal}>close</button>
                      <input className="calendar-submit-button" type='submit' value='Save Changes'/>
                    </div>
                  </form>
                </div>

                </Modal>
                
                <main className="App">
                    <h2>Leave Forms</h2>
                    <Calendar 
                    localizer={localizer} 
                    events={allEvents} 
                    startAccessor="start" 
                    endAccessor="end"
                    onSelectSlot={handleSelectSlot}
                    selected={newEvent}
                    selectable
                    style={{ height: 500, margin: "50px" }} 
                  />
                </main>

            </div>
          </div>
        </div>
    );
}

export default Schedule;