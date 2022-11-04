import { useEffect, useState } from "react"
import Popup from "./Popup"


const Room = ({roomId,busy}) => {
    const [occupants,setOccupants] = useState(0)
    const [buttonPopup, setButtonPopup] = useState(false)
    const [occupantID, setID] = useState(0)
    const [bookingEnd, bookEnd] = useState(0)
    const [nextBooking, nextBook] = useState(0) 
    
    //this is a constructor
    useEffect(()=>{
        setOccupants(Math.floor(Math.random()*3))
        setID("John Doe")
        bookEnd(Math.floor(Math.random()*12))
        nextBook(Math.floor(Math.random()*12))

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
            <div>
                <button onClick ={() => setButtonPopup(true)}>Details</button>
                <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
                    <h2>Room {roomId}</h2>
                    <p>Occupants: {occupants}</p>
                    <p>Assigned to: {occupantID}</p>
                    <p>Booking ends at: {bookEnd}</p>
                    <p>Next booking starts at: {nextBook}</p>
                </Popup>
            </div>   
        </div>
    )


}
export default Room

