import React from 'react';
import ItsChildren from "./ItsChildren"
interface Props {
  children?: React.ReactNode
}

const AnotherChild: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ItsChildren />
    </>
  );
}

export default AnotherChild;
