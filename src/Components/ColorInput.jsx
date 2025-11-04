import { useState } from "react";

export default function AddColor({ id, name, defaultValue }) {
  const [color, setColor] = useState(defaultValue);

  function handleInputValue(event) {    //ist eine event Funktion, wird aufgerufen, wenn sich der Wert im Input-Feld verändert
    setColor(event.target.value);       // ausgeschrieben: event = target:{value/name/type/...}
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        value={color}
        onChange={handleInputValue}     // funktion wird aufgerufen
      />
      <input
        type="color"
        name={name}
        value={color}
        onChange={handleInputValue}     // funktion wird aufgerufen
      />
    </>
  );
}
