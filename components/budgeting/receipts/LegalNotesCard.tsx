import React from "react";

export default function LegalNotesCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 uppercase tracking-wider">
        Legal Notes
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-500 text-xs font-medium">
        <li>Invoice issued pursuant to art. 21 of Presidential Decree 26 October 1972, n. 633 and subsequent amendments.</li>
        <li>VAT paid by the purchaser pursuant to art. 17, paragraph 6, of Presidential Decree 26 October 1972, n. 633.</li>
        <li>Digitally signed electronic document pursuant to Legislative Decree 82/2005.</li>
        <li>Replacement storage of documents pursuant to the Ministerial Decree of 17 June 2014.</li>
        <li>Competent court: Milan. Applicable law: Italian.</li>
        <li>Company subject to the management and coordination of [Holding Company].</li>
      </ul>
    </div>
  );
}
