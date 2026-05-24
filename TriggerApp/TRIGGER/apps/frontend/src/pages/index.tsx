export default function Home() {
  return (
    <div className="min-h-screen bg-trigger-navy">
      <header className="bg-trigger-navy-light border-b border-trigger-grey py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-trigger-white">TRIGGER</h1>
          <nav className="flex gap-6">
            <a href="#" className="text-trigger-grey-text hover:text-trigger-white transition">Dashboard</a>
            <a href="#" className="text-trigger-grey-text hover:text-trigger-white transition">Analytics</a>
            <a href="#" className="text-trigger-grey-text hover:text-trigger-white transition">Settings</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Active Campaigns</h3>
            <p className="text-3xl font-bold text-trigger-blue">0</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Total Growth</h3>
            <p className="text-3xl font-bold text-trigger-green">0%</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
            <p className="text-3xl font-bold text-trigger-blue">0%</p>
          </div>
        </div>

        <div className="mt-12">
          <button className="btn-primary">Start Campaign</button>
        </div>
      </main>
    </div>
  );
}
