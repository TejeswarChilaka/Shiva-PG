import YogicList from "../../components/YogicList";
import yogicmethods from "./yogicmethods";


function Yoga() {
  return (
    <>
    <h3> YOGA is the only way!!!</h3>
    <YogicList yogicmethods={yogicmethods}></YogicList>
    </> 
  );
}



export default Yoga;