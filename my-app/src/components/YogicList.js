import { Link } from "react-router-dom";

function YogicList({ yogicmethods }) {
  return (
    <>
      {yogicmethods &&
        yogicmethods.map((method) => (
          <>
            <Link
              key={method.name}
              className="yogic-methods-list"
              to={`/about/yoga/${method.name}`}
            > <h5>{method.name}</h5></Link>
           
            <h5>{method.time}</h5>
            <p>{method.benefits.substring(0,100)}...</p>
          </>
        ))}
    </>
  );
}

export default YogicList;
