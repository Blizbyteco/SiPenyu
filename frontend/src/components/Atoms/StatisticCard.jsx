import React, { useState } from "react";

export default function StatisticCard() {

    const [cardActive, setCardActive] = useState(false)

  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="w-full bg-orange-400 h-[10px]"></div>
      <div className="px-4 py-6">
        <h2 className="font-medium">Total Pemuda</h2>
      </div>
    </div>
  );
}
