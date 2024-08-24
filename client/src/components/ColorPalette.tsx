import React from "react";

interface Props {
  color : string
  setColor: (c: string) => void;
}

interface Color {
  color: string;
}

const ColorPalette: React.FC<Props> = ({ setColor, color }: Props) => {
  const colors: Color[] = [
    {
      color : "white"
    },
    {
      color: "pink",
    },
    {
      color: "lightgreen",
    },
    {
      color: "#a4fbde",
    },
    {
      color: "lightgrey",
    },
    {
      color: "#f7f796",
    },
    {
      color: "lightblue",
    },
    {
      color: "plum",
    },
    {
      color: "#fdd383",
    },
    {
      color: "#f88e8e",
    },
    {
      color: "lightgoldenrodyellow",
    },
    {
      color: "black",
    },
    {
      color: "#d8f171",
    },
  ];

  return (
    <>
      <div className="color-palette flex justify-between mt-3">
        {colors.map((clr, i) => {
          return (
            <div
              key={i}
              onClick={() => setColor(clr.color)}
              style={{ backgroundColor: clr.color, border : clr.color == color ? "1px solid black" : "" }}
              className={`w-[20px] h-[20px] rounded-[50px]`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default ColorPalette;
