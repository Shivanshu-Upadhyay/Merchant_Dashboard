import React from "react";
import "./statement.css";
function Statements() {
  const input = <input type="checkbox" />;
const theading1 = [input, "Month", "Action"];
const tdata1 = [
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
  { input, months: "January 2021", action: "Exports" },
];
const tdata2 = [{ year: 2021 }, { year: 2022 }];
  const Table = () => {
    
    return (
      <>
        <table className="table  table-bordered1 table-responsive">
          <thead>
            <tr className="py-5">
              {theading1.map((item, index) => {
                return (
                  <th
                    scope="col"
                    className={index === 2 ? "textCenter" : ""}
                    key={index}
                  >
                    {item}
                    
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tdata1.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.input}</td>
                  <td>{item.months}</td>
                  <td colSpan="2" className="textCenter">
                    <button> {item.action}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <div className="container my-2">
        <h4 className="statementheading">Statements</h4>
        <div className="row my-5 justify-content-between">
          <div className="col-md-8 table-responsive tableMain my-md-0 my-4">
            <Table />
          </div>

          <div className="col-md-3 table-responsive tableMain table2height">
            <table className="table  table-bordered1 table-responsive">
              <thead>
                <tr className="py-5">
                  <th>Statement Years</th>
                </tr>
              </thead>
              <tbody>
                {tdata2.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="yearLink">{item.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statements;
