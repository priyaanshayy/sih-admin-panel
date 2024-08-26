import React, { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ handleLogin }) => {
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
    if (!formValue.email || !formValue.password) {
      setErrorMessage("Both email and password are required.");
    } else {
      setErrorMessage('');
      console.log('Form submitted:', formValue);
      // Proceed with your login logic (if connected to a backend)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black bg-opacity-70 p-10 rounded-sm text-white"
      >
        <h2 className="pb-6 text-center text-3xl font-bold">Sign In</h2>
        
        <input
          className="py-3 px-5 mb-6 w-full text-gray-700"
          type="text"
          placeholder="Enter your email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
        
        <input
          className="py-3 px-5 mb-6 w-full text-gray-700"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          value={formValue.password}
        />
        
        <p className="text-red-700 my-2 text-left">{errorMessage}</p>
        
        <button
          className="bg-red-600 w-full py-2 text-black font-bold text-xl"
          type="submit"
        >
          Sign In
        </button>
        
        <p className="p-5 text-center">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={handleLogin}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
