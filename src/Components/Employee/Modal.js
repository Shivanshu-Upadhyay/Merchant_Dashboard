import React,{useState} from 'react'
import { Modal  } from "react-bootstrap";




function MainModal() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="sendInvoice " onClick={() => setModalShow(true)}>
          + Add Employee
        </button>
        <ModalLayout show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}





function ModalLayout(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Header closeButton className="ModalHeader" closeVariant={"white"}>
        <Modal.Title id="contained-modal-title-vcenter">
          New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12 my-3">
            <label className="form-label"> First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="  First Name"
            />
          </div>
          <div className="col-md-12 ">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder=" Last Name"
            />
          </div>
          <div className="col-md-12  my-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder=" Phone Number"
            />
          </div>
          <div className="col-md-12  ">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder=" Email Address"
            />
          </div>
          <div className="col-md-12 my-3 ">
            <label className="form-label">Role</label>
            <input type="text" className="form-control" placeholder=" Role" />
          </div>
          <div className="col-md-12 my-3 ">
            <h5>Details</h5>
            <p style={{ fontSize: "14px" }}>
              Limited access to Akontopay. As an Owner or Admin, you must grant
              the Cashier role access to additional permissions, such as
              Activity, Virtual Terminal, Invoices, Disputies, Transactions,
              Payouts, Reports, Statements only.
            </p>
            <h5> Note</h5>
            <p style={{ fontSize: "14px" }}>
              Activating a New Employee Account New employees will receive a
              link via email to activate their account. Account: Active
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center align-items-center">
        <button onClick={props.onHide} className="save">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default MainModal;