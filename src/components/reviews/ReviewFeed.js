"use client";

import ReviewCard from "./ReviewCard";

export default function ReviewFeed({ reviews, activeFilter, onFilterChange, onDraftReply, onApprove, onFlag }) {
  return (
    <section className="lg:col-span-2">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Live Review Feed</h2>
            <p className="text-gray-500 dark:text-slate-400 mt-1">Latest customer feedback across marketplaces</p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => onFilterChange("all")} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === "all" ? "bg-reviewsight-600 text-white" : "bg-white border border-gray-200 text-gray-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"}`}>
            All Reviews
          </button>
          <button onClick={() => onFilterChange("amazon")} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === "amazon" ? "bg-orange-500 text-white" : "bg-white border border-orange-200 text-orange-700 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800"}`}>
            Amazon
          </button>
          <button onClick={() => onFilterChange("shopify")} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === "shopify" ? "bg-emerald-500 text-white" : "bg-white border border-emerald-200 text-emerald-700 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800"}`}>
            Shopify
          </button>
        </div>
      </div>
      <div className="space-y-5">
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewCard key={review.id} review={review} onDraftReply={onDraftReply} onApprove={onApprove} onFlag={onFlag} />
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white/50 p-12 text-center dark:bg-slate-900/50 dark:border-slate-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">No reviews found</h3>
            <p className="text-gray-500 dark:text-slate-400 mt-2">Try selecting another marketplace filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
