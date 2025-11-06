import ColorForm from "../ColorForm";
import "./Color.css";
import { useState } from "react";


//Task3 DELETE-Button
export default function Color({ color, onDelete, onUpdated}) {    //Komponente "Color" exportieren, um sie in anderen Dateien nutzen zu können
  const [ confirming, setConfirming ] = useState(false);
  
  function handleDeleteClick() {                     //Wird ausgeführt wenn ich auf den Button "DELETE" klicke
    setConfirming(true);                                //setConfirming wird ausgeführt, zeigt meine Buttons mit "false" an, da useState auf false gesetzt ist
  }
  function handleCancel() {                          //Der Button wird angezeigt, weil handleDeleteClick ausgeführt wurde
    setConfirming(false);                                    //wird bei klicken des "CANCEL" Buttons ausgeführt, Vorgang abbrechen
  }
  function handleDelete() {                         // "^" => wird ausgeführt bei klicken des 2. "DELETE" Buttons
    onDelete();                                         //mit onDelete wird die Löschfunktion aufgerufen(App.jsx)
  }



//Task4 EDIT-Button
  const [ edding, setEdding ] = useState(false)

  function handleEditClick() {
    setEdding(true)
  }
  function handleSaveEdit(updatedColor) {
    onUpdated(updatedColor, color.id);
    setEdding(false);                       // nach dem Speichern Edit-Modus verlassen
  }
  if (edding) {
    return (
      <div className="color-card"
      style={{
          background: color.hex,
          color: color.contrastText,
        }}>
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

        {!confirming ? (        //Task3 DELETE-Button       //confirming = false - nur der DELETE Button ist zu sehen
          <button className="delete_no1" onClick={handleDeleteClick}>DELETE</button>
        ) : (                                               //confirming = true - die Buttons mit Bestätigungsnachricht werden angezeigt
          <div className="confirm-delete">
            <p>Really Delete?</p>
            <button className="delete_no2" onClick={handleDelete}>DELETE</button>
            <button className="cancel" onClick={handleCancel}>CANCEL</button>
          </div>
        )} 
        
        {/* Task4 EDIT-Button */}
        <button className="edit" onClick={handleEditClick}>EDIT</button> 
        </>
    </div>
  );
}  

