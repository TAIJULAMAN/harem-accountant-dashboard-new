import { FolderItem, FileItem } from "./data";
import React from "react";

export interface DocumentHandlerProps {
  currentPath: FolderItem[];
  subfolderFiles: FileItem[];
  selectedFileIds: string[];
  renameTarget: { id: string; type: "folder" | "file"; currentName?: string } | null;
  renameValue: string;
  newFolderName: string;

  setSubfolderFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  setIsUploadModalOpen: (val: boolean) => void;
  setSuccessTitle: (val: string) => void;
  setSuccessMessage: (val: string) => void;
  setIsSuccessOpen: (val: boolean) => void;
  setSelectedFileIds: React.Dispatch<React.SetStateAction<string[]>>;
  setMoveTarget: (val: { id: string; type: "folder" | "file"; name: string } | null) => void;
  setIsMoveModalOpen: (val: boolean) => void;
  setEmployeeSubfolders: React.Dispatch<React.SetStateAction<FolderItem[]>>;
  setMariaRodriguezFolders: React.Dispatch<React.SetStateAction<FolderItem[]>>;
  setFolders: React.Dispatch<React.SetStateAction<FolderItem[]>>;
  setNewFolderName: (val: string) => void;
  setIsCreateFolderOpen: (val: boolean) => void;
  setRenameTarget: (val: { id: string; type: "folder" | "file"; currentName: string } | null) => void;
  setRenameValue: (val: string) => void;
  setIsRenameOpen: (val: boolean) => void;
  setActiveMenu: (val: { id: string; type: "folder" | "file" } | null) => void;
  setPermissionTarget: (val: { id: string; type: "folder" | "file"; name: string } | null) => void;
  setIsPermissionModalOpen: (val: boolean) => void;
}

export function useDocumentHandlers({
  currentPath,
  subfolderFiles,
  selectedFileIds,
  renameTarget,
  renameValue,
  newFolderName,
  setSubfolderFiles,
  setFiles,
  setIsUploadModalOpen,
  setSuccessTitle,
  setSuccessMessage,
  setIsSuccessOpen,
  setSelectedFileIds,
  setMoveTarget,
  setIsMoveModalOpen,
  setEmployeeSubfolders,
  setMariaRodriguezFolders,
  setFolders,
  setNewFolderName,
  setIsCreateFolderOpen,
  setRenameTarget,
  setRenameValue,
  setIsRenameOpen,
  setActiveMenu,
  setPermissionTarget,
  setIsPermissionModalOpen,
}: DocumentHandlerProps) {
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
    setSuccessTitle("Deleted!");
    setSuccessMessage("Selected items have been deleted successfully.");
    setIsSuccessOpen(true);
  };

  const handleDownloadSelectedFiles = () => {
    setSelectedFileIds([]);
    setSuccessTitle("Download Started!");
    setSuccessMessage(
      "The download for selected items has initiated successfully.",
    );
    setIsSuccessOpen(true);
  };

  const handleMoveSelectedFiles = () => {
    setMoveTarget({
      id: "multiple",
      type: "file",
      name: `${selectedFileIds.length} selected files`,
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
    handleFileChange,
    handleToggleFileSelection,
    handleHeaderCheckboxClick,
    handleDeleteSelectedFiles,
    handleDownloadSelectedFiles,
    handleMoveSelectedFiles,
    handleCreateFolderSubmit,
    handleRenameSubmit,
    handleRenameClick,
    handleDeleteClick,
    handleMockDownload,
    handleActionNotify,
  };
}
