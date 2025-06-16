import React from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
import { Footer } from "../componants/footer";
import { ToolProvider } from "../context/toolContext";
import Canvas from "../componants/canvas";
import { useState} from "react";

export const Home: React.FC = () => {
  const [resetModalTrigger, setResetModalTrigger] = useState<() => void>(() => {});

  return (
    <section>
      <ToolProvider>
        <ToolsMenu />
        <SideMenu onResetCanvas={resetModalTrigger} />
        <Canvas />
        <Footer />
      </ToolProvider>
    </section>
  );
};
