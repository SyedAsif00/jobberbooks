"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { Input, Space } from "antd";
import { useContext, useEffect } from "react";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
export default function Header() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  console.log(status);

  return (
    <header className="sticky top-0 z-999 flex w-full  drop-shadow bg-black">
      <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
        <form className="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <Input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </header>
  );
}
