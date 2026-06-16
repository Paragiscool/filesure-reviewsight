"use client";

import { useMemo } from "react";

export default function ReviewCard({ review, onDraftReply, onApprove, onFlag }) {
  const platformConfig = useMemo(() => ({
    amazon: {
      border: "bg-orange-500",
      badge: "bg-orange-100 text-orange-700",
      avatar: "bg-orange-100 text-orange-700",
      label: "Amazon"
    },
    shopify: {
      border: "bg-emerald-500",
      badge: "bg-emerald-100 text-emerald-700",
      avatar: "bg-emerald-100 text-emerald-700",
      label: "Shopify"
    }
  }), []);

  const sentimentConfig = {
    "Highly Positive": { tag: "bg-emerald-100 text-emerald-700", actions: ["approve", "summary"] },
    "Mixed Sentiment": { tag: "bg-amber-100 text-amber-700", actions: ["reply", "summary"] },
    "Negative - Urgent": { tag: "bg-red-100 text-red-700", actions: ["flag", "reply"] }
  };

  const platform = platformConfig[review.platform] || platformConfig.amazon;
  const sentiment = sentimentConfig[review.sentiment] || sentimentConfig["Mixed Sentiment"];

  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-black/30">
      <div className="flex">
        <div className={`w-1.5 ${platform.border}`} />
        <div className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${platform.avatar}`}>
              {review.initials}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-slate-100">{review.customerName}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${platform.badge}`}>
                  {platform.label}
                </span>
                <span className="text-sm text-gray-500 dark:text-slate-500">{review.timeAgo}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-amber-400 text-lg">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>{index < review.rating ? "★" : "☆"}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 dark:text-slate-300 leading-relaxed">{review.content}</p>
          <div className="mt-5 pt-5 border-t border-gray-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-fit ${sentiment.tag}`}>
                <span className="w-2 h-2 rounded-full bg-current opacity-70" />
                {review.sentiment}
              </span>
              <div className="flex flex-wrap gap-2">
                {sentiment.actions.includes("approve") && (
                  <button onClick={() => onApprove(review)} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-all">
                    Auto-Approve
                  </button>
                )}
                {sentiment.actions.includes("reply") && (
                  <button onClick={() => onDraftReply(review)} className="px-4 py-2 rounded-xl bg-reviewsight-600 text-white text-sm font-medium hover:bg-reviewsight-700 transition-all">
                    Draft AI Reply
                  </button>
                )}
                {sentiment.actions.includes("flag") && (
                  <button onClick={() => onFlag(review)} className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all">
                    Flag
                  </button>
                )}
                <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-all">
                  Generate Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
