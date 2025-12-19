"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Format a number to display:
 *  - >= 1000 -> "1.5K"
 *  - else -> integer
 * Optionally append a plus sign if `showPlus` is true.
 */
function formatNumber(value, showPlus = false) {
  if (value >= 1000) {
    const v = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1);
    return `${v}K${showPlus ? "+" : ""}`;
  }
  return `${Math.round(value)}${showPlus ? "+" : ""}`;
}

/**
 * Animate numeric count using requestAnimationFrame
 * - elRef: ref to DOM element or setter function
 * - start: 0
 * - end: target numeric value (not formatted)
 * - duration: ms
 * - onFrame: callback with current numeric value (so we can render)
 */
function animateCount(start, end, duration, onFrame) {
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    // easeOutCubic for a nice effect
    const eased = 1 - Math.pow(1 - t, 3);
    const current = start + (end - start) * eased;
    onFrame(current);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      onFrame(end);
    }
  }
  requestAnimationFrame(step);
}

export default function Stats({
  // optionally pass your items; default values below
  items = [
    { id: "exp", value: 2, label: "Years of Experience", showPlus: false },
    { id: "projects", value: 10, label: "Project Completed", showPlus: true },
    { id: "clients", value: 4, label: "Happy Clients", showPlus: false },
    { id: "tech", value: 12, label: "Technologies Mastered", showPlus: false },
  ],
  // whether animation should replay on every intersection
  replay = false,
}) {
  const ref = useRef(null);
  // store numeric current values per item id
  const [curr, setCurr] = useState(() =>
    items.reduce((acc, it) => {
      acc[it.id] = 0;
      return acc;
    }, {})
  );
  const playedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!playedRef.current || replay)) {
            // trigger animation for each item
            items.forEach((it) => {
              // simple rule for duration:
              // - big numbers animate faster (shorter duration)
              // - small numbers animate moderately
              let duration = 1200;
              if (it.value >= 1000) duration = 700;
              else if (it.value >= 100) duration = 900;
              else if (it.value <= 5) duration = 1100;
              // call animateCount
              animateCount(0, it.value, duration, (val) => {
                setCurr((s) => ({ ...s, [it.id]: val }));
              });
            });
            playedRef.current = true;
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, replay]);

return (
  <section ref={ref} className="w-full max-w-6xl mx-auto mt-12">
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-x-8 md:grid-cols-4">
      {items.map((it) => {
        const numeric = curr[it.id] ?? 0;
        const formatted = formatNumber(Math.round(numeric), it.showPlus);

        return (
          <div
            key={it.id}
            className="flex flex-col items-center text-center"
          >
            {/* number */}
            <div className="text-4xl sm:text-5xl font-extrabold text-white leading-none">
              {formatted}
            </div>

            {/* label */}
            <div className="mt-2 text-sm sm:text-base text-[#d4d4ff] opacity-80 max-w-[120px]">
              {it.label}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

}
