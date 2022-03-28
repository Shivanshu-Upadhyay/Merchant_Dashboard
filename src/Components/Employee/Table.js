import React from "react";
import "./css/Table.css";
const Table = ({tData }) => {
  
  const theadData = [
    "Employee ID",
    "Name",
    "Email",
    "Phone No",
    "Role",
    "Last Login",
    "Status",
    "Promote/Demote",
  ];


 


  return (
    <>
      <div className=" my-5 table-responsive main">
        <table className="table align-middle  table-borderless table-bordered1 ">
          <thead>
            <tr>
              {theadData.map((item, index) => {
                return (
                  <th
                    scope="col"
                    key={index}
                    className={
                      item === "Status" ? "text-center" : ""
                    }
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <b>{item.EmployeeID}</b>
                  </td>
                  <td>
                    <b>{item.Name}</b>
                  </td>
                  <td>{item.Email}</td>
                  <td>{item.Phone}</td>
                  <td>
                    <b>{item.Role}</b>
                  </td>
                  <td>{item.LastLogin}</td>
                  <td>
                    <button
                      className={item.Status === true ? "status" : "Disable"}
                    >
                      {item.Status === true ? "Enable" : "Disable"}
                    </button>
                  </td>
                  <td>
                    <button className="clickHere"> {item.ClickHere}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
