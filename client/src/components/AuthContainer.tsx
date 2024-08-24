import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full h-[100vh] fixed z-50 left-0 top-0 grid grid-cols-1 place-items-center bg-white">
      <div className="md:container ">
        <div className='lg:w-1/3 md:w-2/3 w-full mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
