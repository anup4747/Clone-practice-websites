import React from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
import { Footer } from "../componants/footer";
import { ToolProvider } from "../componants/toolContext";
import Canvas from "../componants/canvas";

export const Home: React.FC = () => {
  return (
    <section>
      <ToolProvider>
        <ToolsMenu />
        <SideMenu />
        <Canvas />
        <Footer />
      </ToolProvider>
    </section>
  );
};
