import React from "react";
import "./BatchPayout.css";
function BatchPayout() {
  const theadData = [
    "CSV File",
    "Total Record",
    "Inserted Record",
    "Not Inserted",
    "Date",
    "Total",
    "Amount in Record",
  ];

  const tData = [
    {
      CSVFile: "#CSV-",
      CSVNUMBER: "16131239432021021215",
      TotalRecord: 1,
      InsertedRecord: 1,
      NotInserted: 0,
      Date: "June 1,2000",
      Total: "$1",
      AmountinRecord: "$1",
    },
    {
      CSVFile: "#CSV-",
      CSVNUMBER: "16131239432021021215",
      TotalRecord: 1,
      InsertedRecord: 1,
      NotInserted: 0,
      Date: "June 1,2000",
      Total: "$1",
      AmountinRecord: "$1",
    },
    {
      CSVFile: "#CSV-",
      CSVNUMBER: "16131239432021021215",
      TotalRecord: 1,
      InsertedRecord: 1,
      NotInserted: 0,
      Date: "June 1,2000",
      Total: "$1",
      AmountinRecord: "$1",
    },
    {
      CSVFile: "#CSV-",
      CSVNUMBER: "16131239432021021215",
      TotalRecord: 1,
      InsertedRecord: 1,
      NotInserted: 0,
      Date: "June 1,2000",
      Total: "$1",
      AmountinRecord: "$1",
    },
  ];

  const Card = () => {
    const cardData = [
      {
        cardName: "Total CSV",
        number: 34,
        imgUrl: "../../IMAGES/csvimg.svg",
      },
      {
        cardName: "Payouts",
        number: 34,
        imgUrl: "../../IMAGES/payouts2.svg",
      },
      {
        cardName: "Panding Payouts",
        number: 34,
        imgUrl: "../../IMAGES/payouts1.svg",
      },
    ];

    

    return (
      <>
        {cardData.map((item, index) => {
          return (
            <div
              className={
                item.cardName === "Total CSV"
                  ? "col-md-3 card1"
                  : item.cardName === "Payouts"
                  ? "col-md-3 card2 my-md-0 my-4"
                  : "col-md-3 card3"
              }
              key={index}
            >
              <div className="d-flex justify-content-between align-items-center  m-3">
                <div>
                  <h5 className="number">{item.number}</h5>
                  <p className="contentcard">{item.cardName}</p>
                </div>
                <span className="imgcontainer">
                  <img src={item.imgUrl} alt=""/> 
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const TablePayout = () => {
    return (
      <>
        <div className="container my-5 table-responsive tableMain">
          <table className="table align-middle  table-borderless table-bordered1 ">
            <thead>
              <tr>
                {theadData.map((item, index) => {
                  return (
                    <th
                      scope="col"
                      key={index}
                      className={index===1  ? "" : "textCenter"}
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
                      {item.CSVFile}
                      <div>{item.CSVNUMBER}</div>
                    </td>
                    <td className="textCenter">{item.TotalRecord}</td>
                    <td className="textCenter">{item.InsertedRecord}</td>
                    <td className="textCenter">{item.NotInserted}</td>
                    <td className="textCenter">{item.Date}</td>
                    <td className="textCenter">{item.Total}</td>
                    <td className="textCenter">{item.AmountinRecord}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <h4 className="my-5">Batch Payout</h4>
      <div className="container">
        <div className="row justify-content-between ">
          <Card />
        </div>
      </div>
      <TablePayout />
      
    </div>
  );
}

export default BatchPayout;
