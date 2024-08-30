import { useState } from 'react';

const validateSerialNumber = (serialNumber) => {
  if (!serialNumber) {
    return 'Serial Number is required.';
  }
  return '';
};

const validateItemNo = (itemNo) => {
  if (!itemNo) {
    return 'Item No is required.';
  }
  return '';
};

const validateItemCode = (itemCode) => {
  if (!itemCode) {
    return 'Item Code is required.';
  }
  return '';
};

const validateItemName = (itemName) => {
  if (!itemName) {
    return 'Item Name is required.';
  }
  return '';
};

const validateItemPrice = (itemPrice) => {
  if (!itemPrice || isNaN(itemPrice)) {
    return 'Item Price must be a valid number.';
  }
  return '';
};

const validateProductSerialNumber = (productSerialNumber) => {
  if (!productSerialNumber) {
    return 'Product Serial Number is required.';
  }
  return '';
};

const validateDate = (date) => {
  if (!date) {
    return 'Date is required.';
  }
  return '';
};

const validateInvoiceNumber = (invoiceNumber) => {
  if (!invoiceNumber) {
    return 'Invoice Number is required.';
  }
  return '';
};

const validateWarrantyPeriod = (warrantyPeriod) => {
  if (!warrantyPeriod) {
    return 'Warranty Period is required.';
  }
  return '';
};

const ItemForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    branch: '',
    brand: '',
    serialNumber: '',
    itemNo: '',
    itemCode: '',
    itemName: '',
    itemPrice: '',
    productSerialNumber: '',
    buyer: '',
    date: '',
    invoiceNumber: '',
    warrantyPeriod: '',
  });

  const [error, setError] = useState({
    serialNumber: '',
    itemNo: '',
    itemCode: '',
    itemName: '',
    itemPrice: '',
    productSerialNumber: '',
    date: '',
    invoiceNumber: '',
    warrantyPeriod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field
    const validationErrors = {
      serialNumber: validateSerialNumber(formData.serialNumber),
      itemNo: validateItemNo(formData.itemNo),
      itemCode: validateItemCode(formData.itemCode),
      itemName: validateItemName(formData.itemName),
      itemPrice: validateItemPrice(formData.itemPrice),
      productSerialNumber: validateProductSerialNumber(formData.productSerialNumber),
      date: validateDate(formData.date),
      invoiceNumber: validateInvoiceNumber(formData.invoiceNumber),
      warrantyPeriod: validateWarrantyPeriod(formData.warrantyPeriod),
    };

    // Set errors if validation fails
    setError(validationErrors);

    // Proceed if no errors are found
    if (Object.values(validationErrors).every((err) => !err)) {
      console.log('Form submitted successfully:', formData);
      if (onSave) onSave(); // Call the onSave function if provided
    }
  };

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="branch" className="form-label">Branch</label>
          <select
            id="branch"
            name="branch"
            className="form-select"
            value={formData.branch}
            onChange={handleChange}
          >
            <option value="">-- Select Branch --</option>
            {/* Add options dynamically or statically here */}
          </select>
        </div>
        <div className="col">
          <label htmlFor="brand" className="form-label">Brand</label>
          <select
            id="brand"
            name="brand"
            className="form-select"
            value={formData.brand}
            onChange={handleChange}
          >
            <option value="">-- Select Brand --</option>
            {/* Add options dynamically or statically here */}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="serialNumber" className="form-label">Serial Number</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            className="form-control"
            placeholder="Enter Serial Number"
            value={formData.serialNumber}
            onChange={handleChange}
          />
          {error.serialNumber && <p style={{ color: 'red' }}>{error.serialNumber}</p>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="itemNo" className="form-label">Item No</label>
          <input
            type="text"
            id="itemNo"
            name="itemNo"
            className="form-control"
            placeholder="Enter Item No"
            value={formData.itemNo}
            onChange={handleChange}
          />
          {error.itemNo && <p style={{ color: 'red' }}>{error.itemNo}</p>}
        </div>
        <div className="col">
          <label htmlFor="itemCode" className="form-label">Item Code</label>
          <input
            type="text"
            id="itemCode"
            name="itemCode"
            className="form-control"
            placeholder="Enter Item Code"
            value={formData.itemCode}
            onChange={handleChange}
          />
          {error.itemCode && <p style={{ color: 'red' }}>{error.itemCode}</p>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            className="form-control"
            placeholder="Enter Item Name"
            value={formData.itemName}
            onChange={handleChange}
          />
          {error.itemName && <p style={{ color: 'red' }}>{error.itemName}</p>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="itemPrice" className="form-label">Item Price</label>
          <input
            type="text"
            id="itemPrice"
            name="itemPrice"
            className="form-control"
            placeholder="Enter Item Price"
            value={formData.itemPrice}
            onChange={handleChange}
          />
          {error.itemPrice && <p style={{ color: 'red' }}>{error.itemPrice}</p>}
        </div>
        <div className="col">
          <label htmlFor="productSerialNumber" className="form-label">Product Serial Number</label>
          <input
            type="text"
            id="productSerialNumber"
            name="productSerialNumber"
            className="form-control"
            placeholder="Enter Product Serial Number"
            value={formData.productSerialNumber}
            onChange={handleChange}
          />
          {error.productSerialNumber && <p style={{ color: 'red' }}>{error.productSerialNumber}</p>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="buyer" className="form-label">Buyer</label>
          <select
            id="buyer"
            name="buyer"
            className="form-select"
            value={formData.buyer}
            onChange={handleChange}
          >
            <option value="">Select Buyer</option>
            {/* Add options dynamically or statically here */}
          </select>
        </div>
        <div className="col">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            placeholder="Enter date (YYYY-MM-DD)"
            value={formData.date}
            onChange={handleChange}
          />
          {error.date && <p style={{ color: 'red' }}>{error.date}</p>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            className="form-control"
            placeholder="Enter Invoice Number"
            value={formData.invoiceNumber}
            onChange={handleChange}
          />
          {error.invoiceNumber && <p style={{ color: 'red' }}>{error.invoiceNumber}</p>}
        </div>
        <div className="col">
          <label htmlFor="warrantyPeriod" className="form-label">Warranty Period</label>
          <input
            type="text"
            id="warrantyPeriod"
            name="warrantyPeriod"
            className="form-control"
            placeholder="Enter Warranty Period"
            value={formData.warrantyPeriod}
            onChange={handleChange}
          />
          {error.warrantyPeriod && <p style={{ color: 'red' }}>{error.warrantyPeriod}</p>}
        </div>
      </div>

      <div className="d-flex justify-content-end">
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

export default ItemForm;
