import React, { useState } from "react";
import { toast } from "react-toastify";

import { auth } from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration!`
    );

    // save the user email in local storage
    window.localStorage.setItem("emailForRegistration", email);

    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn btn-raised">
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
