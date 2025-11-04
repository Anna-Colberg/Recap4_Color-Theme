import ColorForm from "../ColorForm";
import "./Color.css";
import { useState } from "react";



export default function Color({ color, onDelete, onUpdated}) {    //Komponente "Color" exportieren, um sie in anderen Dateien nutzen zu können
  const [ confirming, setConfirming ] = useState(false);
  const [ edding, setEdding ] = useState(false)


  function handleDeleteClick() {                     //Wird ausgeführt wenn ich auf den Button "DELETE" klicke
    setConfirming(true);                                //setConfirming wird ausgeführt, zeigt meine Buttons mit "false" an, da useState auf false gesetzt ist
  }
  function handleCancel() {                          //Der Button wird angezeigt, weil handleDeleteClick ausgeführt wurde
    setConfirming();                                    //wird bei klicken des "CANCEL" Buttons ausgeführt, da nichts weiter passiert, wird der Vorgang abgebrochen
  }
  function handleConfirm() {                         // "^" => wird ausgeführt bei klicken des 2. "DELETE" Buttons
    onDelete();                                         //mit onDelete wird die Löschfunktion aufgerufen(App.jsx)
  }
  function handleEditClick() {
    setEdding(true)
  }
  function handleSaveEdit(updatedColor) {
    onUpdated(updatedColor);
    setEdding(true);
  }

  if (edding) {
    return (
      <div className="color-card_edit-mode">
        <ColorForm
        initialData={color}
        onSubmitColor={handleSaveEdit}
        />
      </div>
    );
  }




  return (
    
      <div
        className="color-card"
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
       <>
        <h3 className="color-card-headline">{color.hex}</h3>
        <h4>{color.role}</h4>
        <p>contrast: {color.contrastText}</p>

        {!confirming ? (                                //confirming = false - nur der DELETE Button ist zu sehen
          <button onClick={handleDeleteClick}>DELETE</button>
        ) : (                                           //confirming = true - die Buttons mit Bestätigungsnachricht werden angezeigt
          <div className="confirm-delete">
            <p>Really Delete?</p>
            <button onClick={handleConfirm}>DELETE</button>
            <button onClick={handleCancel}>CANCEL</button>
          </div>
        )}
        <button onClick={handleEditClick}>EDIT</button>
        </>
    </div>
  );
}  

