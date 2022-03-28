import React from 'react'
import "./css/employee.css";
import EmpTable from "./Table";
import MainModal from "./Modal";
import {ManagerData} from "./Data";

function Managers() {
    

    
  return (
    <>
      <h4>Managers</h4>
      <MainModal />
      <EmpTable tData={ManagerData} />
    </>
  );
}

export default Managers