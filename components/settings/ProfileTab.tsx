"use client";

import React, { useState } from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import ProfileDetails from "./ProfileDetails";
import CancelButton from "@/components/customComponent/CancelButton";
import SubmitButton from "@/components/customComponent/SubmitButton";

export default function ProfileTab() {
  const [viewMode, setViewMode] = useState<"view" | "editProfile" | "changePassword">("view");

  return (
    <div className="space-y-6">
      {viewMode === "view" && (
        <ProfileDetails onEditProfile={() => setViewMode("editProfile")} />
      )}

      {viewMode === "editProfile" && (
        <EditProfile />
      )}
      <ChangePassword isOpen={viewMode === "changePassword"} onClose={() => setViewMode("view")} />

      {viewMode === "editProfile" && (
        <div className="flex items-center justify-end gap-4 mt-8 max-w-2xl mx-auto">
          <CancelButton onClick={() => setViewMode("view")} />
          <SubmitButton onClick={() => setViewMode("view")}>Save</SubmitButton>
        </div>
      )}
    </div>
  );
}
