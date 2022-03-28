import React from 'react'
import './TransactionsView.css'

function TransactionsView() {


  return (
    <div className="container main">
      <div className="row py-4">
        <div className="col-sm-8 ">
          <h4 className="TransactionsView">Transactions View</h4>
        </div>
        <div className="col-sm-4 ">
          <button className="button1">
            <img src="../../IMAGES/downloadIcon.svg" alt="" className="mx-2" />
            Download Report
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <p>ID Invoice</p>
                <h6>#12345</h6>
              </td>
              <td></td>
              <td>
                <p>Telephone</p>
                <h6>+12 345 456 678</h6>
              </td>
              <td></td>
              <td>
                <p>Email</p>
                <h6>ac@gmail.com</h6>
              </td>
            </tr>
            <tr>
              <td>
                <div className="row justify-content-between ">
                  <div className="col-md-6 col-lg-3">
                    <img
                      src="../../IMAGES/picsvg.svg"
                      alt=""
                      className="img1"
                    />
                  </div>
                  <div className="col-md-6 col-lg-9">
                    <h6>Richard Michal</h6>
                    <p> @Richard.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p>Payment Method</p>
                <h6>Master card 404</h6>
              </td>
              <td>
                <p>Request Date</p>
                <h6>April 29,2020</h6>
              </td>
              <td>
                <p>Transaction Date</p>
                <h6>April 29,2020</h6>
              </td>
              <td>
                <p>Settled Date</p>
                <h6>April 29,2020</h6>
              </td>
            </tr>
            <tr>
              <td>
                <p>Gross Amount</p>
                <h6>$120</h6>
              </td>
              <td>
                <p>Rolling Reserve Amount</p>
                <h6>$100</h6>
              </td>
              <td>
                <p>Commissions</p>
                <h6>$85</h6>
              </td>
              <td>
                <p>Net Amount</p>
                <h6>$20</h6>
              </td>
              <td>
                <p>Setteld Amount</p>
                <h6>$45</h6>
              </td>
            </tr>
            <tr>
              <td>
                <p>Sold By</p>
                <h6>Owner</h6>
              </td>
              <td>
                <p>Card</p>
                <h6>Visa Card</h6>
              </td>
              <td>
                <p>Card No.</p>
                <h6>3021**********12</h6>
              </td>
              <td>
                <p>Message</p>
                <h6>Thanks for </h6>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6 ">
          <div className="Amount mb-3 ">
            <div className="mx-4 img2container" style={{ background: "url('../../IMAGES/dallsign.svg')"}}>
              
            </div>
            <div>
              <span className="amount-text">Amount</span>
              <div className="amount-number">$12345</div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 ">
          <button className="button2">
            Refund Transaction
            <img src="../../IMAGES/downArr.svg" alt="" className="mx-1" />
          </button>
        </div>
        <div className="col-sm-3 ">
          <button className="button3">Cancel Transactions</button>
        </div>
      </div>
      <div className="container mt-5 container1">
        <div className="row mb-4">
          <h5>Description</h5>
          <div className="col-sm-8 ">
            <p className="Description-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minus suscipit fuga, veniam at pariatur molestiae quos? Labore
              facere accusantium sequi adipisci obcaecati aut mollitia
              distinctio. Cumque distinctio iure cupiditate, excepturi quae
              incidunt facere ipsa exercitationem aperiam nostrum fuga quisquam
              dignissimos repellat? Est consequatur inventore possimus ab
              repellendus aliquid deserunt minus recusandae, provident impedit,
              voluptatem dignissimos natus quos temporibus totam in dolorem
              dolore nemo? Repellendus accusamus suscipit obcaecati delectus
              explicabo eum, expedita nam enim cum deleniti natus facilis itaque
            </p>
          </div>

          {/* AtM CARD */}

          <div className="col-sm-4 ">
            <div className="atmCard border1">
              
              

              <div className="atmFirstBlock">
                <span
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Main Balance
                </span>
                <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                  $673,412.66
                </div>
              </div>

              <div className=" imgDivCard d-flex justify-content-between align-items-center">
                <div>
                  <img
                    src="../../IMAGES/atmcir.svg"
                    alt=""
                    className="atmImg"
                  />
                </div>

                <div>
                  <span>**** **** **** 123</span>
                </div>
              </div>
              <div className="d-flex my-2">
                <div className="validsection ">
                  <span className="valitColor"> VALID THRU</span> <h6>08/21</h6>
                </div>
                <div>
                  <span className="valitColor">CARD HOLDER</span>
                  <h6 style={{ color: "#fff" }}>Frankinlin Jr.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsView