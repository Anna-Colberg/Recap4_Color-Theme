import "./Color.css";
import { useState } from "react";



export default function Color({ color, onDelete }) { //Komponente "Color" exportieren, um sie in anderen Dateien nutzen zu können
  const [confirming, setConfirming] = useState(false);

  const handleDeleteClick = () => { //Wird ausgeführt wenn ich auf den Button "DELETE" klicke
    setConfirming(true);            //setConfirming wird ausgeführt, zeigt meine Buttons mit "false" an, da useState auf false gesetzt ist
  };
  const handleCancel = () => {      //Der Button wird angezeigt, weil handleDeleteClick ausgeführt wurde
    setConfirming();                //wird bei klicken des "CANCEL" Buttons ausgeführt, da nichts weiter passiert, wird der Vorgang abgebrochen
  };
  const handleConfirm = () => {     // "^" => wird ausgeführt bei klicken des 2. "DELETE" Buttons
    onDelete();                     //mit onDelete wird die Löschfunktion aufgerufen(App.jsx) 
  };


  return (
    <>
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {!confirming ? (              //confirming = false - nur der DELETE Button ist zu sehen
      <button onClick={handleDeleteClick}>DELETE</button> 
      ) : (                         //confirming = true - die Buttons mit Bestätigungsnachricht werden angezeigt
      <div className="confirm-delete">
      <p>Really Delete?</p>
      <button onClick={handleConfirm}>DELETE</button>
      <button onClick={handleCancel}>CANCEL</button>
      </div>
      )}
    </div>
    </>
  );
}
