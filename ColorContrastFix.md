# Accessibility Fix: Color Contrast

## The Issue
Your accessibility checker is flagging multiple elements for having a "Low contrast ratio". This means the text color and background color are too similar, making it difficult for visually impaired users (or users with low-quality screens) to read the text.

Here are the specific elements failing in your screenshots:
1. **`UserProfile.tsx`**: The "Senior Accountant" text is using `text-slate-400` on a white background.
2. **`PageHeader.tsx`** (or wherever the Dashboard header is): The subtitle is using `text-slate-400`.
3. **`RecentActivity.tsx`**: The dates (e.g., "Oct 28, 10:01 AM") are using `text-slate-400`.
4. **`RecentActivity.tsx`**: The "All" filter button uses `text-brand` on a `bg-brand/5` background, which doesn't meet the 4.5:1 ratio requirement.
5. **`RecentActivity.tsx`**: The "High" (`bg-[#ff4b81]`) and "Low" (`bg-[#20c997]`) badges use white text (`text-white`). These vibrant colors look great, but white text on top of them fails strict contrast guidelines.

## The Solution
To fix these, we just need to slightly darken the text colors or tweak the background colors to ensure a minimum contrast ratio of 4.5:1.

### 1. Fix the `text-slate-400` elements
Everywhere you have small grey text causing an error (User Profile, Header Subtitle, Recent Activity Dates), change `text-slate-400` to `text-slate-500`. 
```tsx
// Before
<p className="text-xs text-slate-400">...</p>

// After
<p className="text-xs text-slate-500">...</p>
```
*Note: `slate-500` provides just enough darkness to pass the accessibility threshold while still looking like secondary text!*

### 2. Fix the "High" and "Low" Priority Badges
In `RecentActivity.tsx`, change the text color of these specific vibrant badges from white to a dark grey/black, OR darken the background colors. 
The easiest fix while keeping the vibrant colors is changing `text-white` to a very dark text color like `text-slate-900` or `text-black`, or using a much darker background shade for the badge:
```tsx
  const priorityStyles = {
    // Before: High: "bg-[#ff4b81] text-white", Low: "bg-[#20c997] text-white"
    // After: (Darkening the backgrounds slightly to allow white text to pass)
    High: "bg-[#e6366b] text-white", // slightly darker pink
    Medium: "bg-[#d9a407] text-white", // slightly darker yellow
    Low: "bg-[#169c75] text-white", // slightly darker teal
  };
```

### 3. Fix the "All" Filter Button
In `RecentActivity.tsx`, if `text-brand` fails on `bg-brand/5`, you can darken the text by combining it with a darker slate or explicitly defining a darker brand hex:
```tsx
// Before
isActive ? "border-brand text-brand bg-brand/5" : ...

// After (Using a slightly darker text color or applying a dark filter)
isActive ? "border-brand text-brand brightness-75 bg-brand/5" : ...
// OR simply map to a darker tailwind color if brand is a hex variable
```

Applying these slight color adjustments will instantly turn all those accessibility errors green!
