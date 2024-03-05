import Yoga from "./Yoga";
import yogicmethods from "./yogicmethods";
import { useParams } from "react-router-dom";


function Methods(){
    const {methodId} = useParams();
    const method = yogicmethods.find(method => method.name === methodId );
    if (method){
        return(
            <>
            <h1>{method.name}</h1>
            {method.benefits}
            </>
        );
    }else{
        return <Yoga></Yoga>
    }

}

export default Methods;