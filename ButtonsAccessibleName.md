# Accessibility Fix: Buttons need an accessible name

## The Issue
In your `app/budgeting/receipts/view/page.tsx` file, the back button (the `Link` component wrapping the `ChevronLeft` icon) is failing accessibility checks because it doesn't contain any readable text for screen readers. 

When a button or link only contains an icon (like an SVG), visually impaired users relying on screen readers will just hear "button" or "link" without knowing what it does.

## The Solution
You need to provide an accessible name. There are two standard ways to fix this in React/Next.js:

### Option 1: Using `aria-label` (Recommended & Cleanest)
Add an `aria-label` attribute directly to the `<Link>` element to describe its action.

```tsx
<Link
  href="/budgeting/receipts"
  aria-label="Go back to receipts" // <-- Add this
  className="p-1.5 rounded-lg hover:bg-slate-50 transition-colors text-slate-500 hover:text-slate-700"
>
  <ChevronLeft size={20} />
</Link>
```

### Option 2: Using Screen-Reader Only text (`sr-only`)
Add a hidden `<span>` that is visually hidden but readable by screen readers using Tailwind's `sr-only` utility class.

```tsx
<Link
  href="/budgeting/receipts"
  className="p-1.5 rounded-lg hover:bg-slate-50 transition-colors text-slate-500 hover:text-slate-700"
>
  <ChevronLeft size={20} />
  <span className="sr-only">Go back to receipts</span>
</Link>
```

Both methods will instantly clear the "Buttons do not have an accessible name" error you're seeing in your tooling!
