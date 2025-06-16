import React from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
import { Footer } from "../componants/footer";
import { ToolProvider } from "../context/toolContext";
import Canvas from "../componants/canvas";
import { useState,useCallback } from "react";

export const Home: React.FC = () => {
 
  return (
    <section>
      <ToolProvider>
        <ToolsMenu />
        <SideMenu/>
        <Canvas/>
        <Footer />
      </ToolProvider>
    </section>
  );
};
