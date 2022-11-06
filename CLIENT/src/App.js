import React, { useEffect } from 'react';
import './index.css';
import helpIcon from './components/helpIcon';
import exportIcon from './components/exportIcon';
import Popup from './components/Popup';
import {useState} from 'react';
import Room from './components/room';


function App() {
  const [rooms, setRooms] = useState([])
  const [helpIcon1, setHelpPopup] = useState(false)
  const [exportIcon1, setExportPopup] = useState(false)
  useEffect(()=>{
    console.log('TEST')
    const endpoint = "http://localhost:3001/users"
    const requestOptions = {
      method: 'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }
    fetch(endpoint,requestOptions)
      .then(response => 
        response.json()
      )
      .then(data=> {
        console.log(data)
        setRooms(data)


      }
        
      )
      
      
    
  },[])

  return (
    <div>
      <nav className='mainBackground'>
        <nav className="navbar background">
          <ul className="nav-list">
            <li><a className = "isDisabled" href="xxx">Audit logs</a></li>
            <li><a href = "xxx"><div>Facility</div></a></li>
            <li><a href = "xxx"><div>Facility #2</div></a></li>
            <li><a className = "isDisabled" href = "xxx"><div>Scheduling</div></a></li>
            <li><a className = "isDisabled" href = "xxx"><div>Preferences</div></a></li>
            <li><a className = "isDisabled" href = "xxx"><div>Contact</div></a></li> 
            <li>
              <button className = "helpIcon" onClick ={() => setHelpPopup(true)}>?</button>
                <Popup trigger = {helpIcon1} setTrigger={setHelpPopup}>
                  <h3>Help Overlay</h3>
                  <p>Lorem Ipsum</p>
                </Popup>
            </li>
          </ul>
        </nav>
      </nav>
        <div>
        {rooms.map((room, i) => (
          <Room key={i} roomId = {room.id} occupants = {room.device_people}/>
        ))}
        </div>
        <div>
          <button className = "exportIcon" onClick ={() => setExportPopup(true)}>EXPORT</button>
          <Popup trigger = {exportIcon1} setTrigger={setExportPopup}>
                  <h3>Export Overlay</h3>
                  <p>Lorem Ipsum</p>
          </Popup>
        </div>        
      </div>
  )
}

export default App;
