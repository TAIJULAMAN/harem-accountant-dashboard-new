import React from "react";
import SuggestedFolders from "./SuggestedFolders";
import SuggestedFiles from "./SuggestedFiles";
import SubfolderFilesSection from "./SubfolderFilesSection";
import { FolderItem, FileItem } from "./data";

interface DirectoryViewsProps {
  currentPath: FolderItem[];
  setCurrentPath: React.Dispatch<React.SetStateAction<FolderItem[]>>;
  folders: FolderItem[];
  files: FileItem[];
  mariaRodriguezFolders: FolderItem[];
  employeeSubfolders: FolderItem[];
  subfolderFiles: FileItem[];
  selectedFileIds: string[];
  isGridView: boolean;
  setIsGridView: (val: boolean) => void;
  isFolderGridView: boolean;
  setIsFolderGridView: (val: boolean) => void;
  activeMenu: { id: string; type: "folder" | "file" } | null;
  setActiveMenu: (menu: { id: string; type: "folder" | "file" } | null) => void;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  handleRenameClick: (id: string, type: "folder" | "file", name: string) => void;
  handleMockDownload: (name: string, type: "folder" | "file") => void;
  handleActionNotify: (action: string, name: string) => void;
  handleDeleteClick: (id: string, type: "folder" | "file") => void;
  handleToggleFileSelection: (id: string) => void;
  handleHeaderCheckboxClick: () => void;
  handleDeleteSelectedFiles: () => void;
  handleDownloadSelectedFiles: () => void;
  handleMoveSelectedFiles: () => void;
}

export default function DirectoryViews({
  currentPath,
  setCurrentPath,
  folders,
  files,
  mariaRodriguezFolders,
  employeeSubfolders,
  subfolderFiles,
  selectedFileIds,
  isGridView,
  setIsGridView,
  isFolderGridView,
  setIsFolderGridView,
  activeMenu,
  setActiveMenu,
  dropdownRef,
  handleRenameClick,
  handleMockDownload,
  handleActionNotify,
  handleDeleteClick,
  handleToggleFileSelection,
  handleHeaderCheckboxClick,
  handleDeleteSelectedFiles,
  handleDownloadSelectedFiles,
  handleMoveSelectedFiles,
}: DirectoryViewsProps) {
  return (
    <>
      {currentPath.length === 0 && (
        <>
          <SuggestedFolders
            folders={folders}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            dropdownRef={dropdownRef}
            handleRenameClick={handleRenameClick}
            handleMockDownload={handleMockDownload}
            handleActionNotify={handleActionNotify}
            handleDeleteClick={handleDeleteClick}
            onFolderClick={(folder) => setCurrentPath([folder])}
            isGridView={isFolderGridView}
            setIsGridView={setIsFolderGridView}
          />
          <SuggestedFiles
            files={files}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            dropdownRef={dropdownRef}
            isGridView={isGridView}
            setIsGridView={setIsGridView}
            handleRenameClick={handleRenameClick}
            handleMockDownload={handleMockDownload}
            handleActionNotify={handleActionNotify}
            handleDeleteClick={handleDeleteClick}
          />
        </>
      )}

      {currentPath.length === 1 && (
        <SuggestedFolders
          folders={employeeSubfolders}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
          onFolderClick={(folder) => setCurrentPath([...currentPath, folder])}
          isGridView={isFolderGridView}
          setIsGridView={setIsFolderGridView}
          showViewMore={false}
        />
      )}

      {currentPath.length === 2 && (
        <SuggestedFolders
          folders={mariaRodriguezFolders}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
          onFolderClick={(folder) => setCurrentPath([...currentPath, folder])}
          isGridView={isFolderGridView}
          setIsGridView={setIsFolderGridView}
          showViewMore={false}
        />
      )}

      {currentPath.length >= 3 && (
        <SubfolderFilesSection
          subfolderFiles={subfolderFiles}
          selectedFileIds={selectedFileIds}
          handleHeaderCheckboxClick={handleHeaderCheckboxClick}
          handleDeleteSelectedFiles={handleDeleteSelectedFiles}
          handleDownloadSelectedFiles={handleDownloadSelectedFiles}
          handleMoveSelectedFiles={handleMoveSelectedFiles}
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          handleToggleFileSelection={handleToggleFileSelection}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          dropdownRef={dropdownRef}
          handleRenameClick={handleRenameClick}
          handleMockDownload={handleMockDownload}
          handleActionNotify={handleActionNotify}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </>
  );
}
