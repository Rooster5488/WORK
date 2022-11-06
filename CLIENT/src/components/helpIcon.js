import React from 'react';
import './helpIcon.css'


 function helpIcon(props) {
    return (props.trigger) ? (
        <div className="helpIcon">
             <div classname= "helpI-inner">
                    <button className = "helpI" onClick ={() => props.setTrigger(false)}>?</button>
                {props.children}
             </div> 
        </div>
    ) : '';
}




export default helpIcon