import { CharacterEntityVm } from '#pods/character-collection/character-collection.vm.js';
import React, { useState } from 'react';
import * as classes from './character-edit.styles';
import { useNavigate } from 'react-router-dom';

interface CharacterEditComponentProps {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
}

export const CharacterEditComponent: React.FC<CharacterEditComponentProps> = ({ character, onSave }) => {
    const [characterUpdated, setCharacterUpdated] = useState<CharacterEntityVm>({...character});
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterUpdated({ ...character, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        onSave(characterUpdated);
    };
    const handleCancel = () => {
        navigate(`/characters/${character.id}`);
    };
  if (!character) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.root}>
      <h1>Editar Personaje</h1>
      <form className={classes.form}>
        <input type="text" name="name" placeholder="Nombre" value={characterUpdated?.name} onChange={handleChange} className={classes.input} />
        <input type="text" name="status" placeholder="Status" value={characterUpdated?.status} onChange={handleChange} className={classes.input} />
        <input type="text" name="species" placeholder="Especie" value={characterUpdated?.species} onChange={handleChange} className={classes.input} />
        <input type="text" name="type" placeholder="Tipo" value={characterUpdated?.type} onChange={handleChange} className={classes.input} />
        <input type="text" name="gender" placeholder="Género" value={characterUpdated?.gender} onChange={handleChange} className={classes.input} />
        <input type="text" name="bestSentence" placeholder="Frase más famosa" value={characterUpdated?.bestSentence} onChange={handleChange} className={classes.input} />
        <button onClick={handleSave} className={classes.button}>Guardar</button>
        <button onClick={handleCancel} className={classes.button}>Cancelar</button>
      </form>
    </div>
  );
};