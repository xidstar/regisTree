import React from 'react';

const Section = ({ color, children }) => {
  return (
    <div
      className={`flex-shrink-0 w-screen h-screen flex items-center justify-center ${color}`}
    >
      {children}
    </div>
  );
};

export default Section;
