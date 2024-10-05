import React, { useState } from "react";

export default function StatisticCard() {

    const [cardActive, setCardActive] = useState(false)

  return (
    <div className="bg-white rounded-md px-4 py-6">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <div className="min-w-[5px] min-h-full bg-orange-500 rounded-md"></div>
          <p className="ml-3">Total Pemuda</p>
        </div>

        {/* arrow down svg */}
        <button onClick={() => setCardActive(state => !state)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 duration-500 ${cardActive ? 'rotate-180 duration-500' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {/* arrow down svg */}
      </div>

      {cardActive && (
        <div className="mt-8">
            <p className="text-xs font-medium text-gray-500">Jumlah Pemuda</p>
            <p className="text-sm font-semibold mt-2 text-gray-500">200 Orang</p>
        </div>
      )
        
      }
    </div>
  );
}
