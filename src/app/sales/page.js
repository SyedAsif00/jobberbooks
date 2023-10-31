"use client";
import React from "react";
import { List } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
const data = [
  { label: "Sales this Month", value: "$ 26,708.65", route: "/sales-month" },
  {
    label: "Sales for the Last 12 Months",
    value: "$ 224,115.32",
    route: "/sales-month",
  },
  {
    label: "Customer Acquisition Cost for the Last 12 months",
    value: "$179.18",
    route: "/sales-month",
  },
  {
    label: "Cost Per Lead for the Last 12 Months",
    value: "$ 98.84",
    route: "/sales-month",
  },
  { label: "New Customers This Month", value: "54", route: "/sales-month" },
  {
    label: "Recurring Customers This Month",
    value: "$ 164545,6",
    route: "/sales-month",
  },
  {
    label: "Number of Customer Last 12 months",
    value: "$ 468235",
    route: "/sales-month",
  },
  {
    label: "Number of Leads Last 12 Month",
    value: "$ 773983",
    route: "/sales-month",
  },
];

const Sales = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <Link href={item.route} passHref>
        <List.Item className="hover:bg-gray flex items-center justify-between cursor-pointer">
          <List.Item.Meta
            title={<span className="text-lg p-4">{item.label}</span>}
            description={
              <span className="text-blue-500 text-base p-4">{item.value}</span>
            }
          />
          <RightOutlined className="text-base p-4" />
        </List.Item>
      </Link>
    )}
  />
);

export default Sales;
