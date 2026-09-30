import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbCrumb[] }) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <div className="w-full bg-slate-50/80 border-b border-slate-200/60 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs sm:text-sm text-slate-500">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-teal-700 transition-colors"
            title="Home"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.url}>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-md"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-teal-700 transition-colors truncate max-w-[150px] sm:max-w-xs"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      <BreadcrumbJsonLd items={allItems} />
    </div>
  );
}
