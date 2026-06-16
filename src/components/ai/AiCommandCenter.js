export default function AiCommandCenter() {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/50 p-6 dark:bg-slate-900/70 dark:border-slate-700/40 dark:shadow-black/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-reviewsight-100 flex items-center justify-center text-xl">✨</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Quick AI Actions</h3>
              <p className="text-xs text-gray-500 dark:text-slate-400">One-click automation</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-reviewsight-600 text-white font-medium hover:bg-reviewsight-700 hover:shadow-lg transition-all duration-300">
              Generate Weekly Report <span>→</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Summarize New Reviews <span>→</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Detect Emerging Trends <span>→</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              Draft Customer Replies <span>→</span>
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-sm dark:from-red-950/60 dark:to-orange-950/40 dark:border-red-900 transition-colors duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0 text-xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-red-900 dark:text-red-200">AI Insight Detected</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-2 leading-relaxed">
                Negative reviews mentioning <strong>"shipping delays"</strong> have increased <strong>43%</strong> in the last 24 hours.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-white/70 border border-red-100 dark:bg-slate-900/50 dark:border-red-900/50">
                <p className="text-xs uppercase tracking-wider text-red-500 dark:text-red-400 mb-1">Recommended Action</p>
                <p className="text-sm text-red-800 dark:text-red-200">Investigate fulfillment performance and proactively respond to affected customers.</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 hover:shadow-lg">
                Investigate Issue
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/50 p-6 dark:bg-slate-900/70 dark:border-slate-700/40 dark:shadow-black/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">AI Health Score</h3>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">92%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-3">Overall brand sentiment remains strong despite recent shipping concerns.</p>
        </div>
      </div>
    </aside>
  );
}
