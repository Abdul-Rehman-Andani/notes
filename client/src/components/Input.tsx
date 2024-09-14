import React, { ReactNode } from "react";

interface Props {
  readonly type: string;
  readonly name: string;
  readonly placeholder: string;
  readonly icon?: ReactNode;
  value? : string
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  icon,
  handleInput,
  value
}: Props) => {
  return (
    <>
      <div className="flex items-center gap-3 mt-5 bg-slate-100 border rounded-lg p-2">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleInput}
          className="outline-none bg-slate-100 flex-1 "
          value={value}
        />
      </div>
    </>
  );
};

export default Input;
