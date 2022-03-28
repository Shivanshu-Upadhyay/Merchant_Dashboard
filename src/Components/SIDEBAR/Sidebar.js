import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Sidebar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';






function Sidebar() {

  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)
  const [drop4, setDrop4] = useState(false)
  const [drop5, setDrop5] = useState(false)
  const [drop6, setDrop6] = useState(false)
  const [drop7, setDrop7] = useState(false)
  const [drop8, setDrop8] = useState(false)
  const [drop9, setDrop9] = useState(false)
  const [drop10, setDrop10] = useState(false)
  const [drop11, setDrop11] = useState(false)
  const [drop12, setDrop12] = useState(false)
  const [drop13, setDrop13] = useState(false)
  const [drop14, setDrop14] = useState(false)
  const [drop15, setDrop15] = useState(false)
  // const togglee=()=>{
  //   setDrop(!drop)
  // }
  // var fw="normal"
  const jsdata = {
    f1: () => {
      setDrop1(!drop1)
    },
    f2: () => {
      setDrop2(!drop2)
    },
    f3: () => {
      setDrop3(!drop3)
    },
    f4: () => {
      setDrop4(!drop4)
    },
    f5: () => {
      setDrop5(!drop5)
    },
    f6: () => {
      setDrop6(!drop6)
    },
    f7: () => {
      setDrop7(!drop7)
    },
    f8: () => {
      setDrop8(!drop8)
    },
    f9: () => {
      setDrop9(!drop9)
    },
    f10: () => {
      setDrop10(!drop10)
    },
    f11: () => {
      setDrop11(!drop11)
    },
    f12: () => {
      setDrop12(!drop12)
    },
    f13: () => {
      setDrop13(!drop13)
    },
    f14: () => {
      setDrop14(!drop14)
    },
    f15: () => {
      setDrop15(!drop15)
    },
  }
  const sidebardata = [
    {
      trfa: false,
      icon: <img src="../../IMAGES/submerchant.svg" alt="abc" />,
      title: drop1 ? (
        <div style={{ color: "black", fontWeight: "800" }}>Sub Merchants</div>
      ) : (
        <div>Sub Merchants</div>
      ),
      dropd: drop1 ? (
        <ArrowDropDownIcon onClick={jsdata.f1} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f1} />
      ),
      dropcon: drop1 && (
        <div className="dropcon">
          <div>
            <Link to="/merchant">Merchant</Link>
          </div>
          <div>
            <Link to="/create">Create</Link>
          </div>
          <div></div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/ref.svg" alt="abc" />,
      title: drop3 ? (
        <div style={{ color: "black", fontWeight: "800" }}>Transactions</div>
      ) : (
        <div>Transactions</div>
      ),
      dropd: drop3 ? (
        <ArrowDropDownIcon onClick={jsdata.f3} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f3} />
      ),
      dropcon: drop3 && (
        <div className="dropcon">
          <div>
            <Link to="/alltransaction">All Transactions</Link>
          </div>
          <div>
            <Link to="/allsales">All Sales</Link>
          </div>
          <div>
            <Link to="/cashsales">Cash Sales</Link>
          </div>
          <div>
            <Link to="/virtualterminal">Virtual Terminal</Link>
          </div>
          <div>
            <Link to="/invoices">Invoices</Link>
          </div>
          <div>
            <Link to="/apisales">API Sales</Link>
          </div>
          <div>
            <Link to="/refunds">Refund</Link>
          </div>
          <div>
            <Link to="/voids">Voids</Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/sale.svg" alt="abc" />,
      title: "Payout",
      dropd: drop4 ? (
        <ArrowDropDownIcon onClick={jsdata.f4} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f4} />
      ),
      dropcon: drop4 && (
        <div className="dropcon">
          <div>
            <Link to="/singlepayout">Single Payout</Link>
          </div>
          <div>
            <Link to="/batchpayout">Batch Payout</Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/wallet.svg" alt="abc" />,
      title: "Payout Wallet",
      dropd: drop5 ? (
        <ArrowDropDownIcon onClick={jsdata.f5} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f5} />
      ),
      dropcon: drop5 && (
        <div className="dropcon">
          <div>Bankkode Akonto</div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/dispute.png" alt="abc" />,
      title: "Dispute",
      dropd: drop6 ? (
        <ArrowDropDownIcon onClick={jsdata.f6} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f6} />
      ),
      dropcon: drop6 && (
        <div className="dropcon">
          <div>Bankkode</div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/report.svg" alt="abc" />,
      title: "Reports",
      dropd: drop7 ? (
        <ArrowDropDownIcon onClick={jsdata.f7} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f7} />
      ),
      dropcon: drop7 && (
        <div className="dropcon">
          <div>Merchant Admin</div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/statement.svg" alt="abc" />,
      title: (
        <Link className="vt" to="/statement">
          Statements
        </Link>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/virtual.svg" alt="abc" />,
      title: (
        <Link className="vt" to="/virtualterminal">
          Virtual Terminals
        </Link>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/bill.svg" alt="abc" />,
      title: "Billing & Invoices",
      dropd: drop10 ? (
        <ArrowDropDownIcon onClick={jsdata.f10} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f10} />
      ),
      dropcon: drop10 && (
        <div className="dropcon">
          <div>
            <Link to="/allinvoices">All Invoices</Link>
          </div>
          <div>
            <Link to="/createnew">Create New</Link>
          </div>
          <div>
            <Link to="/paidinvoices">Paid</Link>
          </div>
          <div>
            <Link to="/unpaidinvoices">Un-Paid</Link>
          </div>
          <div>
            <Link to="/overdueinvoices">Over Due</Link>
          </div>
          <div>
            <Link to="/Scheduledinvoices">Scheduled</Link>
          </div>
          <div>
            <Link to="/draftinvoices">Draft</Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/employee.svg" alt="abc" />,
      title: "Employees",
      dropd: drop11 ? (
        <ArrowDropDownIcon onClick={jsdata.f11} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f11} />
      ),
      dropcon: drop11 && (
        <div className="dropcon">
          <div>
            <Link to="/Employee">Employee</Link>
          </div>
          <div>
            <Link to="/Administrators">Administrators</Link>
          </div>
          <div>
            <Link to="/Managers">Managers</Link>
          </div>
          <div>
            <Link to="/Cashiers">Cashiers</Link>
          </div>
          <div>
            <Link to="/Reporters">Reporters</Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/business.svg" alt="abc" />,
      title: "Business Setting",
      dropd: drop12 ? (
        <ArrowDropDownIcon onClick={jsdata.f12} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f12} />
      ),
      dropcon: drop12 && (
        <div className="dropcon">
          <div>
            <Link to="/ReceiptSetting">Receipt Setting</Link>
          </div>
          <div>
            <Link to="/BusinessProfile">Business Profile</Link>
          </div>
          <div>
            <Link to="/PciCompliance">PCI Compliance</Link>
          </div>
          <div>
            <Link to="/BusinessProfile">Funding</Link>
          </div>
          <div>
            <Link to="/Alerts">Alerts</Link>
          </div>
          <div>
            <Link to="Integrations">Integrations</Link>
          </div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/changepass.svg" alt="abc" />,
      title: "Change Password",
      dropd: drop13 ? (
        <ArrowDropDownIcon onClick={jsdata.f13} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f13} />
      ),
      dropcon: drop13 && (
        <div className="dropcon">
          <div><Link to="/ChangePass"> Change Password</Link></div>
        </div>
      ),
    },
    {
      trfa: false,
      icon: <img src="../../IMAGES/logout.svg" alt="abc" />,
      title: "Logout",
      dropd: drop14 ? (
        <ArrowDropDownIcon onClick={jsdata.f14} />
      ) : (
        <ArrowDropUpIcon onClick={jsdata.f14} />
      ),
      dropcon: drop14 && (
        <div className="dropcon">
          <div>Site Setup</div>
        </div>
      ),
    },
  ];
  const mmd = sidebardata.map((i) =>
    <li>
      <div className='lii'>
        <div className='ictit'><div className='ict'>{i.icon}</div>&nbsp;&nbsp;&nbsp;&nbsp;<span>{i.title}</span></div>
        {i.dropd}
      </div>
      {i.dropcon}
    </li>
  )


  return (
    <div>
      <div className='SideBar '>
        <div className='logo'>
          <div><img src='../../IMAGES/logo.svg' alt='abc' /></div>
        </div>
        <br />
        <br />
        <div className='lii' style={{ paddingLeft: "20px"}}>
          <div className='ictit'><div className='sidebarIcon'><img src='../../IMAGES/dashboard.svg' alt='abc' /></div><span style={{ color: "black", fontWeight: "800", fontSize: "20px" }}><Link to='/'>Dashboard</Link></span></div>
        </div>
        <div className='sidescroll'>
          <ul>
            {mmd}
          </ul>
        </div>
      </div>
      <div className='sidefoot'>
        <div style={{color:"black"}}><b>Mophy Payment Admin Dashboard</b></div>
        <div style={{ padding: "7px 0 15px 0",fontSize:"12px"}}>© 2020 All Rights Reserved</div>

        <div className='heart'>Made with &nbsp; <img src='../../IMAGES/heart.svg' alt='abc' />&nbsp;by WIE Software</div>
      </div>
    </div>
  )
}

export default Sidebar