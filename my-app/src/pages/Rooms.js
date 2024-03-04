
import { Link } from "react-router-dom";
import Room from './Rooms/Room'

function Rooms(){
    const rooms = [{name: '3 Sharing', price: 4000},{name: '4 Sharing', price: 5000}] 
    return(
    <>
    <Room data={rooms}></Room>
    </>     
    );
}

export default Rooms;