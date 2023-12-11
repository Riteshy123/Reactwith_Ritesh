import React from "react";


const Child = (user) => {
  // const { name, age } = user;
//   const userData = useGlobalContext();
   console.log(" ~ file: Child.jsx ~ line 8 ~ Child ~ user", user);
   const {name,age}=user
  return (
    <div>
      Child = My name is {name} and my age is age
    </div>
  );
};

export default Child;