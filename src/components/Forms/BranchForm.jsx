const BranchForm= ({ onClose, onSave }) => {
  return (
    <form className="p-3">
      <div className="form-group">
        <h5>Branch Name</h5>
        <input type="text" className="form-control" placeholder="Enter full name" />
      </div>
      <div className="form-group mt-3">
        <h5>Branch Code</h5>
        <input type="text" className="form-control" placeholder="Enter mobile number" />
      </div>
      <div className="form-group mt-3">
        <h5>Email</h5>
        <input type="text" className="form-control" placeholder="Enter Whatsapp number" />
      </div>
      <div className="form-group mt-3">
        <h5>Telephone Number</h5>
        <input type="text" className="form-control" placeholder="Enter Whatsapp number" />
      </div>
      <div className="form-group mt-3">
        <h5>Fax</h5>
        <input type="text" className="form-control" placeholder="Enter Whatsapp number" />
      </div>
      <div className="form-group mt-3">
        <h5>Address</h5>
        <textarea className="form-control" placeholder="Enter address"></textarea>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success" onClick={onSave}>
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default BranchForm