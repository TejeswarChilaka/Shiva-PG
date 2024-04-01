// import React, { useState } from "react";
// import axios from "axios";

// function Dining() {
//   const [meals, setMeals] = useState({ day: "", type: "", items: [] });

//   async function fetchMeals() {
//     const response = await axios.get(`/api/about/dining/${meals.day}`);
//     setMeals(response.data);
//   }
//   fetchMeals();

//   return (
//     <>
//       <h2>Menu</h2>
//       {meals.day}
//     </>
//   );
// }

// export default Dining;

// function Dining(){
//   return(
//     <>
//     <h2>Menu of food</h2>
//     </>
//   )
// }

// export default Dining;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Dining() {
  const [meals, setMeals] = useState({ day: "", type: "", items: [] });

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await axios.get(`/api/about/dining/${meals.day}`);
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }

    fetchMeals();
  }, [meals.day]); 

  return (
    <>
      <h2>Menu</h2>
      <p>Day: {meals.day}</p>
      <p>Type: {meals.type}</p>
      <ul>
        {meals.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Dining;
