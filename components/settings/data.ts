import { UserProfile, SocialConnections, DeviceSession } from "./types";

export const DEMO_PROFILE: UserProfile = {
  name: "Mathew Anderson",
  store: "Maxima Studio",
  email: "info@modernize.com",
  phone: "(219) 555-0114",
  address: "3891 Ranchview Dr. Richardson, California 62639",
  avatarUrl: "/avatar/avatar.png"
};

export const DEFAULT_SOCIAL_CONNECTIONS: SocialConnections = {
  facebook: false,
  instagram: true,
  x: false,
  tiktok: true,
};

export const DEMO_DEVICES: DeviceSession[] = [
  {
    id: "1",
    type: "smartphone",
    name: "iPhone 14",
    location: "London UK",
    date: "Oct 23 at 1:15 AM",
  },
  {
    id: "2",
    type: "laptop",
    name: "Macbook Air",
    location: "Gujarat India",
    date: "Oct 24 at 3:15 AM",
  },
];
