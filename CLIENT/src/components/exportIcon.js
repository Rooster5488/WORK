import React from 'react';
import './exportIcon.css'


 function exportIcon(props) {
    return (props.trigger) ? (
        <div className="exportIcon">
             <div classname= "exportI-inner">
                    <button className = "exportI" onClick ={() => props.setTrigger(false)}>Export</button>
                {props.children}
             </div> 
        </div>
    ) : '';
}




export default exportIcon