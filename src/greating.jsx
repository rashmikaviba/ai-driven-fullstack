

const Greating = (props) => { 
    return (
      <h1 className="text-red-500 text-4xl font-bold">
        Hello, my name is {props.name} and I am {props.age} years old.
      </h1>
    );
  };
  
  export default Greating;