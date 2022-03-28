import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Default.scss";
import alljasondata from "./AllData";
import Header from "../HEADER/Header";
// import Header from '../HEADERR/Header';
// import Home from '../HOME/Home'
import Sidebar from "../SIDEBAR/Sidebar";
import Footer from "../FOOTER/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Other from "../OTHER/Other";
import Homee from "../HOME/Homee";
import Hom from "../HOME/Hom";
import Merchant from "../SUB MERCHANTS/Merchant";
import CreateMerchant from "../SUB MERCHANTS/CreateMerchant";
import AllTransaction from "../TRANSACTION/AllTransaction";
import SinglePayout from "../PAYOUT/SinglePayout";
import BatchPayout from "../PAYOUT/BatchPayout";
import Table from "../TABLEPAGINATION/Table";
import VirtualTerminal from "../VIRTUALTERM/VirtualTerminal";
import Invoices from "../BILLING_AND_INVOICES/Invoices";
import Employee from "../Employee/Employee";
import Administrators from "../Employee/Administrators";
import Managers from "../Employee/Managers";
import Cashiers from "../Employee/Cashiers";
import Reporters from "../Employee/Reporters";

import ReceiptSetting from "../BusinessSetting/ReceiptSetting";
import BusinessProfile from "../BusinessSetting/BusinessProfile"
import PciCompliance from "../BusinessSetting/PciCompliance";
import Funding from "../BusinessSetting/Funding";
import Alerts from "../BusinessSetting/Alerts";
import Integrations from "../BusinessSetting/Integrations";
import ChangePass from '../Changepass/ChangePass'


import {
  tbhead,
  paidInv,
  unpaidInv,
  overdueInv,
  scheduledInv,
  draftInv,
  allInv,
  styling,
  nofovdue,
  nofpaid,
  nofunpaid,
} from "../BILLING_AND_INVOICES/InvoiceData";
import Pagination from "../PAGINATIONS/Pagination";
import MyApp from "../PAGINATIONS/examples/myApp";
import TableFrame from "../TableFrame";
import Statements from "../STATEMENT/Statements";
import CreateInvoice from "../BILLING_AND_INVOICES/CreateInvoice";
import Filterr from "../FILTER/Filterr";

// import TransactionsView from '../TRANSACTION/TransactionsView';
// alert(window.location.href)
function Default() {
  const [temp, setTemp] = useState(true);
  const onclickbody = () => {
    if (window.innerWidth <= 1300) {
      setTemp(false);
    }
  };
  const toggle = () => {
    setTemp(!temp);
  };
  const hide = () => {
    if (window.innerWidth <= 1300) {
      setTemp(false);
    } else {
      setTemp(true);
    }
  };
  window.onresize = hide;
  window.onload = hide;
  return (
    <div className="Default">
      {temp && <Sidebar />}
      {!temp && <MenuIcon className="menu" onClick={toggle} />}
      <div className="Rest" onClick={onclickbody}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homee />}></Route>
          {/* <Route exact path="/" element={<TransactionsView/>}></Route> */}

          <Route
            exact
            path="/virtualterminal"
            element={<VirtualTerminal />}
          ></Route>
          <Route exact path="/singlepayout" element={<SinglePayout />}></Route>
          <Route exact path="/batchpayout" element={<BatchPayout />}></Route>
          <Route exact path="/merchant" element={<Merchant />}></Route>
          <Route exact path="/create" element={<CreateMerchant />}></Route>
          {/* Transaction */}
          <Route
            exact
            path="/alltransaction"
            element={<AllTransaction dataarray={alljasondata.transactionarr} />}
          ></Route>
          <Route
            exact
            path="/allsales"
            element={<AllTransaction dataarray={alljasondata.salesarr} />}
          ></Route>
          <Route
            exact
            path="/cashsales"
            element={<AllTransaction dataarray={alljasondata.cashsalesarr} />}
          ></Route>
          <Route
            exact
            path="/virtualterminal"
            element={
              <AllTransaction dataarray={alljasondata.virtualterminalarr} />
            }
          ></Route>
          <Route
            exact
            path="/invoices"
            element={<AllTransaction dataarray={alljasondata.invoicearr} />}
          ></Route>
          <Route
            exact
            path="/apisales"
            element={
              <AllTransaction dataarray={alljasondata.apitransactionarr} />
            }
          ></Route>
          <Route
            exact
            path="/refunds"
            element={<AllTransaction dataarray={alljasondata.refundarr} />}
          ></Route>
          <Route
            exact
            path="/voids"
            element={<AllTransaction dataarray={alljasondata.voidarr} />}
          ></Route>
          {/* Invoices */}
          <Route
            exact
            path="/allinvoices"
            element={
              <Invoices
                title={"All Invoices"}
                tablehead={tbhead}
                tablerow={allInv}
              />
            }
          ></Route>
          <Route
            exact
            path="/paidinvoices"
            element={
              <Invoices
                title={"Paid Invoices"}
                tablehead={tbhead}
                tablerow={paidInv}
              />
            }
          ></Route>
          <Route
            exact
            path="/unpaidinvoices"
            element={
              <Invoices
                title={"Un-Paid Invoices"}
                tablehead={tbhead}
                tablerow={unpaidInv}
              />
            }
          ></Route>
          <Route
            exact
            path="/overdueinvoices"
            element={
              <Invoices
                title={"Overdue Invoices"}
                tablehead={tbhead}
                tablerow={overdueInv}
              />
            }
          ></Route>
          <Route
            exact
            path="/Scheduledinvoices"
            element={
              <Invoices
                title={"Scheduled Invoices"}
                tablehead={tbhead}
                tablerow={scheduledInv}
              />
            }
          ></Route>
          <Route
            exact
            path="/draftinvoices"
            element={
              <Invoices
                title={"Draft Invoices"}
                tablehead={tbhead}
                tablerow={draftInv}
              />
            }
          ></Route>
          <Route exact path="/page" element={<MyApp />}></Route>
          <Route exact path="/tbframe" element={<TableFrame />}></Route>
          <Route exact path="/statement" element={<Statements />}></Route>
          <Route exact path="/createnew" element={<CreateInvoice />}></Route>
          <Route exact path="/filter" element={<Filterr />}></Route>
          <Route path="/Employee" element={<Employee />}></Route>
          <Route path="/Administrators" element={<Administrators />}></Route>
          <Route path="/Managers" element={<Managers />}></Route>
          <Route path="/Cashiers" element={<Cashiers />}></Route>
          <Route path="/Reporters" element={<Reporters />}></Route>

          <Route path="/ReceiptSetting" element={<ReceiptSetting />}></Route>
          <Route path="/BusinessProfile" element={<BusinessProfile />}></Route>
          <Route path="/PciCompliance" element={<PciCompliance />}></Route>
          <Route path="/Funding" element={<Funding />}></Route>
          <Route path="/Alerts" element={<Alerts />}></Route>
          <Route path="/Integrations" element={<Integrations />}></Route>
          <Route path="/ChangePass" element={<ChangePass />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default Default;
