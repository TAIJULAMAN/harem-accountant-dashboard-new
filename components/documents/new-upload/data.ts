export interface FolderItem {
  id: string;
  name: string;
  createdBy: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  createdBy: string;
}

export interface PermissionMember {
  id: string;
  name: string;
  email: string;
  role: "View Only" | "Edit Content" | "Add Folder" | "Add Files";
  avatarEmoji: string;
  avatarBg: string;
}

export const initialFolders: FolderItem[] = [
  { id: "f1", name: "Employees", createdBy: "Maria Rodriguez" },
  { id: "f2", name: "Accountant", createdBy: "Maria Rodriguez" },
  { id: "f3", name: "Name", createdBy: "Maria Rodriguez" },
  { id: "f4", name: "Name", createdBy: "Maria Rodriguez" },
];

export const initialSubfolderFiles: FileItem[] = [
  { id: "subfi1", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi2", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi3", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi4", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi5", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi6", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi7", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi8", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "subfi9", name: "August Salary", type: "PDF", createdBy: "Maria Rodriguez" },
];

export const initialMariaRodriguezFolders: FolderItem[] = [
  { id: "mr-1", name: "Salaries", createdBy: "Maria Rodriguez" },
  { id: "mr-2", name: "Taxes", createdBy: "Maria Rodriguez" },
  { id: "mr-3", name: "Contracts", createdBy: "Maria Rodriguez" },
];

export const initialEmployeeSubfolders: FolderItem[] = [
  { id: "sub-1", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-2", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-3", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-4", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-5", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-6", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-7", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-8", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-9", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-10", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-11", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-12", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-13", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-14", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-15", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
  { id: "sub-16", name: "Maria Rodriguez", createdBy: "Maria Rodriguez" },
];

export const initialFiles: FileItem[] = [
  {
    id: "fi1",
    name: "August Salary",
    type: "PDF",
    createdBy: "Maria Rodriguez",
  },
  { id: "fi2", name: "Sanction", type: "PDF", createdBy: "Maria Rodriguez" },
  {
    id: "fi3",
    name: "March Salary",
    type: "PDF",
    createdBy: "Maria Rodriguez",
  },
  {
    id: "fi4",
    name: "May Salary",
    type: "PDF",
    createdBy: "Maria Rodriguez",
  },
  { id: "fi5", name: "Sanction", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "fi6", name: "Sanction", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "fi7", name: "Sanction", type: "PDF", createdBy: "Maria Rodriguez" },
  { id: "fi8", name: "Sanction", type: "PDF", createdBy: "Maria Rodriguez" },
];

export const initialPermissionMembers: PermissionMember[] = [
  {
    id: "1",
    name: "Maria Rodriguez",
    email: "maria@beautywellness.com",
    role: "View Only",
    avatarEmoji: "👩🎤",
    avatarBg: "bg-pink-100 border-pink-200 text-pink-700",
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    email: "maria@beautywellness.com",
    role: "Edit Content",
    avatarEmoji: "👩",
    avatarBg: "bg-orange-100 border-orange-200 text-orange-700",
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    email: "maria@beautywellness.com",
    role: "Add Folder",
    avatarEmoji: "🧑🏫",
    avatarBg: "bg-teal-100 border-teal-200 text-teal-700",
  },
  {
    id: "4",
    name: "Maria Rodriguez",
    email: "maria@beautywellness.com",
    role: "Add Folder",
    avatarEmoji: "👦",
    avatarBg: "bg-red-100 border-red-200 text-red-700",
  },
];
