import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Eraser, RotateCcw, Pen } from 'lucide-react';

interface RoomWhiteboardProps {
  onMount?: (canvas: HTMLCanvasElement | null) => void;
}

const COLORS = ['#0f172a', '#6366f1', '#3b82f6', '#10b981', '#ef4444', '#f59e0b'];
const STROKE_WIDTHS = [2, 4, 8, 14];

export const RoomWhiteboard: React.FC<RoomWhiteboardProps> = ({ onMount }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#6366f1');
  const [isEraser, setIsEraser] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (onMount) onMount(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [onMount]);

  const startDrawing = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      if ('touches' in e && e.cancelable) {
        e.preventDefault();
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      ctx.beginPath();
      ctx.moveTo(clientX - rect.left, clientY - rect.top);
    },
    [],
  );

  const draw = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      if (!isDrawing) return;
      if ('touches' in e && e.cancelable) {
        e.preventDefault();
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      ctx.strokeStyle = isEraser ? '#ffffff' : color;
      ctx.lineWidth = strokeWidth;
      ctx.lineTo(clientX - rect.left, clientY - rect.top);
      ctx.stroke();
    },
    [isDrawing, color, isEraser, strokeWidth],
  );

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      className="relative flex h-full w-full select-none flex-col overflow-hidden rounded-2xl bg-white"
      data-testid="tldraw-whiteboard"
    >
      {/* Toolbar */}
      <div className="z-10 flex flex-wrap items-center justify-between gap-1.5 border-b border-slate-200 bg-slate-50 p-2 sm:gap-2 sm:p-2.5">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            type="button"
            onClick={() => setIsEraser(false)}
            className={`flex cursor-pointer items-center gap-1 rounded-lg p-1.5 text-xs font-semibold transition-all ${
              !isEraser
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
            title="Ruchka"
          >
            <Pen size={14} />
          </button>

          <button
            type="button"
            onClick={() => setIsEraser(true)}
            className={`flex cursor-pointer items-center gap-1 rounded-lg p-1.5 text-xs font-semibold transition-all ${
              isEraser
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
            title="O'chirg'ich"
          >
            <Eraser size={14} />
          </button>

          <div className="mx-0.5 h-4 w-px bg-slate-300 sm:mx-1" />

          {/* Color Palette */}
          {!isEraser && (
            <div className="flex items-center gap-1">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`h-4 w-4 cursor-pointer rounded-full border transition-all sm:h-5 sm:w-5 ${
                    color === c
                      ? 'scale-125 border-white ring-2 ring-indigo-400'
                      : 'border-transparent hover:scale-110'
                  }`}
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Stroke Width Selector */}
          <div className="flex items-center gap-1">
            {STROKE_WIDTHS.map((sw) => (
              <button
                key={sw}
                type="button"
                onClick={() => setStrokeWidth(sw)}
                className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border text-[10px] font-bold ${
                  strokeWidth === sw
                    ? 'border-indigo-400 bg-indigo-100 text-indigo-700'
                    : 'border-slate-200 bg-slate-100 text-slate-600'
                }`}
                title={`${sw}px chiziq`}
              >
                {sw}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleClear}
            className="flex cursor-pointer items-center gap-1 rounded-lg border border-red-200 bg-red-50 p-1.5 text-xs font-bold text-red-600 transition-all hover:bg-red-100"
            title="Tozalash"
          >
            <RotateCcw size={13} />
            <span className="hidden sm:inline">Tozalash</span>
          </button>
        </div>
      </div>

      {/* Drawing Canvas */}
      <div className="relative h-full w-full flex-1 cursor-crosshair bg-white">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="block h-full w-full touch-none"
        />
      </div>
    </div>
  );
};

export default RoomWhiteboard;
