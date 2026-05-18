import Link from 'next/link';

export default function ClassAAPage() {
  const teams = [
    { name: "Elmira", record: "8-2" },
    { name: "Corning", record: "7-3" },
    { name: "Binghamton", record: "5-5" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-red-500 hover:underline mb-6 inline-block font-semibold">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-red-500 mb-2">CLASS AA</h1>
        <p className="text-slate-400 mb-8">Section 4 Football - Large Schools Division</p>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">Current Standings & Teams</h2>
          <div className="divide-y divide-slate-800">
            {teams.map((team, index) => (
              <div key={index} className="py-3 flex justify-between items-center">
                <span className="font-medium text-lg">{team.name}</span>
                <span className="text-slate-400 bg-slate-800 px-3 py-1 rounded-full text-sm">
                  Record: {team.record}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
