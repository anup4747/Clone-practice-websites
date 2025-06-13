import React, { useRef, useEffect, useState } from "react";
import { useTool } from "./toolContext";

enum Tool {
  None = "none",
  Hand = "hand",
  Selection = "selection",
  Square = "square",
  Diamond = "diamond",
  Circle = "circle",
  Arrow = "arrow",
  Line = "line",
  Pencil = "pencil",
  Text = "text",
  Image = "image",
  Eraser = "eraser",
  PaintBrush = "paintBrush",
  Star = "star",
  PaintBucket = "paintBucket",
}

interface Point {
  x: number;
  y: number;
}

interface Line {
  start: Point;
  end: Point;
}

interface CanvasProps {
  onReset?: (resetFn: () => void) => void; // onReset accepts a function as an argument
}

const Canvas: React.FC<CanvasProps> = ({ onReset = () => {} }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { activeTool } = useTool();
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [lines, setLines] = useState<Line[]>([]);

  // Initialize canvas context and handle resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineCap = "round";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Function to reset the canvas
  const resetCanvas = () => {
    setLines([]); // Clear all lines
    setStartPoint(null); // Clear the start point
    setIsDrawing(false); // Stop any ongoing drawing
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas visually
    }
  };

  // Pass resetCanvas to the parent via onReset
  useEffect(() => {
    if (typeof onReset === "function") {
      onReset(resetCanvas); // Only call onReset if it's a function
    }
  }, [onReset]);

  // Get mouse position relative to canvas
  const getMousePos = (
    canvas: HTMLCanvasElement,
    event: React.MouseEvent
  ): Point => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // Handle mouse down to start drawing if line tool is active
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool !== Tool.Line) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDrawing(true);
    setStartPoint(getMousePos(canvas, e));
  };

  // Handle mouse move to draw preview of the line
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool !== Tool.Line || !isDrawing || !startPoint) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Clear canvas for preview (for simplicity; store lines for persistence)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentPoint = getMousePos(canvas, e);

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();
  };

  // Handle mouse up to finalize the line
  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool !== Tool.Line || !isDrawing) return;

    setIsDrawing(false);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !startPoint) return;

    const endPoint = getMousePos(canvas, e);

    // Finalize the line
    const newLine = { start: startPoint, end: endPoint };
    setLines((prevLines) => [...prevLines, newLine]);
    setStartPoint(null); // Clear start point

  };

  const drawAllLines = (ctx: CanvasRenderingContext2D, previewLine?: Line) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw stored lines
  lines.forEach(({ start, end }) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  });

  // Draw preview line if it exists
  if (previewLine) {
    ctx.beginPath();
    ctx.moveTo(previewLine.start.x, previewLine.start.y);
    ctx.lineTo(previewLine.end.x, previewLine.end.y);
    ctx.stroke();
  }
};

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;

  drawAllLines(ctx);
}, [lines]);

  
  return (
    <div className="absolute inset-0 justify-center items-center bg-gray-900 z-10">
      <canvas
        ref={canvasRef}
        className="border shadow-lg bg-gray-900"
        style={{ width: "100%", height: "100%" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default Canvas;
