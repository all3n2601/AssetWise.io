import React, { useState } from "react";
import * as XLSX from "xlsx";

const FileUploader = () => {
  const [cellData, setCellData] = useState([]);

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
  );
};

export default FileUploader;
