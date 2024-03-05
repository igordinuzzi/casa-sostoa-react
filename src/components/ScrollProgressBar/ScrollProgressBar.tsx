import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css'; // Make sure to create this CSS file for styling

const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollPercentage = () => {
    const scrollProgress = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollProgress / windowHeight) * 100;

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage);

    return () => window.removeEventListener('scroll', updateScrollPercentage);
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
  );
};

export default ScrollProgressBar;
