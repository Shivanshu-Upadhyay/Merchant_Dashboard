import React  from "react";
import "./css/employee.css";
import EmpTable from "./Table";
import MainModal from "./Modal";
import { EmployeeData} from "./Data";

function Employee() {
 
console.log(EmployeeData);



  return (
    <>
      <>
        <h4>Employee</h4>
        <MainModal />
        <EmpTable tData={EmployeeData} />
      </>
    </>
  );
}

export default Employee;
