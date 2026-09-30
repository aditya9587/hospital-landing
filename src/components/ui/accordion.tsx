"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 overflow-hidden",
        isOpen && "border-teal-300 ring-2 ring-teal-500/10 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 transition-colors hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-inset"
      >
        <span className="text-base sm:text-lg leading-snug">{question}</span>
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200",
            isOpen && "rotate-180 bg-teal-100 text-teal-800"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-content-${id}`}
          role="region"
          aria-labelledby={`faq-btn-${id}`}
          className="border-t border-slate-100 px-5 pt-3 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in-50 duration-200"
        >
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
}: {
  items: Array<{ id: string; question: string; answer: string | React.ReactNode }>;
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
}) {
  const [openIds, setOpenIds] = React.useState<string[]>(
    defaultOpenIndex >= 0 && items[defaultOpenIndex] ? [items[defaultOpenIndex].id] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
