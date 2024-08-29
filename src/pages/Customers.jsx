import { useState } from "react";
import CustomerForm from "../components/Forms/CustomerForm";
import SideBar from "../components/SideBar";
import Table from "../components/Table";

function Customers() {
  const columns = [
    "Full Name",
    "Mobile Number",
    "City",
    "District",
    "Whatsapp Number",
    "Branch",
    "Address",
    "Email",
  ];
  const data = [
    [
      "John",
      "0123456789",
      "Kandy",
      "Kandy",
      "0123456789",
      "Kandy",
      "Kandy",
      "john@gmail.com",
    ],
  ];
  const btnName = "Add New Customer";

  const handleEdit = (rowIndex) => {
    console.log(`Editing row ${rowIndex}`);
  };

  const handleDelete = (rowIndex) => {
    console.log(`Deleting row ${rowIndex}`);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSave = (event) => {
    event.preventDefault();
    console.log("Customer information saved");
    setModalOpen(false);
  };

  return (
    <div className="d-flex">
      <SideBar />
      <div className="flex-grow-1 p-3">
        <h2>Customers</h2>
        <Table
          data={data}
          columns={columns}
          btnName={btnName}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={handleOpenModal}
        />
      </div>
      {isModalOpen && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Add New Customer</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "1.5rem",
                    background: "none",
                    border: "none",
                    color: "white",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <CustomerForm onClose={handleCloseModal} onSave={handleSave} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
