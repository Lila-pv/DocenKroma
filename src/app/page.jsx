export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-50 text-slate-800">
      <h1 className="text-4xl font-bold tracking-tight">DocenKroma</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-xl text-center">
        Modular web workspace for pedagogical planning, competency rubrics, and student trajectory monitoring.
      </p>
      <div className="mt-8 flex gap-4">
        <a 
          href="/dashboard" 
          className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Open Educator Dashboard
        </a>
      </div>
    </main>
  );
}
