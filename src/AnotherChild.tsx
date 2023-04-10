import React from 'react';
import './App.css';

interface Props{
  children?: React.ReactNode
}

const AnotherChild: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
}

export default AnotherChild;
