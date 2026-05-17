import Link from "next/link";

export default function HomePage() {
  // Section 4 Classes layout logic template
  const classesList = [
    { name: "Class AA", color: "border-red-500/30 hover:border-red-500", count: "Large Schools" },
    { name: "Class A", color: "border-blue-500/30 hover:border-blue-500", count: "Medium-Large" },
    { name: "Class B", color: "border-green-500/30 hover:border-green-500", count: "Medium Schools" },
    { name: "Class C", color: "border-orange-500/30 hover:border-orange-500", count: "Small-Medium" },
    { name: "Class D", color: "border-purple-500/30 hover:border-purple-500", count: "Small Schools" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">
          Section 4 <span className="text-red-500">Football</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
          The ultimate historical portal. Exploring 20+ years of scores, team standings, and historical win-loss records.
        </p>
      </div>

      {/* Main Grid for Classification Divisions */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesList.map((item, index) => (
          <div 
            key={index} 
            className={`bg-slate-950 p-6 rounded-xl border ${item.color} transition-all duration-300 shadow-xl flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">{item.name}</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">{item.count}</p>
              <div className="w-12 h-1 bg-red-600 my-4 rounded-full"></div>
              <p className="text-slate-400 text-sm">
                Click to view school rosters, historical season statistics, schedules, and team archive records.
              </p>
            </div>
            
            {/* Interactive placeholder navigation */}
            <button className="mt-6 w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border border-slate-800 hover:border-red-600 transition text-sm uppercase tracking-wider">
              View Teams
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}