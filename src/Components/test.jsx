import React, { useState } from 'react';

const SimpleRoundedCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{
          appearance: 'none', // Remove default browser styling
          width: '20px',
          height: '20px',
          borderRadius: '50%', // Makes it rounded
          border: '2px solid #ccc',
          backgroundColor: isChecked ? '#007bff' : 'transparent',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
      />
      <span>Checkbox Label</span>
    </label>
  );
};

export default SimpleRoundedCheckbox;