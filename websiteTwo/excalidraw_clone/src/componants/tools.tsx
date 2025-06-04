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

export const Tools: React.FC = () => {
  return <section>
    <SlPencil/>
    <FiArrowRight/>
    <IoMdRemove/>
    <HiOutlineHand/>
    <BiLockOpen/>
    <BiLock/>
    <BiText/>
    <BiCircle/>
    <BiNavigation/>
    <BiPhotoAlbum/>
    <BiEraser/>
    <BiSolidGrid/>
    <BiSquareRounded/>
  </section>;
};
