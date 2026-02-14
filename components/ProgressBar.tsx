
import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max = 100, 
  color = 'bg-[#A25035]',
  height = 'h-2'
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  return (
    <div className={`w-full bg-[#0F0C09]/10 rounded-full overflow-hidden ${height}`}>
      <div 
        className={`${color} h-full rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
