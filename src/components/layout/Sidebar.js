export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col bg-surface text-white dark:bg-slate-950 dark:border-r dark:border-slate-800 transition-colors duration-300 sticky top-0 h-screen overflow-y-auto">
      <div className="px-6 py-6 border-b border-gray-700 dark:border-slate-800">
        <h1 className="text-2xl font-bold">
          Review<span className="text-reviewsight-500">Sight</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Review Intelligence Platform</p>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center px-4 py-3 rounded-lg bg-reviewsight-600 text-white font-medium shadow-lg dark:bg-reviewsight-500 transition-all">
              Dashboard
            </a>
          </li>
          {["Products", "Reviews", "Analytics", "Competitors", "Settings"].map((item) => (
            <li key={item}>
              <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-surface-light hover:text-white dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700 dark:border-slate-800">
        <div className="rounded-lg bg-surface-light dark:bg-slate-900 p-4">
          <p className="text-sm font-medium">ReviewSight Pro</p>
          <p className="text-xs text-gray-400 mt-1">AI-powered review insights</p>
        </div>
      </div>
    </aside>
  );
}
