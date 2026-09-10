export interface UserProfile {
  name: string;
  store: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl: string;
}

export interface ProfileDetailsProps {
  onEditProfile: () => void;
  profile?: UserProfile;
}

export type SettingsModalType = "password" | "email" | "phone" | "signout" | "signout_device";

export interface SecuritySettingsListProps {
  twoFactorEnabled: boolean;
  onToggle2FA: () => void;
  onTriggerModal: (modalType: SettingsModalType) => void;
}

export interface SecurityDevicesListProps {
  onTriggerModal: (modalType: SettingsModalType) => void;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SocialConnections {
  facebook: boolean;
  instagram: boolean;
  x: boolean;
  tiktok: boolean;
}

export interface SocialConnectModalProps {
  isOpen: boolean;
  platform: string;
  action: "connect" | "disconnect" | null;
  onClose: () => void;
  onConfirm: () => void;
}

export interface DeviceSession {
  id: string;
  type: "smartphone" | "laptop";
  name: string;
  location: string;
  date: string;
}
