import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (refreshing the page) This we do because we are using React and we want to handle the form submission ourselves
    const newError = validateForm(formData);
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    } else {
      console.log("Form data", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, // Spread to preserve existing properties
      [e.target.name]: e.target.value, // Update specific property
    });

    setError({
      ...error, // Spread to preserve existing properties
      [e.target.name]: "", // Clear error for the field
    });
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.email && !data.email.includes("@")) {
      errors.email = "Email is required and should be a valid email address";
    }
    console.log(data.password.length);
    if (!data.password || data.password.length < 6) {
      errors.password =
        "Password is required and should be at least 6 characters long";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p>{error.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p>{error.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
