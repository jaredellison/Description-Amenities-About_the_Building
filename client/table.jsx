import React from 'react';

var Table = () => {
  return (
    <table border="1">
      <tbody>
        <tr id="tableRow0">
          <td className="tabletext" id="table0x0">
            <span className="table-title">DAYS ON MARKET</span>
            <br />
            <span>{parseInt(Math.random() * 500)} Days</span>
          </td>
          <td className="tabletext" id="table1x0">
            <span className="table-title">LAST PRICE CHANGE</span>
            <br />
            <span>{parseInt(Math.random() * 500)} Days Ago</span>
          </td>
          <td className="tabletext" id="table2x0">
            <span className="table-title">ESTIMATED PAYMENT</span>
            <br />
            <span>
              <a href="">${parseInt(Math.random() * 100000)}</a>
            </span>
          </td>
        </tr>
        <tr id="tableRow1">
          <td className="tabletext" id="table0x1">
            <span className="table-title">MONTHLY TAXES</span>
            <br />
            <span>${parseInt(Math.random() * 7000)}</span>
          </td>
          <td className="tabletext" id="table1x1">
            <span className="table-title">MONTHLY MAINTENANCE</span>
            <br />
            <span>${parseInt(Math.random() * 4000)}</span>
          </td>
          <td className="tabletext" id="table2x1">
            <span className="table-title">TAX ABATEMENT</span>
            <br />
            <span>No data available</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
