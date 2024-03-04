

function Room({data}){
    return(
    <>
    {data.map((room)=>(
        <ul>
            <li>
       { room.name} and {room.price}
            </li>
        </ul>
    ))}
    </>     
    );
}

export default Room;