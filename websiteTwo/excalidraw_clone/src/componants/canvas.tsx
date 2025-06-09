import React, { useRef, useEffect, useState } from 'react';
import { useTool } from './toolContext';

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

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { activeTool } = useTool();
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<Point | null>(null);

  // Initialize canvas context and handle resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineCap = 'round';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Get mouse position relative to canvas
  const getMousePos = (canvas: HTMLCanvasElement, event: React.MouseEvent): Point => {
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
    const ctx = canvas?.getContext('2d');
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
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !startPoint) return;

    const endPoint = getMousePos(canvas, e);

    // Finalize the line
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();

    // Optionally, store the line for persistence
    // setLines([...lines, { start: startPoint, end: endPoint }]);
  };

  return (
    <div className="absolute  flex justify-center items-center bg-gray-100 z-10">
      <canvas
        ref={canvasRef}
        className="border border-gray-300 shadow-lg bg-gray-900"
        style={{ width: '800px', height: '600px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default Canvas;