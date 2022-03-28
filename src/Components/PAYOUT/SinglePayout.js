import React from "react";
import "./SinglePayout.css"
function SinglePayout() {

  
  return (
    <>
      <div className="container">
        <h4>Single Payout</h4>
        <form className="container my-4">
          <div className="row">
            <h5>New PayOut</h5>
            <div className="col-5 d-flex justify-content-between my-3">
              <div>
                <input
                  type="radio"
                  id="ICICBANK"
                  name="NewPayout"
                  value="ICICBANK"
                />
                  <label >ICIC BANK </label>
              </div>
               
              <div>
                <input
                  type="radio"
                  id="OTHERBANK"
                  name="NewPayout"
                  value="OTHERBANK"
                />
                  <label >OTHER BANK</label>
              </div>
               
            </div>
          </div>
          <div className="row">
            <h6 className="my-2">Payout Account Details</h6>
            <div className="col-sm-6">
              <label className="form-label">Payout Account No </label>
              <input
                type="number"
                className="form-control"
                placeholder="Payout Account No"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Payout IFSC Code </label>
              <input
                type="number"
                className="form-control"
                placeholder="Payout IFSC Code"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-6">
              <h6 className="my-2">
                Payout Amount (₹98844.85 Available Payout)
              </h6>
              <label className="form-label">Amount </label>
              <input type="number" className="form-control" placeholder="INR" />
            </div>
            <div className="col-sm-6">
              <h6 className="my-2"> PayOut</h6>

              <label className="form-label">Transaction By </label>
              <select
                className="form-select pymentSent"
                aria-label="Default select example"
              >
                <option className="pymentSent">Payment Sent Method</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="row my-3">
            <h6 className="my-3">Payout Customer</h6>
            <div className="col-sm-6">
              <label className="form-label">Payee Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Payee Name"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Beneficiary Nick Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Beneficiary Nick Name"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-6">
              <label className="form-label">Remark </label>
              <input type="number" className="form-control" placeholder="Remark" />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Customer Order ID (Optional) </label>
              <input
                type="number"
                className="form-control"
                placeholder="Customer Order ID (Optional)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5 d-flex justify-content-between ">
              <div>
                <button className="cancel">Cancel</button>
              </div>
              <div className="mx-2">
                <button className="payout">PayOut</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SinglePayout;
