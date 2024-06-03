import { ColorBox } from "./ColorBox";
import { useState } from "react";

export function AddColor() {

  // const color = "crimson";
  const [color, setColor] = useState("skyblue");

  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);
  const inputStyles = {
    fontSize: "25px",
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input style={inputStyles} type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)} />
        <button
          // copy colorList and add newColor
          onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color={colorList[0]} />
            <ColorBox color={colorList[1]} />
            <ColorBox color={colorList[2]} /> */}
    </div>
  );
}
