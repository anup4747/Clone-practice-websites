import React from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
import { Footer } from "../componants/footer";
import { ToolProvider } from "../componants/toolContext";
import Canvas from "../componants/canvas";
import { useState,useCallback } from "react";

export const Home: React.FC = () => {
  // State to hold the reset function from Canvas
  const [resetCanvasFn, setResetCanvasFn] = useState<() => void>(() => () => {});

  // Memoize the onReset function to prevent it from changing on every render
  const handleSetResetCanvas = useCallback((resetFn: () => void) => {
    setResetCanvasFn(() => resetFn); // Return a new function reference
  }, []);

  // Handler to reset the canvas
  const handleResetCanvas = useCallback(() => {
    if (resetCanvasFn) {
      resetCanvasFn();
    }
  }, [resetCanvasFn]);
 
  return (
    <section>
      <ToolProvider>
        <ToolsMenu />
        <SideMenu onResetCanvas={handleResetCanvas}/>
        <Canvas onReset={handleSetResetCanvas}/>
        <Footer />
      </ToolProvider>
    </section>
  );
};
