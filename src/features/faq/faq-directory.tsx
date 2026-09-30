"use client";

import React, { useState, useMemo } from "react";
import { Search, HelpCircle, RotateCcw } from "lucide-react";
import { FaqItem } from "@/types";
import { AccordionItem } from "@/components/ui/accordion";
import { FaqPageJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";

export function FaqDirectory({ faqs }: { faqs: FaqItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id || ""]);

  const categories = [
    "All",
    "Appointments",
    "Insurance & Billing",
    "Emergency",
    "Visitor Policies",
    "Medical Records",
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      if (selectedCategory !== "All" && faq.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        return (
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q) ||
          faq.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [faqs, selectedCategory, searchQuery]);

  const toggle = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-8">
      {/* Search Toolbar */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm space-y-4">
        <div className="relative max-w-2xl mx-auto">
          <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. cashless, emergency, visiting hours, parking)..."
            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:bg-white focus:ring-2 focus:ring-teal-600/20 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Accordion */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-2">
          <p>
            Showing <strong>{filteredFaqs.length}</strong> questions
          </p>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-teal-700 font-bold hover:underline flex items-center gap-1"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset filter</span>
            </button>
          )}
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <HelpCircle className="h-10 w-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No matching questions found</h3>
            <p className="text-xs text-slate-500">
              Try a different keyword or contact our 24x7 helpdesk at 1800-102-CARE.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIds.includes(faq.id)}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        )}
      </div>

      <FaqPageJsonLd faqs={filteredFaqs} />
    </div>
  );
}
