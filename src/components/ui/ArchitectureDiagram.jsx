import { useMemo } from 'react';
import { motion } from 'framer-motion';

const nodeColors = {
  input: { bg: 'rgba(59, 130, 246, 0.15)', border: '#3b82f6', text: '#93c5fd' },
  core: { bg: 'rgba(0, 240, 255, 0.15)', border: '#00f0ff', text: '#00f0ff' },
  agent: { bg: 'rgba(168, 85, 247, 0.15)', border: '#a855f7', text: '#c084fc' },
  judge: { bg: 'rgba(234, 179, 8, 0.15)', border: '#eab308', text: '#fde047' },
  output: { bg: 'rgba(34, 197, 94, 0.15)', border: '#22c55e', text: '#86efac' },
};

export default function ArchitectureDiagram({ architecture }) {
  const { nodes, edges } = architecture;

  const layout = useMemo(() => {
    const padding = 30;
    const nodeWidth = 150;
    const nodeHeight = 44;
    const cols = Math.min(nodes.length, 4);
    const rows = Math.ceil(nodes.length / cols);
    const gapX = 40;
    const gapY = 50;
    const totalWidth = cols * nodeWidth + (cols - 1) * gapX + padding * 2;
    const totalHeight = rows * nodeHeight + (rows - 1) * gapY + padding * 2;

    const positions = {};
    nodes.forEach((node, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      positions[node.id] = {
        x: padding + col * (nodeWidth + gapX) + nodeWidth / 2,
        y: padding + row * (nodeHeight + gapY) + nodeHeight / 2,
      };
    });

    return { positions, totalWidth, totalHeight, nodeWidth, nodeHeight };
  }, [nodes]);

  return (
    <div className="relative w-full overflow-x-auto rounded-xl bg-bg-dark/50 border border-border-glow p-2">
      <svg
        viewBox={`0 0 ${layout.totalWidth} ${layout.totalHeight}`}
        className="w-full h-auto min-w-[500px]"
        style={{ minHeight: '200px' }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="rgba(0,240,255,0.5)" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = layout.positions[edge.from];
          const to = layout.positions[edge.to];
          if (!from || !to) return null;

          // Calculate edge endpoints at node boundaries
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const angle = Math.atan2(dy, dx);
          const fromX = from.x + Math.cos(angle) * (layout.nodeWidth / 2);
          const fromY = from.y + Math.sin(angle) * (layout.nodeHeight / 2);
          const toX = to.x - Math.cos(angle) * (layout.nodeWidth / 2);
          const toY = to.y - Math.sin(angle) * (layout.nodeHeight / 2);

          return (
            <motion.line
              key={`edge-${i}`}
              x1={fromX}
              y1={fromY}
              x2={toX}
              y2={toY}
              stroke="rgba(0,240,255,0.25)"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const pos = layout.positions[node.id];
          const color = nodeColors[node.type] || nodeColors.core;
          const x = pos.x - layout.nodeWidth / 2;
          const y = pos.y - layout.nodeHeight / 2;

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <rect
                x={x}
                y={y}
                width={layout.nodeWidth}
                height={layout.nodeHeight}
                rx="8"
                fill={color.bg}
                stroke={color.border}
                strokeWidth="1"
                filter="url(#glow)"
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={color.text}
                fontSize="11"
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="500"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
