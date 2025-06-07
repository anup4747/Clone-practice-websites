import React from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiTwotoneFolder,
  AiOutlineDownload,
  AiOutlineExport,
  AiOutlineUsergroupAdd,
  AiOutlineThunderbolt,
  AiOutlineSearch,
  AiOutlineQuestionCircle,
  AiOutlineDelete,
  AiOutlineDingding,
  AiOutlineGithub,
  AiOutlineX,
  AiOutlineDiscord,
  AiOutlineLeftSquare
} from "react-icons/ai";

interface sideItem {
  label: string;
  href: string;
}

// Sample navigation items
const sideMenuItems: sideItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section>
      <div className="absolute top-5 p-2 left-5  bg-gray-800 rounded-xl">
        <div
          onClick={handleMenu}
          className="cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm"
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 p-5 flex flex-col space-y-2 left-5 bg-gray-800 rounded-xl">
          {sideMenuItems.map((items) => (
            <div className="text-white text-left ">{items.label}</div>
          ))}
        </div>
      )}
    </section>
  );
};
