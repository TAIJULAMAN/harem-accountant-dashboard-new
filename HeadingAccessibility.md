# Accessibility Fix: Heading Order

## The Issue
In your `components/dashboard/kpiCards/KPICards.tsx` file (around line 82), the numeric value (like "12") is wrapped in an `<h3>` tag. 

```tsx
<h3 className="text-2xl font-bold tracking-tight text-slate-800 leading-none">
  {stat.value}
</h3>
```

This triggers the **"Heading elements are not in a sequentially-descending order"** error for two reasons:
1. **Skipped Levels:** HTML heading tags (`<h1>` to `<h6>`) must form a logical outline. If the main page title is an `<h1>`, the next heading must be an `<h2>`, not an `<h3>`.
2. **Semantic Misuse:** Headings should describe the *content that follows them*. A number like "12" is data, not a section title. The actual title of the card ("Salaries Pending Approval") is currently wrapped in a `<span>` on line 75.

## The Solution
To fix this, we should change the `<h3>` tag to a simple paragraph `<p>` or `<div>` tag. It will look exactly the same because the Tailwind classes handle the styling, but it will no longer confuse screen readers looking for document structure!

### The Code Fix
Open `components/dashboard/kpiCards/KPICards.tsx` and change the `<h3>` to a `<p>` tag:

```tsx
<p className="text-2xl font-bold tracking-tight text-slate-800 leading-none">
  {stat.value}
</p>
```

(Optional) For perfect semantics, you could also change the `<span>` wrapping `{stat.title}` on line 75 into an `<h2>` or `<h3>`, since that is the actual title of the card!

```tsx
<h2 className="text-lg font-semibold text-slate-700 tracking-tight leading-snug">
  {stat.title}
</h2>
```

Applying this simple tag change will instantly clear the warning!
