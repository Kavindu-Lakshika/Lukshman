import { useState } from 'react';


const validatePhoneNumber = (number) => {
  const regex = /^\+94\d{9}$/;
  if (!regex.test(number)) {
    return 'Number must be in the format +94 followed by 9 digits.';
  }
  return '';
};


const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required.';
  }
  if (!regex.test(email)) {
    return 'Invalid email format.';
  }
  return '';
};


const validateNIC = (nic) => {
  const regex = /^[0-9]{9}[vVxX]|[0-9]{12}$/; 
  if (!nic) {
    return 'NIC is required.';
  }
  if (!regex.test(nic)) {
    return 'NIC must be 9 digits followed by a letter or 12 digits.';
  }
  return '';
};


const validateText = (text, fieldName) => {
  if (!text) {
    return `${fieldName} is required.`;
  }
  if (text.length < 3) {
    return `${fieldName} must be at least 3 characters long.`;
  }
  return '';
};

const CustomerForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    whatsappNumber: '',
    mobileNumber2: '',
    fullName: '',
    email: '',
    nic: '',
    jobDescription: '',
  });

  const [error, setError] = useState({
    phoneNumber: '',
    whatsappNumber: '',
    mobileNumber2: '',
    fullName: '',
    email: '',
    nic: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const phoneError = validatePhoneNumber(formData.phoneNumber);
    const whatsappError = validatePhoneNumber(formData.whatsappNumber);
    const mobile2Error = validatePhoneNumber(formData.mobileNumber2);
    const fullNameError = validateText(formData.fullName, 'Full Name');
    const emailError = validateEmail(formData.email);
    const nicError = validateNIC(formData.nic);
    const jobDescriptionError = validateText(formData.jobDescription, 'Job Description');

  
    setError({
      phoneNumber: phoneError,
      whatsappNumber: whatsappError,
      mobileNumber2: mobile2Error,
      fullName: fullNameError,
      email: emailError,
      nic: nicError,
      jobDescription: jobDescriptionError,
    });


    if (!phoneError && !whatsappError && !mobile2Error && !fullNameError && !emailError && !nicError && !jobDescriptionError) {
      console.log('Form submitted successfully:', formData);
      onSave(); 
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-3">
          <div className="form-group">
            <h5 htmlFor="formTitle">Title *</h5>
            <select id="formTitle" className="form-control">
              <option>Select</option>
              <option>Mr.</option>
              <option>Mrs.</option>
            </select>
          </div>
        </div>

        <div className="col-md-9">
          <div className="form-group">
            <h5 htmlFor="formFullName">Full Name</h5>
            <input
              type="text"
              id="formFullName"
              name="fullName"
              className="form-control"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {error.fullName && <p style={{ color: 'red' }}>{error.fullName}</p>}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="phoneNumber">Mobile Number</h5>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              className="form-control"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
            {error.phoneNumber && <p style={{ color: 'red' }}>{error.phoneNumber}</p>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formMobile2">Mobile Number 2</h5>
            <input
              type="text"
              id="formMobile2"
              name="mobileNumber2"
              value={formData.mobileNumber2}
              className="form-control"
              placeholder="Mobile Number 2"
              onChange={handleChange}
            />
            {error.mobileNumber2 && <p style={{ color: 'red' }}>{error.mobileNumber2}</p>}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formWhatsapp">WhatsApp Number</h5>
            <input
              type="text"
              id="formWhatsapp"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              className="form-control"
              placeholder="WhatsApp Number"
              onChange={handleChange}
            />
            {error.whatsappNumber && <p style={{ color: 'red' }}>{error.whatsappNumber}</p>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formBranch">Branch</h5>
            <select id="formBranch" className="form-control">
              <option>Select Branch</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formCity">City</h5>
            <select id="formCity" className="form-control">
              <option>Select City</option>
              <option>Kandy</option>
              <option>Colombo</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formDistrict">District</h5>
            <select id="formDistrict" className="form-control">
              <option>Select District</option>
              <option>Kandy</option>
              <option>Colombo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formAddress">Address</h5>
            <textarea
              id="formAddress"
              className="form-control"
              rows="2"
              placeholder="Address"
            ></textarea>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formOfficeAddress">Office Address</h5>
            <textarea
              id="formOfficeAddress"
              className="form-control"
              rows="2"
              placeholder="Office Address"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formEmail">Email</h5>
            <input
              type="email"
              id="formEmail"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formWeb">Web</h5>
            <input
              type="text"
              id="formWeb"
              className="form-control"
              placeholder="Web"
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formNIC">NIC</h5>
            <input
              type="text"
              id="formNIC"
              name="nic"
              className="form-control"
              placeholder="NIC"
              value={formData.nic}
              onChange={handleChange}
            />
            {error.nic && <p style={{ color: 'red' }}>{error.nic}</p>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formCountry">Country</h5>
            <select id="formCountry" className="form-control">
              <option>Select Country</option>
              <option>Sri Lanka</option>
              <option>India</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formBday">Birthday</h5>
            <input
              type="date"
              id="formBday"
              className="form-control"
              placeholder="Birthday"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formJobDescription">Job Description</h5>
            <input
              type="text"
              id="formJobDescription"
              name="jobDescription"
              className="form-control"
              placeholder="Job Description"
              value={formData.jobDescription}
              onChange={handleChange}
            />
            {error.jobDescription && <p style={{ color: 'red' }}>{error.jobDescription}</p>}
          </div>
        </div>
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

export default CustomerForm;
