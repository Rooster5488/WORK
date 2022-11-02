import { useEffect, useState } from "react"
import Popup from "./Popup"


const Room = ({roomId,busy}) => {
    const [occupants,setOccupants] = useState(0)
    const [buttonPopup, setButtonPopup] = useState(false)
    //this is a constructor
    useEffect(()=>{
        setOccupants(Math.floor(Math.random()*3))
        
    },[])
    return (
        <div className="roomContainer">
            <h2>
                Room {roomId}
            </h2>
            <p>
                Occupants: {occupants}
            </p>
            <div className={(occupants<=1) ? "circle idle": "circle disabled"}/>
            <div className={(occupants>=2) ? "circle active": "circle disabled"}/>
            <button onClick ={() => setButtonPopup(true)}>Open popup</button>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                <h1>My pop</h1>
                Occupants: {occupants}
            </Popup>
        </div>
    )


}
export default Room

