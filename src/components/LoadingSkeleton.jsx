import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;