import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Model: React.FC<Props> = ({ children}: Props) => {
  return (
    <>
      <div className="model w-full h-[100vh] z-50 fixed left-0 top-0 bg-model grid place-items-center">
        {children}
      </div>
    </>
  );
};

export default Model;
