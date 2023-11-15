import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/auth/add_category', { category })
      .then((result) => {
        if (result.data.status) {
          navigate('/dashboard/category');
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
        <div className="border p-4" style={{ width: '600px', backgroundColor: '#f2f2f2' }}>
          <h3>Add Category</h3>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default AddCategory;
