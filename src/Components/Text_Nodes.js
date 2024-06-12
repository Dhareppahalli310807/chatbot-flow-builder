import React from 'react';
import { Handle, Position } from 'reactflow';
import './Text_Nodes.css';

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        style={{ background: '#555' }}
      />
      <div className="text-node-content">
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ background: '#555' }}
      />
    </div>
  );
};

export default TextNode;
