import React, { useState } from "react";

const HogForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;