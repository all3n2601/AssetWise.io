import React, { useState } from "react";
import * as XLSX from "xlsx"
import Sidebar, { SidebarItem } from "./components/SideBar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FileUploader = () => {
  const [cellData, setCellData] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleSelectedFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: 0,
      });

      const filteredData = sheetData.map((row) =>
        row.filter((cell, index) => index !== 2 && index !== 3 && index !== 6)
      );

      setCellData(filteredData);
    };

    reader.readAsArrayBuffer(file);
  };

  const CellDataList = ({ cellData }) => {
    // return (
    //   <ul className="divide-y divide-gray-200">
    //     {cellData.map((row, rowIndex) => (
    //       <li key={rowIndex} className="py-2">
    //         <ul className="flex divide-x divide-gray-200">
    //           {row.map((cell, cellIndex) => (
    //             <li
    //               key={cellIndex}
    //               className={`px-4 py-2 ${
    //                 cellIndex >= row.length - 2 ? "ml-10" : "mr-auto"
    //               }`}
    //             >
    //               {cell}
    //             </li>
    //           ))}
    //         </ul>
    //       </li>
    //     ))}
    //   </ul>
    // );
    return (
      <ul className="divide-y divide-black-100">
        {cellData.map((row, rowIndex) => (
          <li key={rowIndex} className="py-4 px-4 rounded-lg border mb-6">
            <ul className="flex ">
              {row.map((cell, cellIndex) => (
                <li
                  key={cellIndex}
                  className={`px-4 py-2 ${
                    cellIndex >= row.length - 2 ? "ml-10" : "mr-auto"
                  }`}
                >
                  {cell}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="fixed h-[100%] w-[100%] flex overflow-hidden bg-white">
      <Sidebar>
        <SidebarItem
          icon={<Home size={20} />}
          text="Home"
          alert
          onClick={() => {
            navigate("/");
          }}
        />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          onClick={() => {
            navigate("/user-dashboard");
          }}
        />
        <SidebarItem
          icon={<StickyNote size={20} />}
          text="Investments"
          alert
          onClick={() => {
            navigate("/user-investments");
          }}
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          text="Assets"
          onClick={() => {
            navigate("/user-assets");
          }}
        />
        <SidebarItem
          icon={<Layers size={20} />}
          text="Tools"
          onClick={() => {
            navigate("/user-tools");
          }}
        />
        <SidebarItem
          icon={<Flag size={20} />}
          text="Data Upload"
          active
          onClick={() => {
            navigate("/user-data");
          }}
        />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help Center" />
      </Sidebar>
      <div div className="p-4">
        <input
          type="file"
          accept=".xlsx"
          onChange={handleSelectedFile}
          style={{ display: "none" }}
          id="fileInput"
        />
        <button onClick={handleFileUpload}>Select File</button>

        <div className="mt-4">
          <CellDataList cellData={cellData} />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
