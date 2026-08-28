import { CharacterEntityVm } from '#pods/character-collection/character-collection.vm.js';
import React, { useState } from 'react';

interface CharacterEditComponentProps {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}

export const CharacterEditComponent: React.FC<CharacterEditComponentProps> = ({ character, onSave }) => {
    const [characterUpdated, setCharacterUpdated] = useState<CharacterEntityVm>({...character});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterUpdated({ ...character, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        onSave(characterUpdated);
    };
  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Editar Personaje</h1>
      <form>
        <input type="text" name="name" placeholder="Nombre" value={characterUpdated?.name} onChange={handleChange} />
        <input type="text" name="status" placeholder="Status" value={characterUpdated?.status} onChange={handleChange} />
        <input type="text" name="species" placeholder="Especie" value={characterUpdated?.species} onChange={handleChange} />
        <input type="text" name="type" placeholder="Tipo" value={characterUpdated?.type} onChange={handleChange} />
        <input type="text" name="gender" placeholder="Género" value={characterUpdated?.gender} onChange={handleChange} />
        <input type="text" name="bestSentence" placeholder="Frase más famosa" value={characterUpdated?.bestSentence} onChange={handleChange} />
        <button onClick={handleSave}>Guardar</button>
      </form>
    </div>
  );
};