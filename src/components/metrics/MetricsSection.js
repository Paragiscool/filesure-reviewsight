export default function MetricsSection() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Top-Level Metrics
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mt-1">
            Real-time review intelligence across all tracked products
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Total Reviews */}
        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:bg-slate-900/70 dark:border-slate-700/40 dark:shadow-black/30 p-7 transition-all duration-300">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-reviewsight-200/30 blur-3xl"></div>
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-reviewsight-100 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-reviewsight-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6M9 13h6M9 9h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
              </svg>
            </div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-slate-400">Total Reviews</p>
            <h3 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">12,482</h3>
            <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">Aggregated across all marketplaces</p>
          </div>
        </div>

        {/* Average Rating */}
        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:bg-slate-900/70 dark:border-slate-700/40 dark:shadow-black/30 p-7 transition-all duration-300">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-200/30 blur-3xl"></div>
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.08 3.322a1 1 0 00.95.69h3.492c.969 0 1.371 1.24.588 1.81l-2.826 2.054a1 1 0 00-.364 1.118l1.08 3.322c.3.921-.755 1.688-1.538 1.118L10 14.347l-2.813 2.044c-.783.57-1.838-.197-1.539-1.118l1.08-3.322a1 1 0 00-.364-1.118L3.538 8.749c-.783-.57-.38-1.81.588-1.81h3.492a1 1 0 00.95-.69l1.08-3.322z"/>
              </svg>
            </div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-slate-400">Average Rating</p>
            <div className="flex items-end gap-2 mt-3">
              <h3 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">4.8</h3>
              <span className="text-lg text-gray-500 mb-1">/ 5.0</span>
            </div>
            <p className="mt-3 text-sm text-amber-600 font-medium">★★★★★ Excellent customer feedback</p>
          </div>
        </div>

        {/* AI Sentiment */}
        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:bg-slate-900/70 dark:border-slate-700/40 dark:shadow-black/30 p-7 transition-all duration-300">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-200/30 blur-3xl"></div>
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-slate-400">AI Sentiment</p>
            <h3 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">85%</h3>
            <p className="mt-3 text-sm font-medium text-emerald-600">Positive sentiment detected</p>
          </div>
        </div>
      </div>
    </section>
  );
}
