import { useState } from "react";
import { useHistory } from "react-router";

const CreateSpell = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Abjuration');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div className="create-spell">
            <h2>Create your homebrew spell</h2>
            <form onSubmit={handleSubmit}>
                <label>Spell name:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Spell description and effects:</label>
                <textarea rows="8" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <label>Spell type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Abjuration">Abjuration</option>
                    <option value="Evocation">Evocation</option>
                </select>
                <button>Create Spell</button>
            </form>
        </div>
    )
}

export default CreateSpell;