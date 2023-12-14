import React, { useState } from 'react';
import axios from 'axios';
import './AddUserForm.css';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAddUser = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/', {
        nombre: name,
      });

      if (!response.status === 200) {
        throw new Error(response.data.message || 'Adding the user failed.');
      }

      console.log('User added successfully!');
    } catch (err) {
      console.error(err);
      setError(
        err.message ||
          'Adding a user failed - the server responded with an error.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-user-form">
      <h2>Add User</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className="add-button" onClick={handleAddUser} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add User'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddUserForm;
