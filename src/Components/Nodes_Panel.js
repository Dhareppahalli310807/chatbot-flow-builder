import React from 'react';
import { useReactFlow } from 'reactflow';

function NodesPanel() {
  const { project, addNodes } = useReactFlow();

  const handleDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const nodeType = event.dataTransfer.getData('application/reactflow');
    const position = project({ x: event.clientX, y: event.clientY });

    const newNode = {
      id: `${+new Date()}`,
      type: nodeType,
      position,
      data: { label: `${nodeType} node` },
    };

    addNodes(newNode);
  };

  return (
    <aside className="nodes-panel" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
      <div className="description">Drag a node to the canvas:</div>
      <div className="dndnode input" onDragStart={(event) => handleDragStart(event, 'text')} draggable>
        Text Node
      </div>
    </aside>
  );
}

export default NodesPanel;
