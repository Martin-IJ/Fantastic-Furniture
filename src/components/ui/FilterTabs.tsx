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
    onTabChange?.(tab);
  };

  return (
    <div className={`flex overflow-x-auto pb-6 mb-8 space-x-2.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          id={`filter-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => handleTabClick(tab)}
          className={`flex-shrink-0 px-6 py-2.5 rounded-full border text-[13px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 active:scale-95 ${
            activeTab === tab
              ? "border-neutral-900 bg-neutral-900 text-white font-semibold shadow-md shadow-neutral-900/10"
              : "border-neutral-200 bg-white text-neutral-500 font-medium hover:border-neutral-400 hover:text-neutral-800 hover:shadow-sm"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
