import React from 'react';

const Section = ({ children }) => {
  return (
    <div
      className={`flex-shrink-0 w-screen h-screen flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Section;
