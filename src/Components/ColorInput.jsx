import { useState } from "react";


export default function AddColor({ id, defaultValue }) {
  const [color, setColor] = useState(defaultValue);

function handleInputValue(event) {
    setColor(event.target.value)
}
    return (
        <>
    <input
        type="text"
        id={id}
        name={id}
        value={color}
        onChange={handleInputValue}
      />
      <input type="color" value={color} onChange={handleInputValue} />
      </>
);
}