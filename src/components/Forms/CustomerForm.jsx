import { useState } from 'react';

const CustomerForm= ({ onClose, onSave }) =>{

  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (number) => {
    // Regex to validate:
    // - Length must be 12 characters
    // - First character must be +
    // - Second character must be 9
    // - Third character must be 4
    // - The remaining characters must be digits
    const regex = /^\+94\d{9}$/;

    if (!regex.test(number)) {
      return 'Mobile number must be in the format +94 followed by 9 digits.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validatePhoneNumber(phoneNumber);

    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      // Submit form or perform desired action here
      console.log('Form submitted successfully:', phoneNumber);
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
              className="form-control"
              placeholder="Full Name"
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formMobile1">Mobile Number</h5>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              className="form-control"
              placeholder="Mobile Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formMobile2">Mobile Number 2</h5>
            <input
              type="text"
              id="formMobile2"
              className="form-control"
              placeholder="Mobile Number 2"
            />
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
            <h5 htmlFor="formWhatsapp">WhatsApp Number</h5>
            <input
              type="text"
              id="formWhatsapp"
              className="form-control"
              placeholder="WhatsApp Number"
            />
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
              className="form-control"
              placeholder="Email"
            />
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
              className="form-control"
              placeholder="NIC"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formJobDescription">Job Description</h5>
            <input
              type="text"
              id="formJobDescription"
              className="form-control"
              placeholder="Job Description"
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formNICPhoto">NIC Photo</h5>
            <input type="file" id="formNICPhoto" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formPhoto">Photo</h5>
            <input type="file" id="formPhoto" className="form-control" />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formFacebookPhoto">Facebook Photo</h5>
            <input
              type="file"
              id="formFacebookPhoto"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <h5 htmlFor="formAddressConfirmation">
              Address Confirmation
            </h5>
            <input
              type="file"
              id="formAddressConfirmation"
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">
            Close
          </button>
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}

export default CustomerForm;
