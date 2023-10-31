"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import { chartSaleData } from "../constants/page";
const columns = [
  {
    title: "Month",
    dataIndex: "Month",
    key: "Month",
    render: (text) => <a>{text}</a>,
    width: 500,
  },
  {
    title: "Sales",
    dataIndex: "Sales",
    key: "Sales",
    width: 500,
  },
];

const data = [
  {
    key: "1",
    Month: "Jan 2023",
    Sales: `$${chartSaleData[0]}`,
  },
  {
    key: "2",
    Month: "Feb 2023",
    Sales: `$${chartSaleData[1]}`,
  },
  {
    key: "3",
    Month: "Mar 2023",
    Sales: `$${chartSaleData[2]}`,
  },
  {
    key: "4",
    Month: "Apr 2023",
    Sales: `$${chartSaleData[3]}`,
  },
  {
    key: "5",
    Month: "May 2023",
    Sales: `$${chartSaleData[4]}`,
  },
  // Add more entries as needed
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
