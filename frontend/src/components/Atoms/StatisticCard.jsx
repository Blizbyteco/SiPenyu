export default function StatisticCard({title, icon, value}) {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="w-full bg-orange-400 h-[10px]"></div>
      <div className="px-4 py-6">
        <h2 className="font-semibold text-lg">{title}</h2>

        <div className="flex items-center mt-4 gap-x-4">
          {icon}    
            <p className="text-gray-500">{value}</p>
        </div>
      </div>
    </div>
  );
}
