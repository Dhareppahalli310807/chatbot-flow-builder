import React from 'react';

function SettingsPanel({ node, setNodes }) {
  const handleChange = (event) => {
    const { value } = event.target;
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) {
          n.data = {
            ...n.data,
            label: value,
          };
        }
        return n;
      })
    );
  };

  return (
    <div className="settings-panel">
      <label>Text:</label>
      <input type="text" value={node.data.label} onChange={handleChange} />
    </div>
  );
}

export default SettingsPanel;
