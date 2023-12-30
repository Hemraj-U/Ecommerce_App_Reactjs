import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    
  }
  return <div></div>;
};

export default Registration;
