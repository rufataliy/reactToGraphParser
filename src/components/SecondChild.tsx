import React from 'react';
import '../nonJsxFiles/App.css';
import SomeOtherChild from "./SomeUserChild"

interface Props {
  children?: React.ReactNode
}

const SecondChild: React.FC<Props> = ({ children }) => {
  return (
    <SomeOtherChild />
  );
}

export default SecondChild;


