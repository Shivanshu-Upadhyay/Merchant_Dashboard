import React from 'react'
import "./css/employee.css";
import EmpTable from "./Table";
import MainModal from "./Modal";
import { CashierData } from "./Data";
function Cashiers() {
 
    

    



  return (
    <>
      <h4>Cashiers</h4>
      <MainModal />
      <EmpTable tData={CashierData} />
    </>
  );
}

export default Cashiers