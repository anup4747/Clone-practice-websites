import React, { useRef, useEffect, useState } from "react";
import { useTool } from "../context/toolContext";
import Tool from "../data/data";
import { RoughCanvas } from "roughjs/bin/canvas";

// Define Element interface for storing drawn shapes
interface Element {
  id: string;
  type: Tool;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  style: { strokeColor?: string; strokeWidth?: number; fill?: string };
}

interface CanvasProps {
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}


const Canvas: React.FC<CanvasProps> = ({ elements, setElements, canvasRef }) => {
  const roughCanvasRef = useRef<RoughCanvas | null>(null);
  const { activeTool } = useTool();
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );  

  // Initialize Rough.js
  useEffect(() => {
    if (!canvasRef.current) return;

    const roughCanvas = new RoughCanvas(canvasRef.current);
    roughCanvasRef.current = roughCanvas;

    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const saved = localStorage.getItem("drawing");
    if (saved) {
      const parsed = JSON.parse(saved) as Element[];
      setElements(parsed);
    }
  }, []);

  // rendering all elements on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const roughCanvas = roughCanvasRef.current;

    if (!canvas || !context || !roughCanvas) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach(
      (el) => {
        if (el.type === Tool.Line) {
          roughCanvas.line(el.x1, el.y1, el.x2, el.y2, {
            stroke: el.style.strokeColor || "white",
            strokeWidth: el.style.strokeWidth || 2,
          });
        }else if (el.type === Tool.Rectangle) {
        const width = el.x2 - el.x1;
        const height = el.y2 - el.y1;
        roughCanvas.rectangle(el.x1, el.y1, width, height, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      }
        localStorage.setItem("drawing", JSON.stringify(elements));
      },
    );
    [elements]

  });

  // handling mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setStartPoint({ x: offsetX, y: offsetY });
    setIsDrawing(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (
      !isDrawing ||
      !startPoint ||
      !roughCanvasRef.current ||
      !canvasRef.current
    )
      return;

    const { offsetX, offsetY } = e.nativeEvent;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const roughCanvas = roughCanvasRef.current;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach((el) => {
      if (el.type === Tool.Line) {
        roughCanvas.line(el.x1, el.y1, el.x2, el.y2, {
          stroke: el.style.strokeColor || "rgba(128, 128, 128, 0.9)",
          strokeWidth: el.style.strokeWidth || 2,
        });
      }else if (el.type === Tool.Rectangle) {
        const width = el.x2 - el.x1;
        const height = el.y2 - el.y1;
        roughCanvas.rectangle(el.x1, el.y1, width, height, {
          stroke: el.style.strokeColor || "black",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      }
    });

    if (activeTool === Tool.Line) {
      roughCanvas.line(startPoint.x, startPoint.y, offsetX, offsetY, {
        stroke: "rgba(128, 128, 128, 0.9)",
        strokeWidth: 2,
      });
    }else if (activeTool === Tool.Rectangle) {
      const width = offsetX - startPoint.x;
      const height = offsetY - startPoint.y;
      roughCanvas.rectangle(startPoint.x, startPoint.y, width, height, {
        stroke: "rgba(128, 128, 128, 0.5)",
        strokeWidth: 2,
        fill: "rgba(0, 0, 255, 0.3)",
      });
    }

  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!startPoint) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const newElement: Element = {
      id: crypto.randomUUID(),
      type: activeTool,
      x1: startPoint.x,
      y1: startPoint.y,
      x2: offsetX,
      y2: offsetY,
      style: {
        strokeColor: "white",
        strokeWidth: 2,
      },
    };
    setElements((prev) => [...prev, newElement]);
    setIsDrawing(false);
    setStartPoint(null); 
   
    // setElements([]); 
  };

  return (
    <div className="absolute inset-0 justify-center items-center bg-gray-900 z-10">
      <canvas
        id="canvas"
        ref={canvasRef}
        className="border shadow-lg bg-gray-900"
        style={{ width: "100%", height: "100%", border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

    </div>
    
  );
};

export default Canvas;
