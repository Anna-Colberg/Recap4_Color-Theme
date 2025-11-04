import "./ColorForm.css";
import AddColor from "./ColorInput";



export default function ColorForm({onSubmitColor, initialData = { role: "role", hex: "#000000", contrastText: "#ffffff" },
}) {        //Probs: onSubmitColor(Funktion zum aufrufen) und initialData (für role, hex und contrastText)
    function handleSubmit(event) {
        event.preventDefault();         //verhindert dass die Seite neu lädt
        console.log("GESENDET")
        const formData = new FormData ( event.target ); //erstellt ein Objekt
        const data = Object.fromEntries( formData );    //wandelt formData in ein JS-Objekt um
        onSubmitColor(data);                            //ruft die Funktion auf, übergibt die Daten(data) dem Formular
    }

    return (                                                //onSubmit={handleSubmit}- mit dem type vom Button verknüpft
        <form className="colorForm" onSubmit={handleSubmit}>  
            <label htmlFor="role">Rolle</label>
            <input 
            id="role"                           //mit htmlFor(<label>) verknüpft
            name="role"                         
            type="text" 
            defaultValue={initialData.role}     //Anfangswert aus Probs
            />
            <br />
            <label htmlFor="hex">Hexadezimalwert</label>
            <AddColor 
            id="hex" 
            name="hex" 
            defaultValue={initialData.hex}
            />
            <br />
            <label htmlFor="contrast">Kontrasttext</label>
            <AddColor 
            id="contrast" 
            name="contrastText" 
            defaultValue={initialData.contrastText} 
            />
            <br />
            <button 
            className="button" 
            type="submit"                       //löst den handleSubmit aus
            >Hinzufügen</button>
        </form>
    )
}