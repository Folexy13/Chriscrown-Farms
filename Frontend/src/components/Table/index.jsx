import React from "react";
import "./Styles.scss";
import EmptyState from "../EmptyState";

const Table = ({ width, headData, bodyData, type, isEmpty }) => {
  return (
    <>
      <table class="styled-table" style={{ width }}>
        <thead>
          <tr>
            {headData.map((el, i) => {
              return <th key={i}>{el}</th>;
            })}
          </tr>
        </thead>
        {!isEmpty && (
          <tbody>
            {type === "search"
              ? bodyData.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el.stockName}</td>
                      <td>{el.type}</td>
                      <td>{el.size}</td>
                      <td>{el.description.split("x").join(" ")}</td>
                      <td>{el.location}</td>
                      <td>{el.createdAt}</td>
                      <td>{el.quantity}</td>
                      <td>{el.quantity}</td>
                      <td></td>
                    </tr>
                  );
                })
              : bodyData.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el.stockItem}</td>
                      <td>{el.quantity}</td>
                      <td>{el.description}</td>
                      <td>{el.date}</td>
                    </tr>
                  );
                })}
          </tbody>
        )}
      </table>
      {isEmpty && <EmptyState data={"data"} color="#002" />}
    </>
  );
};

Table.defaultProps = {
  width: "100%",
  headData: ["Item", "Category", "Price", "Date Added", "Action"],
  bodyData: [
    {
      stockItem: "Nut",
      quantity: 1,
      description: "Crystal",
      collectorName: "Sophia Crystal",
      date: "7/21/2022",
    },
    {
      stockItem: "Pin",
      quantity: 2,
      description: "Ipsly",
      collectorName: "Mose Ipsly",
      date: "12/19/2022",
    },
    {
      stockItem: "Bolt & Nut",
      quantity: 3,
      description: "Blemings",
      collectorName: "Carol-jean Blemings",
      date: "7/10/2022",
    },
    {
      stockItem: "Nut",
      quantity: 4,
      description: "Lidyard",
      collectorName: "Kelsy Lidyard",
      date: "2/20/2022",
    },
    {
      stockItem: "Spring",
      quantity: 5,
      description: "Mintram",
      collectorName: "Fey Mintram",
      date: "10/6/2022",
    },
    {
      stockItem: "Bolt",
      quantity: 6,
      description: "Pollastrino",
      collectorName: "Kimbra Pollastrino",
      date: "7/12/2022",
    },
    {
      stockItem: "Hammer",
      quantity: 7,
      description: "Mutter",
      collectorName: "Cletis Mutter",
      date: "3/13/2022",
    },
    {
      stockItem: "Spanner",
      quantity: 8,
      description: "Starton",
      collectorName: "Delmor Starton",
      date: "11/7/2022",
    },
    {
      stockItem: "Nut",
      quantity: 9,
      description: "Jewer",
      collectorName: "Lila Jewer",
      date: "12/7/2022",
    },
    {
      stockItem: "Bolt",
      quantity: 10,
      description: "Crut",
      collectorName: "Abbey Crut",
      date: "9/16/2022",
    },
  ],
};
export default Table;