import React from 'react';

export const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = React.useState("#3b82f6");
  
    const colors = [
      "#B0BEC5", "#3b82f6", "#10b981", 
      "#f59e0b", "#8b5cf6", "#000000"
    ];
  
    return (
      <div className="flex flex-wrap gap-3 p-4">
        {colors.map((hex) => (
          <button
            key={hex}
            onClick={() => setSelectedColor(hex)}
            // Use style for the dynamic hex value
            style={{ backgroundColor: hex }}
            className={`
              w-8 h-8 rounded-full border-2 transition-all
              ${selectedColor === hex ? 'border-gray-900 scale-125' : 'border-transparent'}
              hover:scale-110 active:scale-95
            `}
            aria-label={`Select color ${hex}`}
          />
        ))}
      </div>
    );
  };