import React from "react";
import TemplateCard from "./TemplateCard";

export default function ImportTemplatesAndFile() {
  return (
    <div className="space-y-8 mb-8">
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">
          Templates
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-2">
          <TemplateCard
            title="CSV Template"
            sizeText="CSV • 100 KB"
            onView={() => alert("Viewing template...")}
            onDownload={() => alert("Downloading template...")}
          />
          <TemplateCard
            title="Filled CSV Example"
            sizeText="CSV • 100 KB"
            onView={() => alert("Viewing example...")}
            onDownload={() => alert("Downloading example...")}
          />
        </div>
      </div>
    </div>
  );
}
