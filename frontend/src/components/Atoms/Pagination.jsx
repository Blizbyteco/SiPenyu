import React, { useEffect, useState } from "react";
import { extractDataColumnName } from "../../utils/data"
import DoubleChevronLeft from "../SVG/DoubleChevronLeft"
import DoubleChevronRight from "../SVG/DoubleChevronRight"
import MacTerminal from "../MacTerminal";

export default function Pagination() {

    const [selectedTableCategory, setSelectedTableCategory] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("")


  const [tableData, setTableData] = useState({
    columns: [],
    value: [{}]
  })


  const handlePage = (id) => {

  }

  useEffect(() => {
    setTableData(extractDataColumnName([
        {
          "kecamatan": "Proppo",
          "Kategori": "Mahasiswa",
          "Sub kategori": "Pelajar Sekolah",
          "Tahun": "2024"
        },
        {
          "kecamatan": "Proppo",
          "Kategori": "Mahasiswa",
          "Sub kategori": "Pelajar Sekolah",
          "Tahun": "2024"
        },
        {
          "kecamatan": "Proppo",
          "Kategori": "Mahasiswa",
          "Sub kategori": "Pelajar Sekolah",
          "Tahun": "2024"
        },
      ]))
  }, [])

  return (
    <MacTerminal>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <input
          type="text"
          className="border-[1.5px] border-gray-300 rounded-md px-4 py-2 text-gray-500 text-sm col-span-2"
          placeholder="Filter data bedasarkan kategori yang dipilih"
          onChange={setSearchValue}
        />
        <select
          value={selectedTableCategory}
          onChange={(e) => setSelectedTableCategory(e.target.value)}
          className="py-2 rounded-md px-4 text-sm text-gray-600"
          defaultValue=""
        >
          <option value="youth">Kepemudaan</option>
        </select>
        <select
          value={selectedTableCategory}
          onChange={(e) => setSelectedTableCategory(e.target.value)}
          className="py-2 rounded-md px-4 text-sm text-gray-600"
        >
          <option value="">Filter bedasarkan nama</option>
          {tableData.columns.map((column, index) => (
            <option key={index} value={column}>
              {column}
            </option>
          ))}
        </select>
        <button className="bg-secondary text-white rounded-md px-6 py-2 flex-1 col-span-2">
          Cari
        </button>
      </div>

      <div className="overflow-x-auto py-6">
        <table className="table-auto w-full mt-6 text-sm border border-gray-300">
          <thead>
            <tr>
              <th className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold">
                No
              </th>
              {tableData.columns.map((column, index) => (
                <th
                  key={index}
                  className="text-center border-r border-l  border-gray-400 bg-gray-300 py-2 px-4 font-semibold"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.value.map((rowData, index) => (
              <tr key={index}>
                <td className="border-l border-r border-gray-300 text-center py-2 px-4">
                  {index + 1}
                </td>
                {tableData.columns.map((name, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-l border-r border-gray-300 text-center py-2 px-4"
                  >
                    {rowData[name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full flex items-center gap-x-4 mt-8">
            <button className="text-xs px-3 py-2 bg-gray-200 border border-gray-300">
                <DoubleChevronLeft />
            </button>
          {Array.from({ length: 7 }, (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`text-xs px-3 py-2 bg-gray-200 border border-gray-300 ${currentPage == i + 1 ? 'bg-secondary text-white' : ''}`}>
              {i + 1}
            </button>
          ))}
          <button className="text-xs px-3 py-2 bg-gray-200 border border-gray-300">
            <DoubleChevronRight />
          </button>
        </div>
      </div>
    </MacTerminal>
  );
}
