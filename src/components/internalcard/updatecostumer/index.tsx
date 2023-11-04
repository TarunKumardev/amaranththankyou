import React, { useState } from 'react';

export function EditComponent({ data, updateData, onClose }) {
  const [inputValues, setInputValues] = useState({
    username: data.username || '',
    email: data.email || '',
  });

  // inputValues

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    updateData({
        ...inputValues,
        [name]: value,
      });
  };

  const handleSave = () => {
    if (inputValues.username.trim() === '' || inputValues.email.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Call the updateData function to update the data in the parent component's state

    // Close the modal
    onClose();
  };

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        padding: "32px"
      }}>
        <label>
          User:
          <br />
          <input
            type='text'
            name="username"
            placeholder='username'
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "8px",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "4px"
            }}
            value={inputValues.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          User Email:
          <br />
          <input
            type='text'
            name="email"
            placeholder='email'
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "8px",
              fontSize: "16px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "4px"
            }}
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button onClick={handleSave} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
    </>
  );
}

export function DeleteComponent({ data, onDelete, onClose }) {
  const handleDelete = () => {
    onDelete(data);
    onClose();
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      padding: "32px"
    }}>
      <h2>Do you want to delete {data.username}</h2>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
    </div>
  );
}
