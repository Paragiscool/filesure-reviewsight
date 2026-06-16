"use client";

import { useState } from "react";
import MetricsSection from "@/components/metrics/MetricsSection";
import ReviewFeed from "@/components/reviews/ReviewFeed";
import AiCommandCenter from "@/components/ai/AiCommandCenter";
import { mockReviews } from "@/data/mockReviews";
import { toast } from "sonner";

export default function DashboardPage() {
  const [platformFilter, setPlatformFilter] = useState("all");

  const filteredReviews = platformFilter === "all"
    ? mockReviews
    : mockReviews.filter(review => review.platform === platformFilter);

  const handleDraftReply = (review) => {
    toast.success(`Drafting AI reply for ${review.customerName}...`);
  };

  const handleApprove = (review) => {
    toast.success(`Review from ${review.customerName} approved!`);
  };

  const handleFlag = (review) => {
    toast.error(`Review from ${review.customerName} flagged for review.`);
  };

  return (
    <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
      <MetricsSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ReviewFeed
          reviews={filteredReviews}
          activeFilter={platformFilter}
          onFilterChange={setPlatformFilter}
          onDraftReply={handleDraftReply}
          onApprove={handleApprove}
          onFlag={handleFlag}
        />
        <AiCommandCenter />
      </div>
    </div>
  );
}
