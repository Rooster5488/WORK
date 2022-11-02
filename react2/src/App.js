import React from 'react';
import './index.css';
import Popup from './components/Popup';
import {useState} from 'react';
import Room from './components/room';


function App() {
  return (
    <div>
      <nav class='mainBackground'>
            <nav class="navbar background">
                <ul class="nav-list">
                    <li><a href="#courses">Audit logs</a></li>
                    <li><a href = "xxx"><div>Scheduling</div></a></li>
                    <li><a href = "xxx"><div>Scheduling</div></a></li>
                    <li><a href = "xxx"><div>Scheduling</div></a></li>
                    <li><a href = "xxx"><div>Scheduling</div></a></li>
                    <li><a href = "xxx"><div>Scheduling</div></a></li>
                      
                </ul>
                </nav>

        </nav>
        <div>
        <Room roomId={1}/>
        <Room roomId={1}/>
        <Room roomId={1}/>
        <Room roomId={1}/>
        <Room roomId={1}/>
        <Room roomId={1}/>
        <Room roomId={1}/>
        </div>

        
       
        </div>
        
    
  )
}

export default App;
