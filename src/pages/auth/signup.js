import React, { useState } from "react";

const initialValues = {
  fname: "",
  email: "",
  password: "",
};

const SignUp = ({ handleLogin }) => {
  const [formValue, setFormValue] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder validation logic
    if (!formValue.email || !formValue.password || !formValue.fname) {
      setErrorMessage("All fields are required.");
    } else {
      setErrorMessage('');
      console.log('Form submitted:', formValue);
      // Proceed with your registration logic (if connected to a backend)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black bg-opacity-70 p-10 rounded-sm text-white"
      >
        <h2 className="pb-10 text-left text-3xl font-bold">Sign up</h2>
        
        <input
          className="py-3 px-5 mb-8 w-full text-gray-700"
          type="text"
          placeholder="Enter your Name"
          name="fname"
          value={formValue.fname}
          onChange={handleChange}
        />
        
        <input
          className="py-3 px-5 mb-8 w-full text-gray-700"
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
        
        <input
          className="py-3 px-5 mb-8 w-full text-gray-700"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          value={formValue.password}
        />
        
        <p className="text-red-700 my-2 text-left">{errorMessage}</p>
        
        <button
          className="bg-red-600 w-full py-2 text-white font-bold text-xl"
          type="submit"
        >
          Sign up
        </button>
        
        <p className="p-7" onClick={handleLogin}>
          Do you have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
