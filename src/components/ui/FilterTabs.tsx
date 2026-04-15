"use client";
import { useState } from "react";

interface FilterTabsProps {
  tabs: string[];
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export default function FilterTabs({ tabs, defaultTab, onTabChange, className = "" }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className={`flex overflow-x-auto pb-6 mb-8 space-x-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`flex-shrink-0 px-6 py-2.5 rounded-full border text-[13px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
            activeTab === tab
              ? "border-neutral-900 bg-white text-neutral-900 font-semibold shadow-sm"
              : "border-neutral-200 bg-transparent text-neutral-500 font-medium hover:border-neutral-300 hover:text-neutral-700"
          }`}
        >
          {tab}
        </button>
      ))}
      <button className="flex-shrink-0 w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 ml-auto transition-colors focus:outline-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}
