import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(initialColors); //initialColors ist meine Farbpalette (s.colors.js)

  function handleSubmitColor(colorData) {             //wird ausgeführt, sobald im Formular eine neue Karte erstellt wird
    const newElement = {
      id: crypto.randomUUID(),                        //generiert eine eigene ID für jedes neue Element was hinzugefügt wird,
      ...colorData,                                   //...colorData übernimmt alle Daten die in Formular stehen
    };
    setColors([newElement, ...colors]);               //mein neues Element was erzeugt wurde, wird nun vor die bestehenden Daten gesetzt
  }

  function handleDeleteColor(idToDelete) {                        //Löschfunktion, wird benötigt für die ausführung bei Color.jsx
    setColors(colors.filter((color) => color.id !== idToDelete)); //beim klicken des Buttons "DELETE", wird nur die Karte gelöscht, dessen eindeutige ID vermerkt wurde,
    console.log("DELETE");                                        //es wird also nur die Karte gelöscht, die angeklickt wurde, keine weitere oder andere, da hier auf die ID vermerkt wurde
  }

  function handleUpdateColor(updatedColor) {          
    const updatedColors = colors.map((color) => {
      if (color.id === updatedColor.id) {
        return updatedColor;
      } else {
        return color;
      }
    });
    setColors(updatedColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColor} />
      {colors.map((color ) => (                           //alle Farbelemente werden durchsucht und rendert Color-Komponente
          <Color
            key={color.id}                                //eindeutiger Schlüssel für die Listen.id
            color={color}                                 //übergabe von Objekt und Komponente
            onDelete={() => handleDeleteColor(color.id)}  //Löschfunktion wird ausgeführt, aktuellen Farbkarte über die ID
            onUpdate={handleUpdateColor}
          />
        )
      )}
    </>
  );
}
