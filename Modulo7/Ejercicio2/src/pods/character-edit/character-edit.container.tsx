import React from 'react';
import { CharacterEditComponent } from './character-edit.component';
import useCharacter from '#pods/character/character.hook.js';
import { useParams } from 'react-router-dom';
import { CharacterEntityVm } from '#pods/character-collection/character-collection.vm.js';
import { useCharacterEdit } from './character-edit.hook';
import { useNavigate } from 'react-router-dom';
export const CharacterEditContainer: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { character, loadCharacter } = useCharacter();
    const { characterUpdated, updateCharacter } = useCharacterEdit();
    React.useEffect(() => {
        if (id) {
            loadCharacter(Number(id));
        }
    }, []);
    const handleSave = (character: CharacterEntityVm) => {
        updateCharacter(Number(id), character);
        navigate('/characters');
    };
    return (
        <div>
            <CharacterEditComponent character={character ?? null} onSave={handleSave} />
        </div>
    );
};