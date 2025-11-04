import "./ColorForm.css";
import AddColor from "./ColorInput";



export default function ColorForm({onSubmitColor, initialData = { role: "role", hex: "#000000", contrastText: "#ffffff" },
}) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("GESENDET")
        const formData = new FormData ( event.target );
        const data = Object.fromEntries( formData );
        onSubmitColor(data);
    }

    return (
        <form className="colorForm" onSubmit={handleSubmit}>
            <label htmlFor="role">Rolle</label>
            <input 
            id="role"
            name="role"  
            type="text" 
            defaultValue={initialData.role}
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
            type="submit">
            Hinzufügen</button>
        </form>
    )
}