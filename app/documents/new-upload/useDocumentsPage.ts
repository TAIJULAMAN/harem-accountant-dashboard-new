import { useState, useRef, useEffect } from "react";
import {
  FolderItem,
  FileItem,
  PermissionMember,
  initialFolders,
  initialSubfolderFiles,
  initialMariaRodriguezFolders,
  initialEmployeeSubfolders,
  initialFiles,
  initialPermissionMembers,
} from "@/components/documents/new-upload/data";

export function useDocumentsPage() {
  const [folders, setFolders] = useState<FolderItem[]>(initialFolders);
  const [currentPath, setCurrentPath] = useState<FolderItem[]>([]);
  const [selectedFileIds, setSelectedFileIds] = useState<string[]>([]);
  const [subfolderFiles, setSubfolderFiles] = useState<FileItem[]>(
    initialSubfolderFiles,
  );
  const [mariaRodriguezFolders, setMariaRodriguezFolders] = useState<
    FolderItem[]
  >(initialMariaRodriguezFolders);
  const [employeeSubfolders, setEmployeeSubfolders] = useState<FolderItem[]>(
    initialEmployeeSubfolders,
  );

  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [isGridView, setIsGridView] = useState(true);
  const [isFolderGridView, setIsFolderGridView] = useState(true);
  const [activeMenu, setActiveMenu] = useState<{
    id: string;
    type: "folder" | "file";
  } | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successTitle, setSuccessTitle] = useState("Success!");
  const [successMessage, setSuccessMessage] = useState("");

  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [renameTarget, setRenameTarget] = useState<{
    id: string;
    type: "folder" | "file";
    currentName: string;
  } | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const [permissionTarget, setPermissionTarget] = useState<{
    id: string;
    type: "folder" | "file";
    name: string;
  } | null>(null);

  // Move Modal State
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  const [moveTarget, setMoveTarget] = useState<{
    id: string;
    type: "folder" | "file";
    name: string;
  } | null>(null);
  const [permissionMembers, setPermissionMembers] = useState<
    PermissionMember[]
  >(initialPermissionMembers);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        activeMenu &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFile = e.target.files[0];
      const nameWithoutExtension =
        newFile.name.substring(0, newFile.name.lastIndexOf(".")) ||
        newFile.name;
      const ext = newFile.name.split(".").pop()?.toUpperCase() || "PDF";
      const newItem = {
        id: `uploaded-${Date.now()}`,
        name: nameWithoutExtension,
        type: ext,
        createdBy: "Maria Rodriguez",
      };
      if (currentPath.length >= 2) {
        setSubfolderFiles((prev) => [newItem, ...prev]);
      } else {
        setFiles((prev) => [newItem, ...prev]);
      }
      setIsUploadModalOpen(false);
      setSuccessTitle("Upload Successful!");
      setSuccessMessage(
        `File "${newFile.name}" has been uploaded successfully.`,
      );
      setIsSuccessOpen(true);
    }
  };

  const handleToggleFileSelection = (id: string) => {
    setSelectedFileIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleHeaderCheckboxClick = () => {
    if (selectedFileIds.length === subfolderFiles.length) {
      setSelectedFileIds([]);
    } else {
      setSelectedFileIds(subfolderFiles.map((f) => f.id));
    }
  };

  const handleDeleteSelectedFiles = () => {
    setSubfolderFiles((prev) =>
      prev.filter((f) => !selectedFileIds.includes(f.id)),
    );
    setSelectedFileIds([]);
    setSuccessTitle("Files Deleted!");
    setSuccessMessage("Selected files have been deleted successfully.");
    setIsSuccessOpen(true);
  };

  const handleDownloadSelectedFiles = () => {
    setSuccessTitle("Download Started!");
    setSuccessMessage("Selected files are being downloaded as a ZIP archive.");
    setIsSuccessOpen(true);
    setSelectedFileIds([]);
  };

  const handleMoveSelectedFiles = () => {
    setMoveTarget({
      id: "multiple",
      type: "file",
      name: `${selectedFileIds.length} items`,
    });
    setIsMoveModalOpen(true);
  };

  const handleCreateFolderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      const newItem = {
        id: `folder-${Date.now()}`,
        name: newFolderName.trim(),
        createdBy: "Maria Rodriguez",
      };
      if (currentPath.length === 1) {
        setEmployeeSubfolders((prev) => [...prev, newItem]);
      } else if (currentPath.length === 2) {
        setMariaRodriguezFolders((prev) => [...prev, newItem]);
      } else {
        setFolders((prev) => [...prev, newItem]);
      }
      setNewFolderName("");
      setIsCreateFolderOpen(false);
      setSuccessTitle("Folder Created!");
      setSuccessMessage("Your new folder has been successfully created.");
      setIsSuccessOpen(true);
    }
  };

  const handleRenameClick = (
    id: string,
    type: "folder" | "file",
    currentName: string,
  ) => {
    setRenameTarget({ id, type, currentName });
    setRenameValue(currentName);
    setIsRenameOpen(true);
    setActiveMenu(null);
  };

  const handleRenameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (renameTarget && renameValue.trim()) {
      if (renameTarget.type === "folder") {
        if (currentPath.length === 1) {
          setEmployeeSubfolders((prev) =>
            prev.map((f) =>
              f.id === renameTarget.id ? { ...f, name: renameValue.trim() } : f,
            ),
          );
        } else if (currentPath.length === 2) {
          setMariaRodriguezFolders((prev) =>
            prev.map((f) =>
              f.id === renameTarget.id ? { ...f, name: renameValue.trim() } : f,
            ),
          );
        } else {
          setFolders((prev) =>
            prev.map((f) =>
              f.id === renameTarget.id ? { ...f, name: renameValue.trim() } : f,
            ),
          );
        }
      } else {
        if (currentPath.length >= 2) {
          setSubfolderFiles((prev) =>
            prev.map((fi) =>
              fi.id === renameTarget.id
                ? { ...fi, name: renameValue.trim() }
                : fi,
            ),
          );
        } else {
          setFiles((prev) =>
            prev.map((fi) =>
              fi.id === renameTarget.id
                ? { ...fi, name: renameValue.trim() }
                : fi,
            ),
          );
        }
      }
      setIsRenameOpen(false);
      setRenameTarget(null);
      setRenameValue("");
      setSuccessTitle("Renamed!");
      setSuccessMessage("The item has been renamed successfully.");
      setIsSuccessOpen(true);
    }
  };

  const handleDeleteClick = (id: string, type: "folder" | "file") => {
    if (type === "folder") {
      if (currentPath.length === 1) {
        setEmployeeSubfolders((prev) => prev.filter((f) => f.id !== id));
      } else if (currentPath.length === 2) {
        setMariaRodriguezFolders((prev) => prev.filter((f) => f.id !== id));
      } else {
        setFolders((prev) => prev.filter((f) => f.id !== id));
      }
    } else {
      if (currentPath.length >= 2) {
        setSubfolderFiles((prev) => prev.filter((fi) => fi.id !== id));
      } else {
        setFiles((prev) => prev.filter((fi) => fi.id !== id));
      }
    }
    setActiveMenu(null);
    setSuccessTitle("Deleted!");
    setSuccessMessage("The item has been deleted successfully.");
    setIsSuccessOpen(true);
  };

  const handleMockDownload = (name: string, type: "folder" | "file") => {
    setActiveMenu(null);
    const content = `Mock document details for ${type} "${name}".`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.toLowerCase().replace(/\\s+/g, "_")}.${type === "folder" ? "zip" : "pdf"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSuccessTitle("Download Started!");
    setSuccessMessage(`The download for ${name} has initiated successfully.`);
    setIsSuccessOpen(true);
  };

  const handleActionNotify = (action: string, itemName: string) => {
    setActiveMenu(null);
    if (action === "Manage Permission") {
      setPermissionTarget({ id: "mock", type: "folder", name: itemName });
      setIsPermissionModalOpen(true);
    } else if (action === "Move") {
      setMoveTarget({ id: "mock", type: "folder", name: itemName });
      setIsMoveModalOpen(true);
    } else {
      setSuccessTitle(action);
      setSuccessMessage(`Action "${action}" triggered for "${itemName}".`);
      setIsSuccessOpen(true);
    }
  };

  return {
    state: {
      folders,
      currentPath,
      selectedFileIds,
      subfolderFiles,
      mariaRodriguezFolders,
      employeeSubfolders,
      files,
      isGridView,
      isFolderGridView,
      activeMenu,
      isSuccessOpen,
      successTitle,
      successMessage,
      isCreateFolderOpen,
      newFolderName,
      isRenameOpen,
      renameTarget,
      renameValue,
      isUploadModalOpen,
      isPermissionModalOpen,
      permissionTarget,
      isMoveModalOpen,
      moveTarget,
      permissionMembers,
      dropdownRef,
    },
    setters: {
      setFolders,
      setCurrentPath,
      setSelectedFileIds,
      setSubfolderFiles,
      setMariaRodriguezFolders,
      setEmployeeSubfolders,
      setFiles,
      setIsGridView,
      setIsFolderGridView,
      setActiveMenu,
      setIsSuccessOpen,
      setSuccessTitle,
      setSuccessMessage,
      setIsCreateFolderOpen,
      setNewFolderName,
      setIsRenameOpen,
      setRenameTarget,
      setRenameValue,
      setIsUploadModalOpen,
      setIsPermissionModalOpen,
      setPermissionTarget,
      setIsMoveModalOpen,
      setMoveTarget,
      setPermissionMembers,
    },
    handlers: {
      handleUploadClick,
      handleFileChange,
      handleToggleFileSelection,
      handleHeaderCheckboxClick,
      handleDeleteSelectedFiles,
      handleDownloadSelectedFiles,
      handleMoveSelectedFiles,
      handleCreateFolderSubmit,
      handleRenameClick,
      handleRenameSubmit,
      handleDeleteClick,
      handleMockDownload,
      handleActionNotify,
    },
  };
}
