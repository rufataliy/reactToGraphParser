import React from 'react';
import '../nonJsxFiles/App.css';
import Child from "../components/Child"

interface Props {
  children: React.ReactNode;
}

const Name: React.FC<Props> = ({ children }) => (
  <>
    <Child />
  </>
);

export default Name;
