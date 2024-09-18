// Define a functional component to render the data recursively
export const Person = ({ name, surname, children, level = 1 }) => {
  // Calculate the indentation based on the current level
  const indentation = level * 20; // Adjust this value as needed
  console.log(indentation);

  return (
    <div style={{ marginLeft: indentation }}>
      <div>
        {"-"} {name} {surname}
      </div>
      {/* Recursively render children */}
      {children.map((child, index) => (
        <Person
          key={index}
          name={child.name}
          surname={child.surname}
          children={child.children}
          level={level + 1}
        />
      ))}
    </div>
  );
};
