import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  AiOutlineLeftSquare,
} from "react-icons/ai";

interface sideItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

// Sample navigation items
const sideMenuItems: sideItem[] = [
  { label: "Open", href: "/", icon: <AiTwotoneFolder /> },
  { label: "Save too..", href: "/about", icon: <AiOutlineDownload /> },
  { label: "Export Image", href: "/services", icon: <AiOutlineExport /> },
  {
    label: "Live Collabration",
    href: "/contact",
    icon: <AiOutlineUsergroupAdd />,
  },
  {
    label: "Command Palette",
    href: "/contact",
    icon: <AiOutlineThunderbolt />,
  },
  { label: "Find on canvas", href: "/contact", icon: <AiOutlineSearch /> },
  { label: "Help", href: "/contact", icon: <AiOutlineQuestionCircle /> },
  { label: "Reset the canvas", href: "/contact", icon: <AiOutlineDelete /> },
  { label: "ExcaliDraw+", href: "/contact", icon: <AiOutlineDingding /> },
  { label: "GitHub", href: "/contact", icon: <AiOutlineGithub /> },
  { label: "Twitter", href: "/contact", icon: <AiOutlineX /> },
  { label: "Discord", href: "/contact", icon: <AiOutlineDiscord /> },
  { label: "Signup", href: "/contact", icon: <AiOutlineLeftSquare /> },
];

export const SideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-5 p-2 left-5 bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg z-20 rounded-xl"
      >
        <div
          onClick={handleMenu}
          className="cursor-pointer text-white text-2xl p-2 hover:bg-gray-700 rounded-sm z-20"
        >
          <AiOutlineMenu />
        </div>
      </motion.section>

      {isMenuOpen && (
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bg-gradient-to-r from-gray-800 to-gray-700 top-21 p-2 flex flex-col left-5 rounded-xl shadow-lg z-20"
          ref={menuRef}
        >
          <div className="">
            {sideMenuItems.map((items) => (
              <div className="text-white text-left cursor-pointer p-2 hover:bg-gray-700 flex space-x-2 rounded-lg">
                <div className="text-white text-2xl">{items.icon}</div>
                <div>{items.label}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </section>
  );
};
