import React from 'react';
import '../nonJsxFiles/App.css';
import AnotherChild from '../components/AnotherChild';
import Child from "../components/Child"

interface Props {
  children: React.ReactNode;
}

const Name: React.FC<Props> = ({ children }) => (
  <>
    <Child />
    <AnotherChild />
    {children}
    <AnotherChild>
      <AnotherChild />
    </AnotherChild>
  </>
);

export function Component({ children }: Props) {
  return <>
    <AnotherChild>
      <AnotherChild />
      <Child />
      <AnotherChild />
    </AnotherChild>
  </>
}

export default Name;
