import SideBar from "../components/SideBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


function Booking() {

  return (
    <div className="d-flex">
      <SideBar />
      <div className="m-4">
        <div className="myCustomHeight">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
