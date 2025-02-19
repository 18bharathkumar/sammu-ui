import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader1: React.FC<LoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader1;
