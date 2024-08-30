import { useState } from 'react';

const BranchForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    branchName: '',
    branchCode: '',
    email: '',
    telephone: '',
    fax: '',
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\+94\d{9}$/;
    return regex.test(number) ? '' : 'Phone number must be in the format +94 followed by 9 digits.';
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.branchName) {
      newErrors.branchName = 'Branch Name is required.';
    }

    if (!formData.branchCode) {
      newErrors.branchCode = 'Branch Code is required.';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }

    if (!formData.telephone) {
      newErrors.telephone = 'Telephone number is required.';
    } else {
      const phoneError = validatePhoneNumber(formData.telephone);
      if (phoneError) {
        newErrors.telephone = phoneError;
      }
    }

    if (!formData.fax) {
      const faxError = validatePhoneNumber(formData.fax);
      if (faxError) {
        newErrors.fax = faxError;
      }
    }

    if (!formData.address) {
      newErrors.address = 'Address is required.';
    } else {
      const addressError = validateAddress(formData.address);
      if (addressError) {
        newErrors.address = addressError;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Branch Form submitted successfully:', formData);
      onSave();
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5>Branch Name</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter branch name"
          name="branchName"
          value={formData.branchName}
          onChange={handleChange}
        />
        {errors.branchName && <p style={{ color: 'red' }}>{errors.branchName}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Branch Code</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter branch code"
          name="branchCode"
          value={formData.branchCode}
          onChange={handleChange}
        />
        {errors.branchCode && <p style={{ color: 'red' }}>{errors.branchCode}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Email</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Telephone Number</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter telephone number"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />
        {errors.telephone && <p style={{ color: 'red' }}>{errors.telephone}</p>}
      </div>

      <div className="form-group mt-3">
        <h5>Fax</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Enter fax number"
          name="fax"
          value={formData.fax}
          onChange={handleChange}
        />
        {errors.fax && <p style={{ color: 'red' }}>{errors.fax}</p>}
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

export default BranchForm;
