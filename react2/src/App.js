import React from 'react';
import './index.css';
import helpIcon from './components/helpIcon';
import exportIcon from './components/exportIcon';
import Popup from './components/Popup';
import {useState} from 'react';
import Room from './components/room';

function App() {
  const [helpIcon1, setHelpPopup] = useState(false)
  const [exportIcon1, setExportPopup] = useState(false)

  return (
    <div>
      <nav class='mainBackground'>
        <nav class="navbar background">
          <ul class="nav-list">
            <li><a class = "isDisabled" href="xxx">Audit logs</a></li>
            <li><a href = "xxx"><div>Facility</div></a></li>
            <li><a href = "xxx"><div>Facility #2</div></a></li>
            <li><a class = "isDisabled" href = "xxx"><div>Scheduling</div></a></li>
            <li><a class = "isDisabled" href = "xxx"><div>Preferences</div></a></li>
            <li><a class = "isDisabled" href = "xxx"><div>Contact</div></a></li> 
            <li>
              <button class = "helpIcon" onClick ={() => setHelpPopup(true)}>?</button>
                <Popup trigger = {helpIcon1} setTrigger={setHelpPopup}>
                  <h3>Help Overlay</h3>
                  <p>Lorem Ipsum</p>
                </Popup>
            </li>
          </ul>
        </nav>
      </nav>
        <div>
        <Room roomId={1}/>
        <Room roomId={2}/>
        <Room roomId={3}/>
        <Room roomId={4}/>
        <Room roomId={5}/>
        <Room roomId={6}/>
        <Room roomId={7}/>
        </div>
        <div>
          <button class = "exportIcon" onClick ={() => setExportPopup(true)}>EXPORT</button>
          <Popup trigger = {exportIcon1} setTrigger={setExportPopup}>
                  <h3>Export Overlay</h3>
                  <p>Lorem Ipsum</p>
          </Popup>
        </div>        
      </div>
  )
}

export default App;
