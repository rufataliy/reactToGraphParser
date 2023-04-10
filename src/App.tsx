import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnotherChild from './AnotherChild';
import Child from "./Child"
interface Props {
  children: React.ReactNode;
}

const Name: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Child />
      <AnotherChild />
      {children}
      <AnotherChild>
        <AnotherChild/>
      </AnotherChild>
    </>
  );
}

export function Component() {
  return <></>
}
export default Name;
