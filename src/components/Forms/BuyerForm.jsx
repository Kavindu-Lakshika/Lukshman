import React, { useState } from 'react';

const validatePhoneNumber = (number) => {
  const regex = /^\+94\d{9}$/;
  if (!regex.test(number)) {
    return 'Phone number must be in the format +94 followed by 9 digits.';
  }
  return '';
};

const validateFullName = (name) => {
  if (!name) {
    return 'Full Name is required.';
  }
  if (name.length < 3) {
    return 'Full Name must be at least 3 characters long.';
  }
  return '';
};

const validateAddress = (address) => {
  if (!address) {
    return 'Address is required.';
  }
  if (address.length < 5) {
    return 'Address must be at least 5 characters long.';
  }
  return '';
};

const BuyerForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    newErrors.fullName = validateFullName(formData.fullName);
    newErrors.mobileNumber = validatePhoneNumber(formData.mobileNumber);
    newErrors.whatsappNumber = validatePhoneNumber(formData.whatsappNumber);
    newErrors.address = validateAddress(formData.address);

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      onSave();
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5>Full Name</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Mobile Number</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter mobile number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>WhatsApp Number</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter WhatsApp number"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
        />
        {errors.whatsappNumber && <p style={{ color: 'red' }}>{errors.whatsappNumber}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Address</h5>
        <textarea
          className="form-control"
          placeholder="Enter address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BuyerForm;
