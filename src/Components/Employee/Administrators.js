import React from 'react'
import "./css/employee.css";
import EmpTable from "./Table";
import MainModal from "./Modal";
import {AdministratorData} from './Data';

const  Administrators =()=> {




  return (
    <>
      <>
        <h4>Administrators</h4>
        <MainModal />
        <EmpTable tData={AdministratorData}  />
      </>
    </>
  );
}

export default Administrators