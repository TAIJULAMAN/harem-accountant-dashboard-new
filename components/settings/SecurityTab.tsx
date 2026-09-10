"use client";

import { useState } from "react";
import SecuritySettingsList from "./SecuritySettingsList";
import SecurityDevicesList from "./SecurityDevicesList";
import SetupRecoveryEmail from "./SetupRecoveryEmail";
import EditRecoveryPhone from "./EditRecoveryPhone";
import ChangePassword from "./ChangePassword";
import SignOutAllDevicesModal from "./SignOutAllDevicesModal";
import SignOutDeviceModal from "./SignOutDeviceModal";

export default function SecurityTab() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [activeModal, setActiveModal] = useState<"password" | "email" | "phone" | "signout" | "signout_device" | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <SecuritySettingsList
          twoFactorEnabled={twoFactorEnabled}
          onToggle2FA={() => setTwoFactorEnabled(!twoFactorEnabled)}
          onTriggerModal={setActiveModal}
        />
        <SecurityDevicesList onTriggerModal={setActiveModal} />
      </div>
      <ChangePassword isOpen={activeModal === "password"} onClose={closeModal} />
      <SetupRecoveryEmail isOpen={activeModal === "email"} onClose={closeModal} />
      <EditRecoveryPhone isOpen={activeModal === "phone"} onClose={closeModal} />
      <SignOutAllDevicesModal isOpen={activeModal === "signout"} onClose={closeModal} />
      <SignOutDeviceModal isOpen={activeModal === "signout_device"} onClose={closeModal} />
    </div>
  );
}
