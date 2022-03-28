import React from "react";
import "./VirtualTerminal.css";
function VirtualTerminal() {
  return (
    <>
      <div className="container my-5">
        <h4>Virtual Terminal</h4>
        <form className="container">
          <h5>Accept one time Payment</h5>
          <div className="row">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Sales Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Sales Amount"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Invoice #</label>
              <input
                type="number"
                className="form-control"
                placeholder=" 16171696890823"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4">
              <label className="form-label">Currency</label>
              <select
                className="form-select pymentSent"
                aria-label="Default select example"
              >
                <option className="pymentSent">INR</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              
            </div>
            <div className="col-md-4 d-md-flex justify-content-md-center align-items-md-end">
              <div>
                <input type="radio" className="mx-2 my-md-0 my-3" />
                <label className="form-label ">Taxable</label>
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">Tax Rate (0.00%)</label>
              <input type="number" className="form-control" placeholder="0"  />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea className="form-control" placeholder="Description" />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Customer First Name</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Customer First Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Customer Last Name</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Customer Last Name"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                placeholder=" Email ID"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile number</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Mobile number"
              />
            </div>
          </div>
          <div className="row my-4 ">
            <h5 className="my-4"> Use a Card Reader</h5>
            <div className="col-md-12 my-md-0 my-3">
              <label className="form-label">Credit/Debit Card Number</label>
              <input
                type="password"
                className="form-control"
                placeholder=" Credit/Debit Card Number"
              />
            </div>

            <div className="row d-flex cardBox">
              <img
                src="../../IMAGES/image7.svg"
                alt=""
                className="img-fluid col-md-6 my-4"
              />
              <img
                src="../../IMAGES/image8.svg"
                alt=""
                className="img-fluid col-md-6"
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 my-md-0 my-3">
              <label className="form-label">Expiration on</label>
              <input type="email" className="form-control" placeholder=" MM" />
            </div>
            <div className="col-md-4 d-md-flex justify-content-md-center align-items-md-end">
              <div>
                <input
                  type="number"
                  className=" form-control mx-2 my-md-0 my-3"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">CVV</label>
              <input
                type="number"
                className="form-control"
                placeholder=" CVV"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">Billing Street Number</label>
              <input
                type="text"
                className="form-control"
                placeholder=" Address"
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Country</label>
              <select
                className="form-select pymentSent"
                aria-label="Default select example"
              >
                <option className="pymentSent">India</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Zip</label>
              <input
                type="number"
                className="form-control"
                placeholder=" Zip"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 my-md-0 my-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                placeholder=" State"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder=" City" />
            </div>
            <p className="my-3 pstyle">
             
              <img src="https://picsum.photos/30/30" alt="not found" style={{width:"16px",height:"16px", padding:"5px"}} />
              We recommend entering addressand zip to help with potential
              customer disputes.
            </p>
          </div>
          <div className="row">
            <div className="col-6 d-flex justify-content-between ">
              <div>
                <button className="cancel">Cancel</button>
              </div>
              <div className="mx-2">
                <button className="process">Process Payment</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default VirtualTerminal;
