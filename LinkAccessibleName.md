# Accessibility Fix: Links need a discernible name

## The Issue
In your `components/layout/Header.tsx` file (around line 143), the notifications button is a `<Link>` that wraps a `<Bell />` icon and a red notification dot.

Since this link does not contain any readable text, screen readers cannot announce its purpose. Visually impaired users will just hear that it's a "Link," which leads to the "Links do not have a discernible name" accessibility violation.

## The Solution
You need to provide an accessible name for the link so screen readers know where it goes. You can fix this easily by adding an `aria-label` directly to the `<Link>`.

### The Code Fix
Open `components/layout/Header.tsx` and add `aria-label="View notifications"` to the `<Link>` element:

```tsx
<Link
  href="/notifications"
  aria-label="View notifications" // <-- Add this line
  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
>
  <Bell size={20} />
  <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
</Link>
```

Alternatively, just like with buttons, you can also add visually hidden text inside the link using Tailwind's `sr-only` class:

```tsx
<Link
  href="/notifications"
  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
>
  <Bell size={20} />
  <span className="sr-only">View notifications</span> {/* <-- Or add this line */}
  <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
</Link>
```

Applying either of these will instantly resolve the warning!
