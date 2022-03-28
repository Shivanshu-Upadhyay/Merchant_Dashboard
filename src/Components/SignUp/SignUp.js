import React,{useState} from "react";
import "./signup.css";




function SignUp() {
  
const [comp,setComp] = useState(0);


const LoginDash = () => {
  return (
    <>
      <form action="">
        <h6 className="logintext">Login to Dashboard</h6>
        <div className="mb-3">
          <label className="form-label loginlable ">
            Email or Mobile Number
          </label>
          <input type="text" className="form-control" />
        </div>
        <button className="next" onClick={()=>{setComp(comp+1)}} >Next</button>
        
        <hr />
        <button className="googlebtn">
          <img src="../../IMAGES/google.svg" alt="" className="imhgoogle" />
          Login With Google
        </button>
      </form>
    </>
  );
};
const LoginPass = () => {
  return (
    <>
      <form action="">
        <h6 className="logintext">Login to Dashboard</h6>
        <div className="mb-3">
          <label className="form-label loginlable ">
            Enter Password
          </label>
          <input type="password" className="form-control" />
        </div>
        <button className="next" onClick={()=>{setComp(comp+5)}} >Next</button>
        
        <hr />
        <button className="googlebtn">
          <img src="../../IMAGES/google.svg" alt="" className="imhgoogle" />
          Login With Google
        </button>
      </form>
    </>
  );
};

const BusinessType = () => {
  return (
    <>
      <form action="">
        <h6 className="logintext">What’s your business type?</h6>
        <div className="mb-2">
          <label className="form-label loginlable ">
            Unregistered Business
          </label>
          <input
            type="text"
            className="form-control businesstype"
            placeholder="Unregistered"
          />
        </div>
        <div className="mb-3">
          <label className="form-label loginlable ">Registered Business</label>
          <input
            type="text"
            className="form-control mb-3 businesstype"
            placeholder="Proprietorship"
          />
          <input
            type="text"
            className="form-control businesstype"
            placeholder="Private Limited"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype"
            placeholder="Partnership"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype"
            placeholder="Public Limited"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype"
            placeholder="LLP"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype"
            placeholder="Trust"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype "
            placeholder="Society"
          />
          <input
            type="text"
            className="form-control mt-3 businesstype"
            placeholder="Society"
          />
        </div>
        <button
          className="Nextbtn "
          onClick={() => {
            setComp(comp + 1);
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

const Multi = () => {
  return (
    <>
      <form action="" className="d-flex flex-column">
        <h6 className="headiing">What’s your estimated monthly revenue? (₹)</h6>
        <div className="pline">
          Create unlimited branded QR codes and start accepting payments for
          FREE. T&C apply.
        </div>
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="Haven’t started processing yet"
        />
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="Less than 5 Lakhs"
        />
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="5 Lakhs to 25 Lakhs"
        />
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="25 Lakhs to 50 Lakhs"
        />
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="50 Lakhs to 1 Crore"
        />
        <input
          type="text"
          className="form-control mt-3 businesstype"
          placeholder="More than 1 Crore"
        />
        <div
          style={{ marginTop: "8rem" }}
          className="d-flex justify-content-center"
        >
          <button
            className=" back "
            onClick={() => {
              setComp(comp - 1);
            }}
          >
            Back
          </button>
          <button
            className="Nextbtn2 "
            onClick={() => {
              setComp(comp + 1);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <form action="">
        <h6 className="logintext">Your contact details</h6>
        <label className="form-label loginlable ">Your Name</label>
        <input
          type="text"
          className="form-control mb-3 "
          placeholder="Your Name"
        />
        <label className="form-label loginlable ">Contact Number</label>
        <input
          type="number"
          className="form-control mb-3 "
          placeholder="Contact Number"
        />
        <div className="d-flex align-items-center  mb-3">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            className="mx-2"
          />
          <span className="getacc">Get account updates on WhatsApp</span>
        </div>
        <a href="dd"> Got a coupon code?</a>
        <div
          style={{ marginTop: "12rem" }}
          className="d-flex justify-content-center"
        >
          <button
            className=" back "
            onClick={() => {
              setComp(comp - 1);
            }}
          >
            Back
          </button>
          <button
            className="Nextbtn2 "
            onClick={() => {
              setComp(comp + 1);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};




  

  return (
    <>
      <div className="row main">
        <div className="col-12 d-flex  align-items-center">
          <img src="../../IMAGES/ubank.svg" alt="" className=" me-auto ubank" />
          <div className="d-flex justify-content-end">
            <span className="text1">New to Razorpay</span>
            <button className="button1">Sign Up</button>
          </div>
        </div>

        <div className="col-12 secondblock container">
          <div className="col-md-7">
            <h6 className="firstline">Do more with MultiQR!</h6>
            <p className="secondline">
              Create unlimited branded QR codes and start accepting payments for
              FREE. T&C apply.
            </p>
            <button className="button2">Learn More</button>
            <div>
              Need help? <a href="bb"> Contact Us</a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="logindash">
              {comp === 0 ? (
                <LoginDash />
              ) : comp === 1 ? (
                <BusinessType />
              ) : comp === 2 ? (
                <Multi />
              ) : comp === 3 ? (
                <Contact />
              ) : (
                <div className="center1">
                  <h1>
                    <b>Thank You😀😍</b>
                  </h1>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
