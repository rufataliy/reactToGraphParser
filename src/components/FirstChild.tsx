import React from 'react';
import '../nonJsxFiles/App.css';
import SomeOtherChild from "./SomeUserChild"

interface Props {
  children?: React.ReactNode
}

const FirstChild: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SomeOtherChild />
    </>
  );
}

export default FirstChild;
