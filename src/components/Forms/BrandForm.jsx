import { useState } from 'react';


const validateBrandCode = (code) => {
  if (!code) {
    return 'Brand Code is required.';
  }
  return '';
};


const validateBrandName = (name) => {
  if (!name) {
    return 'Brand Name is required.';
  }
  return '';
};

const BrandForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    brandCode: '',
    brandName: '',
  });

  const [error, setError] = useState({
    brandCode: '',
    brandName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const brandCodeError = validateBrandCode(formData.brandCode);
    const brandNameError = validateBrandName(formData.brandName);

    
    setError({
      brandCode: brandCodeError,
      brandName: brandNameError,
    });


    if (!brandCodeError && !brandNameError) {
      console.log('Form submitted successfully:', formData);
      if (onSave) onSave(); 
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5 htmlFor="brandCode">Brand Code</h5>
        <input
          type="text"
          id="brandCode"
          name="brandCode"
          className="form-control"
          placeholder="Enter brand code"
          value={formData.brandCode}
          onChange={handleChange}
        />
        {error.brandCode && <p style={{ color: 'red' }}>{error.brandCode}</p>}
      </div>
      <div className="form-group mt-3">
        <h5 htmlFor="brandName">Brand Name</h5>
        <input
          type="text"
          id="brandName"
          name="brandName"
          className="form-control"
          placeholder="Enter brand name"
          value={formData.brandName}
          onChange={handleChange}
        />
        {error.brandName && <p style={{ color: 'red' }}>{error.brandName}</p>}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={onClose}
        >
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BrandForm;
