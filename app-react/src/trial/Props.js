import React from "react";

const Input = ({ id, label, type, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </div>
  );
};

const Props = () => {
  return (
    <div>
      <h1>Props</h1>
      <Input type="password" id="email" label="Email" required />
    </div>
  );
};

export default Props;
