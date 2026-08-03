import React from "react";
import CustomFileUpload from "../../customComponent/CustomFileUpload";
import UploadedFilesList from "./UploadedFilesList";
import { useMockUpload } from "./useMockUpload";
import ExtractingOverlay from "./ExtractingOverlay";
import SalonSelectionWarning from "./SalonSelectionWarning";
import SizingInfoBadges from "./SizingInfoBadges";

interface SalaryUploadStep1Props {
  selectedSalon: string;
  setSelectedSalon: (salon: string) => void;
  isExtracting: boolean;
  onExtract: () => void;
}

export default function SalaryUploadStep1({
  selectedSalon,
  setSelectedSalon,
  isExtracting,
  onExtract,
}: SalaryUploadStep1Props) {
  const { files, startMockUpload, removeFile, formatFileSize } =
    useMockUpload(onExtract);

  const isSalonActive = selectedSalon !== "All Salons";

  return (
    <div className="relative rounded-xl border border-slate-100 bg-white p-6 shadow-sm min-h-[350px]">
      {isExtracting && <ExtractingOverlay />}
      {!isSalonActive ? (
        <SalonSelectionWarning setSelectedSalon={setSelectedSalon} />
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col items-center py-6 px-4 space-y-6">
            <div className="text-center max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight">
                Drop PDF
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                You can upload multiple employees in one PDF file
              </p>
            </div>
            <div className="w-full max-w-3xl">
              <CustomFileUpload
                label=""
                accept=".pdf"
                onFileSelect={(file) => {
                  if (file.type === "application/pdf") {
                    startMockUpload(file.name, file.size);
                  }
                }}
              />
            </div>
            <SizingInfoBadges />
          </div>
          <UploadedFilesList
            files={files}
            onRemoveFile={removeFile}
            formatFileSize={formatFileSize}
          />
        </div>
      )}
    </div>
  );
}
