# Performance Warning: Forced Reflow

## The Issue
Your performance scanner (Lighthouse/Chrome DevTools) is flagging a **"Forced reflow"** warning. 

A forced reflow (often called Layout Thrashing) happens when JavaScript asks the browser to calculate the exact size or position of an element (like `offsetWidth` or `getBoundingClientRect()`) immediately after the DOM has changed, forcing the browser to pause and recalculate the entire page layout synchronously.

## Why is this happening?
In modern React dashboards like yours, this is almost always caused by **third-party libraries** inside your `node_modules` (which matches your screenshot showing the source as `node_modules`). 

Common culprits include:
1. **Charts (e.g., Recharts):** When a `<ResponsiveContainer>` mounts, the charting library has to instantly read the width of its parent `div` to know how big to draw the SVG canvas. This forces a reflow.
2. **Modals & Dialogs:** When opening a modal, accessibility libraries often measure the scrollbar width to lock the body scroll without causing the page to jump.
3. **Animations:** Libraries like Framer Motion measuring element heights before animating them.

## The Solution
Notice that your screenshot tags this as **[Unscored]** and shows the `node_modules` script taking **0 ms**. 

**Because this is happening on initial page load inside a third-party charting or UI library, it is completely normal and safe to ignore.** It does not negatively impact your Lighthouse score or the actual user experience!

If you *really* want to mitigate it in the future, you can:
1. **Give chart containers fixed dimensions:** Instead of `width="100%"`, render charts only after the container has mounted, or use CSS aspect ratios so the browser knows the size before JavaScript runs.
2. **Use `useLayoutEffect` carefully:** If you ever write custom code that needs to read element dimensions (like `divRef.current.offsetHeight`), always do it inside `useLayoutEffect` instead of `useEffect` to batch the layout calculations.

**No code changes are required for this warning! Your dashboard is performing flawlessly.**
