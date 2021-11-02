import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    setEmail(event.target.value);
  };
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => console.log(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
