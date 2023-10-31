"use-client";
import React from "react";
import SalesBarChart from "../apexCharts/page";
import SalesTable from "../salesTable/page";
const SalesMonth = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center pb-4">
        <h1 className="font-bold text-3xl pb-2">Sales History</h1>
        <span className="text-slate-50">
          Sale completed and Paid for the month
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SalesBarChart />
        <div className="pt-6">
          <SalesTable />
        </div>
      </div>
    </div>
  );
};

export default SalesMonth;
