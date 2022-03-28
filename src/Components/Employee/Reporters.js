import React from 'react'
import "./css/employee.css";
import EmpTable from "./Table";
import MainModal from "./Modal";
import {ReporterData} from './Data';
function Reporters() {
    

    
  return (
    <>
      <h4>Reporters</h4>
      <MainModal />
      <EmpTable tData={ReporterData} />
    </>
  );
}

export default Reporters