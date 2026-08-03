import React from "react";

const DEMO_SUBSCRIPTIONS = [
  { label: "Monthly", price: "€ 50", color: "text-[#00B4B4]" },
  { label: "Annual", price: "€ 600", color: "text-[#635BFF]" },
  { label: "Lifetime", price: "€ 600", color: "text-[#36C76C]" },
];

export default function SecondarySubscriptionInfo() {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-800 mb-4">
        Subscription
      </h4>
      <div className="grid grid-cols-3 gap-4">
        {DEMO_SUBSCRIPTIONS.map((sub, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center"
          >
            <p className="text-xs text-slate-500 font-medium mb-2">
              {sub.label}
            </p>
            <p className={`text-2xl font-semibold ${sub.color}`}>
              {sub.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
