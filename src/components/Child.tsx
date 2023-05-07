import React, { PropsWithChildren } from 'react';
import ItsChildren from './ItsChildren'
import SecondChild from "./SecondChild"

const Component: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SecondChild >
        <ItsChildren />
      </SecondChild>
    </>
  );
}

export default Component;
