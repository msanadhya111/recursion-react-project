import React from "react";
import { Person } from "./Person";

// Define the root component
const App = () => {
  // Example data with nested structure
  const data = {
    name: "John",
    surname: "Doe",
    children: [
      {
        name: "Alice",
        surname: "Doe",
        children: [
          {
            name: "Bob",
            surname: "Doe",
            children: [],
          },
        ],
      },
      {
        name: "Eve",
        surname: "Doe",
        children: [],
      },
    ],
  };

  // Render the root component with the provided data
  return (
    <div>
      <h1>Family Tree</h1>
      <Person
        name={data.name}
        surname={data.surname}
        children={data.children}
      />
    </div>
  );
};

export default App;
