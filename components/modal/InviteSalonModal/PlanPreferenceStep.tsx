import React from "react";
import { ChevronDown, PercentSquare } from "lucide-react";
import CustomCheckbox from "../../customComponent/CustomCheckbox";

interface PlanPreferenceStepProps {
  suggestedPlan: string;
  setSuggestedPlan: (value: string) => void;
  isRelegationExpanded: boolean;
  setIsRelegationExpanded: (value: boolean) => void;
  hasConsent: boolean;
  setHasConsent: (value: boolean) => void;
}

export default function PlanPreferenceStep({
  suggestedPlan,
  setSuggestedPlan,
  isRelegationExpanded,
  setIsRelegationExpanded,
  hasConsent,
  setHasConsent,
}: PlanPreferenceStepProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1.5">
          Suggested Plan
        </label>
        <div className="relative">
          <select
            value={suggestedPlan}
            onChange={(e) => setSuggestedPlan(e.target.value)}
            className="w-full h-11 bg-white border border-slate-200 rounded-xl px-4 text-sm text-slate-500 appearance-none outline-none focus:border-[#635BFF]"
          >
            <option value="No preference">No preference</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      {/* Relegation Info Box */}
      <div className="bg-[#EBFAF0] border border-[#EBFAF0] rounded-[16px] overflow-hidden transition-all duration-300">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsRelegationExpanded(!isRelegationExpanded)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#36C76C] rounded-xl flex items-center justify-center text-white shrink-0">
              <PercentSquare size={20} />
            </div>
            <div>
              <div className="font-semibold text-slate-800">Relegation</div>
              <div className="text-xs text-slate-500">Click to see details</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-right">
            <div>
              <div className="font-bold text-xl text-[#36C76C]">30%</div>
              <div className="text-xs text-slate-500">Not editable</div>
            </div>
            <ChevronDown
              size={20}
              className={`text-slate-600 transition-transform duration-300 ${
                isRelegationExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Expanded Content */}
        {isRelegationExpanded && (
          <div className="p-4 pt-0 space-y-4 bg-white/40">
            <div className="bg-[#FFF8E6] border border-[#FFE194] rounded-xl p-4">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">
                Relegation Conditions
              </h4>
              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                <li>
                  The demotion is perpetual and applies to all salon renewals.
                </li>
                <li>
                  You will continue to receive 30% as long as the salon keeps
                  the membership active.
                </li>
                <li>
                  The relegation ceases in the event of:
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Termination of membership by salon owner</li>
                    <li>
                      Disconnecting your profile from the salon (terminating
                      relationships)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-[#F8F8FF] border border-[#E0E2FF] rounded-xl p-4">
              <h4 className="text-sm font-semibold text-[#635BFF] mb-2">
                How Referrals Work
              </h4>
              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                <li>
                  The salon will receive an email with your personalized
                  invitation link
                </li>
                <li>
                  When you sign up, you will receive 30% of every payment you
                  make
                </li>
                <li>
                  The relegation is perpetual: you will continue to earn forever
                </li>
                <li>
                  You can monitor everything from the Revenue Share section
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Consent Checkbox */}
      <CustomCheckbox
        checked={hasConsent}
        onChange={setHasConsent}
        label="I confirm that I have the salon owner consent to invite them to the platform and I accept the terms of the referral program"
      />
    </div>
  );
}
