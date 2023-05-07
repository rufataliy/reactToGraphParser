import React from 'react';
import '../nonJsxFiles/App.css';
import FirstChild from "./FirstChild"

interface Props{
  children?: React.ReactNode
}

const ItsChildren: React.FC<Props> = ({ children }) => {
  return (
    <>
      <FirstChild/>
    </>
  );
}

export default ItsChildren;
