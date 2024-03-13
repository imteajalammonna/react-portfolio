import { useEffect, useState } from 'react';

const SkillsLevel = ({ skillsName, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    });
    
    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mt-4 space-y-3 w-80 md:w-[600px]">
      <div className="flex justify-between items-end mt-10">
        <p className="text-xl font-bold text-black dark:text-white">{skillsName}</p>
        <p className="text-sm text-right">{percentage}%</p>
      </div>
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full w-full bg-[#ff007b] rounded-full ${isVisible ? 'animate-bar' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;
