import React, { useRef, useEffect, useState } from "react";
import { useTool } from "../context/toolContext";
import Tool from "../data/data";
import { RoughCanvas } from "roughjs/bin/canvas";

// Define Element interface for storing drawn shapes
interface Element {
  id: string;
  type: Tool;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  text?: string;
  points?: [x: number, y: number][];
  style: {
    strokeColor?: string;
    strokeWidth?: number;
    fill?: string;
    font?: string;
  };
}

interface CanvasProps {
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const Canvas: React.FC<CanvasProps> = ({
  elements,
  setElements,
  canvasRef,
}) => {
  const roughCanvasRef = useRef<RoughCanvas | null>(null);
  const { activeTool } = useTool();
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentPoints, setCurrentPoints] = useState<[x: number, y: number][]>(
    []
  );
  const textInputRef = useRef<HTMLInputElement>(null);
  const [isTextInputActive, setIsTextInputActive] = useState(false);
  const [textInputPosition, setTextInputPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

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

  const drawArrow = (
    roughCanvas: RoughCanvas,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    style: Element["style"]
  ) => {
    roughCanvas.line(x1, y1, x2, y2, {
      stroke: style.strokeColor || "white",
      strokeWidth: style.strokeWidth || 2,
    });

    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowSize = 15;
    const arrowPoints = [
      [x2, y2],
      [
        x2 - arrowSize * Math.cos(angle - Math.PI / 6),
        y2 - arrowSize * Math.sin(angle - Math.PI / 6),
      ], // Left wing
      [
        x2 - arrowSize * Math.cos(angle + Math.PI / 6),
        y2 - arrowSize * Math.sin(angle + Math.PI / 6),
      ], // Right wing
    ];

    roughCanvas.polygon(arrowPoints, {
      stroke: style.strokeColor || "white",
      strokeWidth: style.strokeWidth || 2,
      fill: style.strokeColor || "white",
      fillStyle: "solid",
    });
  };

  // rendering all elements on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const roughCanvas = roughCanvasRef.current;

    if (!canvas || !context || !roughCanvas) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach((el) => {
      if (el.type === Tool.Line) {
        roughCanvas.line(el.x1!, el.y1!, el.x2!, el.y2!, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
        });
      } else if (el.type === Tool.Rectangle) {
        const width = el.x2! - el.x1!;
        const height = el.y2! - el.y1!;
        roughCanvas.rectangle(el.x1!, el.y1!, width, height, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      } else if (el.type === Tool.Ellipse) {
        const width = el.x2! - el.x1!;
        const height = el.y2! - el.y1!;
        const centerX = (el.x1! + el.x2!) / 2;
        const centerY = (el.y1! + el.y2!) / 2;
        roughCanvas.ellipse(centerX, centerY, width, height, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      } else if (el.type === Tool.Arrow) {
        drawArrow(roughCanvas, el.x1!, el.y1!, el.x2!, el.y2!, el.style);
      } else if (el.type === Tool.Draw) {
        roughCanvas.linearPath(el.points!, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
        });
      } else if (el.type === Tool.Text) {
        context.font = el.style.font || "16px Arial";
        context.fillStyle = el.style.strokeColor || "white";
        context.fillText(el.text!, el.x1!, el.y1!);
      }
      localStorage.setItem("drawing", JSON.stringify(elements));
    });
    [elements];
  });

  // handling mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setStartPoint({ x: offsetX, y: offsetY });

    if (activeTool === Tool.Text) {
      setTextInputPosition({ x: offsetX, y: offsetY });
      setIsTextInputActive(true);
      setTimeout(() => textInputRef.current?.focus(), 0);
    } else {
      setIsDrawing(true);
    }
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
    context?.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach((el) => {
      if (el.type === Tool.Line) {
        roughCanvas.line(el.x1!, el.y1!, el.x2!, el.y2!, {
          stroke: el.style.strokeColor || "rgba(128, 128, 128, 0.9)",
          strokeWidth: el.style.strokeWidth || 2,
        });
      } else if (el.type === Tool.Rectangle) {
        const width = el.x2! - el.x1!;
        const height = el.y2! - el.y1!;
        roughCanvas.rectangle(el.x1!, el.y1!, width, height, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      } else if (el.type === Tool.Ellipse) {
        const width = el.x2! - el.x1!;
        const height = el.y2! - el.y1!;
        const centerX = (el.x1! + el.x2!) / 2;
        const centerY = (el.y1! + el.y2!) / 2;
        roughCanvas.ellipse(centerX, centerY, width, height, {
          stroke: el.style.strokeColor || "white",
          strokeWidth: el.style.strokeWidth || 2,
          fill: el.style.fill || undefined,
        });
      } else if (el.type === Tool.Arrow) {
        drawArrow(roughCanvas, el.x1!, el.y1!, el.x2!, el.y2!, el.style);
      } else if (el.type === Tool.Draw) {
        roughCanvas.linearPath(el.points!, {
          stroke: el.style.strokeColor || "black",
          strokeWidth: el.style.strokeWidth || 2,
        });
      } else if (el.type === Tool.Text) {
        context!.font = el.style.font || "16px Arial";
        context!.fillStyle = el.style.strokeColor || "white";
        context!.fillText(el.text!, el.x1!, el.y1!);
      }
    });

    if (activeTool === Tool.Line) {
      roughCanvas.line(startPoint.x, startPoint.y, offsetX, offsetY, {
        stroke: "rgba(128, 128, 128, 0.9)",
        strokeWidth: 2,
      });
    } else if (activeTool === Tool.Rectangle) {
      const width = offsetX - startPoint.x;
      const height = offsetY - startPoint.y;
      roughCanvas.rectangle(startPoint.x, startPoint.y, width, height, {
        stroke: "rgba(128, 128, 128, 0.9)",
        strokeWidth: 2,
        fill: "rgba(0, 0, 255, 0.3)",
      });
    } else if (activeTool === Tool.Ellipse) {
      const width = offsetX - startPoint.x;
      const height = offsetY - startPoint.y;
      const centerX = (startPoint.x + offsetX) / 2;
      const centerY = (startPoint.y + offsetY) / 2;
      roughCanvas.ellipse(centerX, centerY, width, height, {
        stroke: "rgba(128, 128, 128, 0.9)",
        strokeWidth: 2,
        fill: "rgba(0, 0, 255, 0.3)",
      });
    } else if (activeTool === Tool.Arrow) {
      drawArrow(roughCanvas, startPoint.x, startPoint.y, offsetX, offsetY, {
        strokeColor: "rgba(128, 128, 128, 0.5)",
        strokeWidth: 2,
      });
    } else if (activeTool === Tool.Draw) {
      const newPoints = [...currentPoints, [offsetX, offsetY]] as [
        number,
        number
      ][];
      // console.log(newPoints);
      setCurrentPoints(newPoints);
      roughCanvas.linearPath(newPoints!, {
        stroke: "rgba(128, 128, 128, 0.5)",
        strokeWidth: 2,
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
      points: [...currentPoints, [offsetX, offsetY]],
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

  const handleTextSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && textInputPosition && textInputRef.current) {
      const text = textInputRef.current.value.trim();
      if (text) {
        const newElement: Element = {
          id: crypto.randomUUID(),
          type: Tool.Text,
          x1: textInputPosition.x,
          y1: textInputPosition.y,
          style: {
            strokeColor: "white",
            font: "16px Arial",
          },
          text,
        };
        setElements((prev) => [...prev, newElement]);
      }
      setIsTextInputActive(false);
      setTextInputPosition(null);
      textInputRef.current.value = "";
    }
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

      {isTextInputActive && textInputPosition && (
        <input
          ref={textInputRef}
          onKeyDown={handleTextSubmit}
          type="text"
          style={{
            position: "absolute",
            left: textInputPosition?.x,
            top: textInputPosition?.y,
            background: "none",
            border: "0.1px solid white",
            padding: "2px",
            zIndex: "10",
            color:"white",

          }}
        />
      )}
    </div>
  );
};

export default Canvas;
