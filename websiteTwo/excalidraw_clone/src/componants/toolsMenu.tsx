import React from "react";
import { useState, useEffect } from "react";
import { SlPencil } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";
import { IoMdRemove } from "react-icons/io";
import { HiOutlineHand } from "react-icons/hi";
import {
  BiLockOpen,
  BiLock,
  BiText,
  BiCircle,     
  BiNavigation,
  BiPhotoAlbum,
  BiEraser,
  BiSolidGrid,
  BiSquareRounded,
} from "react-icons/bi";
import { BsDiamond } from "react-icons/bs";

export const ToolsMenu: React.FC = () => {

  const [locked,setLocked]  = useState(false);
  const [hand,setHand] = useState(false);
  const [selection,setSelection] = useState(false);
  const [square,setSquare] = useState(false);
  const [diamond,setDiamond] = useState(false);
  const [circle,setCircle] = useState(false);
  const [arrow,setArrow] = useState(false);
  const [line,setLine] = useState(false);
  const [pencil, setPencil] = useState(false);
  const [text,setText] = useState(false);
  const [image,setImage] = useState(false);
  const [eraser,setEraser] = useState(false);
  const [menu,setMenu] = useState(false);

  const handleLockToggle = () => {
    setLocked(!locked)
  }

   const resetAllExcept = (activeSetter: (value: boolean) => void) => {
    setLocked(false);
    setHand(false);
    setSelection(false);
    setSquare(false);
    setDiamond(false);
    setCircle(false);
    setArrow(false);
    setLine(false);
    setPencil(false);
    setText(false);
    setImage(false);
    setEraser(false);
    setMenu(false);
    activeSetter(true);
  };

  // Keyboard event handler for number keys 1-9, 0
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (locked) return; // Ignore keypress if locked
      switch (event.key) {
        case "1":
          resetAllExcept(setSelection);
          break;
        case "2":
          resetAllExcept(setSquare);
          break;
        case "3":
          resetAllExcept(setDiamond);
          break;
        case "4":
          resetAllExcept(setCircle);
          break;
        case "5":
          resetAllExcept(setArrow);
          break;
        case "6":
          resetAllExcept(setLine);
          break;
        case "7":
          resetAllExcept(setPencil);
          break;
        case "8":
          resetAllExcept(setText);
          break;
        case "9":
          resetAllExcept(setImage);
          break;
        case "0":
          resetAllExcept(setEraser);
          break;
        default: 
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [locked]);


  return (
    <section className="p-2 bg-gray-800 rounded-xl">
      <div className="flex flex-row  justify-center items-center space-x-1">
        <div onClick={handleLockToggle } className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${locked ? 'bg-blue-900 hover:bg-blue-900' : ''} `}>
          {locked ?  <BiLock /> :  <BiLockOpen />}
        </div>
        <div onClick={() => resetAllExcept(setHand)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${hand ? 'bg-blue-900 hover:bg-blue-900' : ''} `}>
          {" "}
          <HiOutlineHand />
        </div>
        <div onClick={() => resetAllExcept(setSelection)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${selection ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          <BiNavigation />
        </div>

        <div onClick={() => resetAllExcept(setSquare)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${square ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          <BiSquareRounded />
        </div>
        <div onClick={() => resetAllExcept(setDiamond)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${diamond ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          <BsDiamond />
        </div>

        <div onClick={() => resetAllExcept(setCircle)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${circle ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <BiCircle />
        </div>

        <div onClick={() => resetAllExcept(setArrow)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${arrow ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <FiArrowRight />
        </div>

        <div onClick={() => resetAllExcept(setLine)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${line ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <IoMdRemove />
        </div>

        <div onClick={() => resetAllExcept(setPencil)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${pencil ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <SlPencil />
        </div>

        <div onClick={() => resetAllExcept(setText)} className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${text ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          <BiText />{" "}
        </div>

        <div onClick={() => resetAllExcept(setImage)}  className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${image ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <BiPhotoAlbum />
        </div>

        <div onClick={() => resetAllExcept(setEraser)}  className={`cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm ${eraser ? 'bg-blue-900 hover:bg-blue-900' : ''}`}>
          {" "}
          <BiEraser />
        </div>

        <div onClick={() => resetAllExcept(setMenu)} className="cursor-pointer text-white text-2xl p-1 hover:bg-gray-700 rounded-sm">
          <BiSolidGrid />
        </div>
      </div>
    </section>
  );
};
