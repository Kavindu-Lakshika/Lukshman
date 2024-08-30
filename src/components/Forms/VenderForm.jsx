import { useState } from 'react';


const validateFullName = (fullName) => {
  if (!fullName) {
    return 'Full Name is required.';
  }
  return '';
};

const validateMobileNumber = (mobileNumber) => {
  const regex = /^\+94\d{9}$/;
  if (!regex.test(mobileNumber)) {
    return 'Phone number must be in the format +94 followed by 9 digits.';
  }
  return '';
};

const validateWhatsappNumber = (whatsappNumber) => {
  if (!whatsappNumber) {
    return 'Whatsapp Number is required.';
  }
  return '';
};

const validateAddress = (address) => {
  if (!address) {
    return 'Address is required.';
  }
  return '';
};

const VenderForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    address: '',
  });

  const [error, setError] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {
      fullName: validateFullName(formData.fullName),
      mobileNumber: validateMobileNumber(formData.mobileNumber),
      whatsappNumber: validateWhatsappNumber(formData.whatsappNumber),
      address: validateAddress(formData.address),
    };

    setError(validationErrors);


    if (Object.values(validationErrors).every((err) => !err)) {
      console.log('Form submitted successfully:', formData);
      if (onSave) onSave(); 
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5>Full Name</h5>
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {error.fullName && <p style={{ color: 'red' }}>{error.fullName}</p>}
      </div>
      <div className="form-group mt-3">
        <h5>Mobile Number</h5>
        <input
          type="text"
          name="mobileNumber"
          className="form-control"
          placeholder="Enter mobile number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        {error.mobileNumber && <p style={{ color: 'red' }}>{error.mobileNumber}</p>}
      </div>
      <div className="form-group mt-3">
        <h5>Whatsapp Number</h5>
        <input
          type="text"
          name="whatsappNumber"
          className="form-control"
          placeholder="Enter Whatsapp number"
          value={formData.whatsappNumber}
          onChange={handleChange}
        />
        {error.whatsappNumber && <p style={{ color: 'red' }}>{error.whatsappNumber}</p>}
      </div>
      <div className="form-group mt-3">
        <h5>Address</h5>
        <textarea
          name="address"
          className="form-control"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        {error.address && <p style={{ color: 'red' }}>{error.address}</p>}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-success"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default VenderForm;
