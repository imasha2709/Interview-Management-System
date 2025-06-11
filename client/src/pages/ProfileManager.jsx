"use client";
import { useState } from "react";
import ProfileEdit from "./profileEdit";
import ProfileView from "./profileView";

const ProfileManager = ({ user, onSave, onClose }) => {
  const [currentPage, setCurrentPage] = useState("profile");

  const navigateToEdit = () => {
    setCurrentPage("security");
  };

  const navigateToView = () => {
    setCurrentPage("profile");
  };

  if (currentPage === "security") {
    return (
      <ProfileEdit
        user={user}
        onClose={onClose}
        onNavigateToView={navigateToView}
      />
    );
  }

  return (
    <ProfileView
      user={user}
      onClose={onClose}
      onNavigateToEdit={navigateToEdit}
    />
  );
};

export default ProfileManager;
